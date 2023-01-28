import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const navlist = [
    { label: "Pricing", link: "pricing" },
    { label: "Product", link: "product" },
    { label: "About Us", link: "about-us" },
    { label: "Careers", link: "careers" },
    { label: "Community", link: "community" },
  ];
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6 ">
          {navlist.map((value, id) => {
            return (
              <React.Fragment key={id}>
                <a
                  href={value.link}
                  className="hover:text-darkGrayishBlue font-semibold"
                >
                  {value.label}
                </a>
              </React.Fragment>
            );
          })}
        </div>
        <button className="hidden md:block hover:bg-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed font-semibold ">
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Header;
