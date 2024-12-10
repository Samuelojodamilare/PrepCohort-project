import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { pcLogo } from "../../assets";
import { layout } from "../../style";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionTop = document.getElementById("hero")?.offsetTop || 0;
      setBgColor(window.scrollY >= heroSectionTop);
      // if (heroSection) {
      //   const heroTop = heroSection.getBoundingClientRect().top;
      //   if (heroTop <= 0) {
      //     setBgColor(true);
      //   } else {
      //     setBgColor(false);
      //   }
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 ${
        bgColor ? "bg-white" : ""
      } transition-colors duration-500 `}>
      <div
        className={`${layout.container} flex items-center justify-between py-6 lg:py-8 xl:px-5`}>
        <div>
          <a
            href="#"
            className="flex items-center text-black text-[32px]"
            aria-label="Homepage link">
            <div className="w-[200px] h-auto">
              <img
                src={pcLogo}
                alt="Prepcohort logo"
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
            {/* <span className="text-text-h">
              <b>Prep</b>
            </span>
            Cohort */}
          </a>
        </div>
        <nav className="flex items-center space-x-4">
          <NavLink
            to="/schools"
            className={({ isActive }) =>
              isActive
                ? "hidden 1xl:inline-block text-white bg-[#20419A] text-sm sm:text-[15px] font-poppins font-semibold px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-md cursor-pointer transition-colors duration-500 hover:bg-[#4f5de4]"
                : "font-poppins text-black text-[16px] cursor-pointer transition-colors duration-500 hover:text-secondary"
            }
            aria-label="For Schools">
            For Schools
          </NavLink>
          <NavLink
            to="/#"
            className={({ isActive }) =>
              isActive
                ? "hidden 1xl:inline-block text-white bg-[#20419A] text-sm sm:text-[15px] font-poppins font-semibold px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-md cursor-pointer transition-colors duration-500 hover:bg-[#4f5de4]"
                : "font-poppins text-black text-[16px] cursor-pointer transition-colors duration-500 hover:text-secondary"
            }
            aria-label="For Schools">
            For Students
          </NavLink>
          {/* <button className="hidden xl:inline-block text-white bg-[#20419A] text-sm sm:text-[15px] font-poppins font-semibold px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-md cursor-pointer transition-colors duration-500 hover:bg-[#4f5de4]">
            For Students
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
