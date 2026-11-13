import HeaderIcon from "./HeaderIcon";
import HeaderTexts from "./HeaderTexts";
const Header = () => {
  return (
    <header className="w-full h-25 md:h-28 fixed top-0 z-50 bg-white">
      <div className="w-3/4 h-full grid grid-cols-[30%_1fr] lg:grid-cols-[20%_1fr]">
        <HeaderIcon />
        <HeaderTexts />
      </div>
    </header>
  );
};

export default Header;
