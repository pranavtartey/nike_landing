import HeaderLogo from "../assets/images/headerLogo.svg";
import Hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={HeaderLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <img src={Hamburger} alt="hamburgerLogo" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
