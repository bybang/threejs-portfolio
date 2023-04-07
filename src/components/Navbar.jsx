import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`flex items-center w-full py-5 fixed top-0 z-20 ${styles.paddingX}`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          to="/"
          className="flex items-center gap-2"
        >
          {/* Title */}
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="flex text-[18px] text-white font-bold cursor-pointer">
            Joshua&nbsp;
            <span className="md:block hidden">| Jinyoung</span>&nbsp;Bang
          </p>
        </Link>

        {/* Navbar links */}
        <ul className="list-none sm:flex flex-row gap-10 hidden">
          {navLinks.map((link) => (
            <li
              onClick={() => setActive(link.title)}
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer hover:text-white`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Menu, collpase on small device */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 p-6 black-gradient mx-4 my-2 min-w-[140px] rounded-xl z-10`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[16px] font-poppins font-medium cursor-pointer hover:text-white`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
