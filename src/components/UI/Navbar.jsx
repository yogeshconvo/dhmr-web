import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import logo from "../../assets/nav-logo.png";
import userIcon from "../../assets/user.png"; // Ensure this path is correct

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
    { to: "https://dmiher.edu.in/admissionform", label: "Announcements" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full bg-white top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 md:px-6 py-3 lg:ml-20 lg:mr-20 ml-0 mr-0">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col items-end space-y-2">
          {/* Top links */}
          <div className="flex items-center gap-2 text-[15px] font-[500] font-helvetica text-[#707070]">
            {topLinks.map((link, index) => {
              const isExternal = link.to.startsWith("http");
              const commonClasses = `hover:underline pr-3 ${
                !isExternal && isActive(link.to)
                  ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                  : ""
              } ${index < 2 ? "border-r-2 border-[#707070]" : ""}`;

              return isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className={commonClasses}>
                  {link.label}
                </Link>
              );
            })}

            {/* Login Icon */}
            <a
              href="https://www.dmiher.edu.in/pct_result/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src={userIcon}
                  alt="Login"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm sm:text-base font-light">Login</span>
            </a>
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
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col px-4 pb-4 space-y-4 text-sm text-gray-700 font-oswald-medium font-light">
          {/* Top links (horizontal in mobile like desktop) */}
          <div className="flex flex-row flex-wrap gap-2 text-[15px] font-[500] font-helvetica text-[#707070]">
            {topLinks.map((link, index) => {
              const isExternal = link.to.startsWith("http");
              const commonClasses = `hover:underline pr-3 ${
                !isExternal && isActive(link.to)
                  ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                  : ""
              } ${index < 2 ? "border-r-2 border-[#707070]" : ""}`;

              return isExternal ? (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={commonClasses}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={commonClasses}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Login Icon */}
          <a
            href="https://www.dmiher.edu.in/pct_result/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img
                src={userIcon}
                alt="Login"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-base font-light">Login</span>
          </a>

          {/* Search bar */}

          {/* Main nav links */}
          <div className="flex flex-col space-y-2 text-[#1f3c88] font-oswald-medium font-medium text-[16px]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
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
