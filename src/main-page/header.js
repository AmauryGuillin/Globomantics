import logo from "./GloboLogo.png";

const Header = ({ subtitle }) => (
  <header className="flex justify-evenly items-center">
    <div>
      <img src={logo} className="h-[150px]" alt="logo" />
    </div>
    <div className="italic text-xl text-orange-600">{subtitle}</div>
  </header>
);

export default Header;
