import { FunctionComponent } from "react";

interface HeaderProps {
  title: string;
  className: string;
  children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  className,
  children,
}) => {
  const fullClass = `bg-mobile-image md:bg-desktop-image bg-cover ${className}`;
  return (
    <header className={fullClass}>
      <h1 className="py-5 md:py-9 text-xl md:text-3xl font-semibold tracking-wider text-white">
        {title}
      </h1>
      {children}
    </header>
  );
};

export default Header;
