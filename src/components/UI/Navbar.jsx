import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import logo from "../../assets/nav-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/spdc", label: "Academics" },
    { to: "/programs", label: "Programs" },
    { to: "/hospitals", label: "Hospitals" },
    { to: "/research", label: "Research" },
    { to: "/global-connects", label: "Global Connects" },
  ];

  const topLinks = [
    { to: "/admissions", label: "Admissions" },
    { to: "/announcements", label: "Announcements" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full bg-white  top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 md:px-6 py-3 lg:ml-20 lg:mr-20 ml-0 mr-0">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col items-end space-y-2">
          {/* Top links */}
          <div className="flex items-center gap-2 text-[15px] font-[500] font-helvetica text-[#707070]">
            {topLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:underline pr-3 ${
                  isActive(link.to)
                    ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                    : ""
                } ${index < 2 ? "border-r-2 border-[#707070]" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center border border-gray-400 px-2 py-[2px] ">
              <input
                type="text"
                className="text-sm w-[100px] outline-none border-none"
              />
              <Search size={15} className="text-gray-700" />
            </div>

            <Link to="/profile">
              <User size={20} className="text-black" />
            </Link>
          </div>

          {/* Bottom nav links */}
          <div className="flex gap-12 text-[#1f3c88] text-[22px]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`pb-[2px] border-b-[5px] ${
                  isActive(link.to)
                    ? "border-[#ff4f37]"
                    : "border-transparent hover:border-[#ff4f37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col px-4 pb-4 space-y-4 text-sm text-gray-700 font-oswald-medium font-light">
          {/* Top links */}
          <div className="flex flex-col space-y-2">
            {topLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  isActive(link.to)
                    ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                    : "border-b-[2px] border-transparent hover:text-[#ff4f37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search bar and profile */}
          <div className="flex justify-between items-center">
            <div className="flex items-center border border-gray-400 px-2 py-[2px] rounded-sm w-full">
              <input
                type="text"
                placeholder="Search"
                className="text-sm w-full outline-none border-none"
              />
              <Search size={14} className="text-gray-700" />
            </div>
            <Link to="/profile" className="ml-2">
              <User size={20} className="text-black" />
            </Link>
          </div>

          {/* Main nav links */}
          <div className="flex flex-col space-y-2 text-[#1f3c88] font-oswald-medium font-medium text-[16px]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`w-fit border-b-[2px] ${
                  isActive(link.to)
                    ? "border-[#ff4f37] text-[#ff4f37]"
                    : "border-transparent hover:text-[#ff4f37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
