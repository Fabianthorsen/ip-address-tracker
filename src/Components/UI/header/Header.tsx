import { FunctionComponent } from "react";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({ title, children }) => {
  return (
    <header className="bg-mobile-image md:bg-desktop-image bg-cover">
      <h1>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
