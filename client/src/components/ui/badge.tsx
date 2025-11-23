import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge: React.FC<BadgeProps> = ({ className = "", ...props }) => (
  <span className={`badge ${className}`.trim()} {...props} />
);

export default Badge;
