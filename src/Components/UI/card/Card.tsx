import { FunctionComponent } from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ children, className }) => {
  return <aside className={className}>{children}</aside>;
};

export default Card;
