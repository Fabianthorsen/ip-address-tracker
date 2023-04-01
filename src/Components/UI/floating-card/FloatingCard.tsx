import { FunctionComponent } from "react";

interface FloatingCardProps {
  children: React.ReactNode;
}

const FloatingCard: FunctionComponent<FloatingCardProps> = ({ children }) => {
  return (
    <aside className="bg-white absolute -translate-x-1/2 top-1/4 left-1/2 h-max p-3 rounded-lg z-20">
      {children}
    </aside>
  );
};

export default FloatingCard;
