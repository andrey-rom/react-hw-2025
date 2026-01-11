import "./Button.css";

export default function Button({ children, onClick, className = "", ...props }) {
  return (
    <button 
      onClick={onClick} 
      className={`ui-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
