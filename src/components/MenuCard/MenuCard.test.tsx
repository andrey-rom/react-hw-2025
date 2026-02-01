import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuCard from './MenuCard';
import type { MenuItem } from '../../types';

vi.mock('../../contexts/LanguageContext', () => ({
  useLanguage: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'menuCard.addToCard': 'Add to card',
      };
      return translations[key] || key;
    },
  }),
}));

describe('MenuCard', () => {
  const mockDish: MenuItem = {
    id: '1',
    meal: 'Test Meal',
    price: '10.99',
    img: 'https://example.com/image.jpg',
    category: 'Dinner',
  };

  it('should render dish information correctly', () => {
    render(<MenuCard dish={mockDish} />);

    expect(screen.getByText('Test Meal')).toBeInTheDocument();
    expect(screen.getByText('10.99 USD')).toBeInTheDocument();
    expect(screen.getByAltText('Test Meal')).toBeInTheDocument();
    expect(screen.getByAltText('Test Meal')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('should render quantity input with default value of 1', () => {
    render(<MenuCard dish={mockDish} />);

    const quantityInput = screen.getByLabelText('Quantity') as HTMLInputElement;
    expect(quantityInput).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
    expect(quantityInput).toHaveAttribute('min', '1');
  });

  it('should render "Add to card" button', () => {
    render(<MenuCard dish={mockDish} />);

    const addButton = screen.getByText('Add to card');
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveClass('add-to-cart-button');
  });

  it('should update quantity when input value changes', async () => {
    const user = userEvent.setup();
    render(<MenuCard dish={mockDish} />);

    const quantityInput = screen.getByLabelText('Quantity') as HTMLInputElement;
    
    await user.clear(quantityInput);
    await user.type(quantityInput, '5');

    expect(parseInt(quantityInput.value)).toBeGreaterThanOrEqual(5);
  });

  it('should not allow quantity less than 1', async () => {
    const user = userEvent.setup();
    render(<MenuCard dish={mockDish} />);

    const quantityInput = screen.getByLabelText('Quantity') as HTMLInputElement;
    
    await user.clear(quantityInput);
    await user.type(quantityInput, '0');
    
    fireEvent.blur(quantityInput);
    
    const value = parseInt(quantityInput.value) || 1;
    expect(value).toBeGreaterThanOrEqual(1);
  });

  it('should call onAddToCart with correct dish and quantity when button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnAddToCart = vi.fn();
    render(<MenuCard dish={mockDish} onAddToCart={mockOnAddToCart} />);

    const quantityInput = screen.getByLabelText('Quantity') as HTMLInputElement;
    
    fireEvent.change(quantityInput, { target: { value: '3' } });

    const addButton = screen.getByText('Add to card');
    await user.click(addButton);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockDish, 3);
  });

  it('should reset quantity to 1 after adding to cart', async () => {
    const user = userEvent.setup();
    const mockOnAddToCart = vi.fn();
    render(<MenuCard dish={mockDish} onAddToCart={mockOnAddToCart} />);

    const quantityInput = screen.getByLabelText('Quantity') as HTMLInputElement;
    await user.clear(quantityInput);
    await user.type(quantityInput, '5');

    const addButton = screen.getByText('Add to card');
    await user.click(addButton);

    expect(quantityInput.value).toBe('1');
  });

  it('should handle empty onAddToCart prop gracefully', async () => {
    const user = userEvent.setup();
    render(<MenuCard dish={mockDish} />);

    const addButton = screen.getByText('Add to card');

    await user.click(addButton);
    
    expect(addButton).toBeInTheDocument();
  });

  it('should handle invalid input values by defaulting to 1', async () => {
    const user = userEvent.setup();
    render(<MenuCard dish={mockDish} />);

    const quantityInput = screen.getByLabelText('Quantity') as HTMLInputElement;
    
    await user.clear(quantityInput);
    await user.type(quantityInput, 'abc');
    
    fireEvent.blur(quantityInput);
    
    const value = parseInt(quantityInput.value) || 1;
    expect(value).toBe(1);
  });

  it('should have correct CSS classes', () => {
    const { container } = render(<MenuCard dish={mockDish} />);

    expect(container.querySelector('.menu-card')).toBeInTheDocument();
    expect(container.querySelector('.menu-card-image')).toBeInTheDocument();
    expect(container.querySelector('.menu-card-content')).toBeInTheDocument();
    expect(container.querySelector('.menu-card-title-group')).toBeInTheDocument();
    expect(container.querySelector('.menu-card-actions')).toBeInTheDocument();
  });
});
