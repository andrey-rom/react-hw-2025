import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`ui-input ${className}`}
      {...props}
    />
  );
});

export default Input;

