import { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(({ children, onClick, className = "", ...props }, ref) => {
  return (
    <button 
      ref={ref}
      onClick={onClick} 
      className={`ui-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
