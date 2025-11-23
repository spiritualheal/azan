import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "md", className = "", ...props }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`.trim()}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
