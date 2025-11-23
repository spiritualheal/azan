import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={`card ${className}`.trim()} {...props} />
);

export const CardHeader: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={`card-header ${className}`.trim()} {...props} />
);

export const CardTitle: React.FC<CardProps> = ({ className = "", ...props }) => (
  <h3 className={`card-title ${className}`.trim()} {...props} />
);

export const CardDescription: React.FC<CardProps> = ({ className = "", ...props }) => (
  <p className={`card-description ${className}`.trim()} {...props} />
);

export const CardContent: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={`card-content ${className}`.trim()} {...props} />
);

export default Card;
