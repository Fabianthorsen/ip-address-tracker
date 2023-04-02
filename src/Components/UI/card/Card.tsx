import { FunctionComponent } from "react";

interface FloatingCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FloatingCard: FunctionComponent<FloatingCardProps> = ({
  children,
  className,
}) => {
  return <aside className={className}>{children}</aside>;
};

export default FloatingCard;
