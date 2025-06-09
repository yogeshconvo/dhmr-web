// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Search, User, Menu, X } from "lucide-react";
// import logo from "../../assets/nav-logo.png";
// import userIcon from "../../assets/user.png"; // Ensure this path is correct

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { to: "/about", label: "About" },
//     { to: "/about", label: "Academics" },
//     { to: "/programs", label: "Programs" },
//     { to: "https://www.avbrhsawangimeghe.com/", label: "Hospitals" },
//     { to: "/research", label: "Research" },
//     {
//       to: "https://www.dmiher.edu.in/international-cell",
//       label: "Global Connects",
//     },
//   ];

//   const topLinks = [
//     { to: "/admissions", label: "Admissions" },
//     { to: "https://dmiher.edu.in/admissionform", label: "Announcements" },
//     { to: "https://www.dmiher.edu.in/contact-us1", label: "Contact Us" },
//   ];

//   const isActive = (path) => location.pathname === path;
//   const inHomePage = location.pathname == "/";
//   return (
//     <div className="fixed w-full bg-white top-0 left-0 z-50 shadow-md h-[100px] xl:h-[100px]">
//       <div className="flex justify-between items-center px-4 xl:px-6 py-3 pb-0 xl:ml-20 xl:mr-20 ml-0 mr-0 h-full">
//         {/* Logo */}
//         <Link to={"/"} className="flex items-center xl:w-[350px]">
//           <img
//             src={logo}
//             alt="Logo"
//             className={
//               // !inHomePage
//               // ?
//               "xl:w-[200px] w-[200px] z-50"
//               // :
//               // "xl:absolute xl:top-[50px] xl:left-[50px]  xl:w-[350px] w-[200px] z-50"
//             }
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden xl:flex flex-col items-end space-y-2 justify-end h-full gap-2">
//           {/* Top links */}
//           <div className="flex items-center gap-2 text-[15px] font-[500] font-helvetica text-[#707070]">
//             {topLinks.map((link, index) => {
//               const isExternal = link.to.startsWith("http");
//               const commonClasses = `hover:underline pr-3 text-nowrap ${
//                 !isExternal && isActive(link.to)
//                   ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
//                   : ""
//               } ${index < 2 ? "border-r-2 border-[#707070]" : ""}`;

//               return isExternal ? (
//                 <a
//                   key={link.to}
//                   href={link.to}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={commonClasses}
//                 >
//                   {link.label}
//                 </a>
//               ) : (
//                 <Link key={link.to} to={link.to} className={commonClasses}>
//                   {link.label}
//                 </Link>
//               );
//             })}

//             {/* Login Icon */}
//             <a
//               href="https://www.dmiher.edu.in/pct_result/auth/login"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-600 hover:text-black"
//             >
//               <div className="w-8 h-8 rounded-full flex items-center justify-center">
//                 <img
//                   src={userIcon}
//                   alt="Login"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="text-sm sm:text-base font-light">Login</span>
//             </a>
//           </div>

//           {/* Bottom nav links */}
//           <div className="flex gap-10 text-[#1f3c88] text-[22px]">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`pb-[2px] border-b-[5px] ${
//                   isActive(link.to)
//                     ? "border-[#ff4f37]"
//                     : "border-transparent hover:border-[#ff4f37]"
//                 }`}
//                 style={{
//                   textWrapMode: "nowrap",
//                 }}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Toggle Button */}
//         <div className="xl:hidden ">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       <div
//         className={`xl:hidden transition-all duration-300 ease-in-out ${
//           mobileMenuOpen
//             ? "fixed inset-0 bg-primary opacity-100"
//             : "fixed inset-0 opacity-0 pointer-events-none"
//         } z-50`}
//       >
//         <div className="flex flex-col p-4 space-y-4 text-sm text-gray-700 font-oswald-medium font-light h-full overflow-y-auto">
//           {/* Main nav links */}
//           <div className="flex flex-col gap-2 space-y-2 text-white font-oswald-medium font-medium text-[16px] border-b-[3px] pb-4 border-b-white ">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`border-b-[1px] pb-2 [&:not(:last-child)]:border-b-ligh-gray block ${
//                   isActive(link.to)
//                     ? "border-[#ff4f37] text-[#ff4f37]"
//                     : "border-transparent hover:text-[#ff4f37]"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Top links */}
//           <div className="flex flex-col flex-wrap gap-2 text-[15px] font-[500] font-helvetica text-white border-b-[3px] pb-4 border-b-white">
//             {topLinks.map((link, index) => {
//               const isExternal = link.to.startsWith("http");
//               const commonClasses = `hover:underline border-none text-white font-normal ${
//                 !isExternal && isActive(link.to)
//                   ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
//                   : ""
//               }`;

//               return isExternal ? (
//                 <a
//                   key={link.to}
//                   href={link.to}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={commonClasses}
//                 >
//                   {link.label}
//                 </a>
//               ) : (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={commonClasses}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Admission Help */}
//           <div className="flex flex-col gap-1">
//             <span className="font-bold text-white text-lg">
//               Admission Helpline
//             </span>
//             <a
//               href="tel:+918888040999"
//               className="font-bold text-secondary text-lg"
//             >
//               +91 8888040999
//             </a>
//           </div>

//           {/* Login Icon */}
//           <a
//             href="https://www.dmiher.edu.in/pct_result/auth/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => setMobileMenuOpen(false)}
//             className="flex items-center gap-2 text-white hover:text-black"
//           >
//             <div className="w-8 h-8 rounded-full flex items-center justify-center">
//               <img
//                 src={userIcon}
//                 alt="Login"
//                 className="w-full h-full object-cover brightness-0 invert-100"
//               />
//             </div>
//             <span className="text-lg sm:text-base font-light flex items-center bg-[#F04E30] text-white px-8 py-1 uppercase sm:px-5 sm:py-2 space-x-3">
//               Login
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/nav-logo.png";
import userIcon from "../../assets/user.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/about", label: "Academics" },
    { to: "/programs", label: "Programs" },
    { to: "https://www.avbrhsawangimeghe.com/", label: "Hospitals" },
    { to: "/research", label: "Research" },
    {
      to: "https://www.dmiher.edu.in/international-cell",
      label: "Global Connects",
    },
  ];

  const topLinks = [
    { to: "/admissions", label: "Admissions" },
    { to: "https://dmiher.edu.in/admissionform", label: "Announcements" },
    { to: "https://www.dmiher.edu.in/contact-us1", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <div className="fixed w-full bg-white top-0 left-0 z-50 shadow-md h-[100px] xl:h-[100px]">
        <div className="flex justify-between items-center px-4 xl:px-6 py-3 pb-0 xl:ml-20 xl:mr-20 ml-0 mr-0 h-full">
          {/* Logo */}
          <Link to={"/"} className="flex items-center xl:w-[350px]">
            <img
              src={logo}
              alt="Logo"
              className="xl:w-[200px] w-[200px] z-50"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex flex-col items-end space-y-2 justify-end h-full gap-2">
            {/* Top links */}
            <div className="flex items-center gap-2 text-[15px] font-[500] font-helvetica text-[#707070]">
              {topLinks.map((link, index) => {
                const isExternal = link.to.startsWith("http");
                const commonClasses = `hover:underline pr-3 text-nowrap ${
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
            <div className="flex gap-10 text-[#1f3c88] text-[22px]">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`pb-[2px] border-b-[5px] ${
                    isActive(link.to)
                      ? "border-[#ff4f37]"
                      : "border-transparent hover:border-[#ff4f37]"
                  }`}
                  style={{
                    textWrapMode: "nowrap",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="xl:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen, no gap */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "fixed inset-0 bg-primary opacity-100 z-50"
            : "fixed inset-0 opacity-0 pointer-events-none z-50"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 text-sm text-gray-700 font-oswald-medium font-light h-full overflow-y-auto">
          {/* Main nav links */}
          <div className="flex flex-col gap-2 space-y-2 text-white font-oswald-medium font-medium text-[16px] border-b-[3px] pb-4 border-b-white ">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b-[1px] pb-2 [&:not(:last-child)]:border-b-ligh-gray block ${
                  isActive(link.to)
                    ? "border-[#ff4f37] text-[#ff4f37]"
                    : "border-transparent hover:text-[#ff4f37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Top links */}
          <div className="flex flex-col flex-wrap gap-2 text-[15px] font-[500] font-helvetica text-white border-b-[3px] pb-4 border-b-white">
            {topLinks.map((link, index) => {
              const isExternal = link.to.startsWith("http");
              const commonClasses = `hover:underline border-none text-white font-normal ${
                !isExternal && isActive(link.to)
                  ? "border-b-[2px] border-[#ff4f37] text-[#ff4f37]"
                  : ""
              }`;

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

          {/* Admission Help */}
          <div className="flex flex-col gap-1">
            <span className="font-bold text-white text-lg">
              Admission Helpline
            </span>
            <a
              href="tel:+918888040999"
              className="font-bold text-secondary text-lg"
            >
              +91 8888040999
            </a>
          </div>

          {/* Login Icon */}
          <a
            href="https://www.dmiher.edu.in/pct_result/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-white hover:text-black"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img
                src={userIcon}
                alt="Login"
                className="w-full h-full object-cover brightness-0 invert-100"
              />
            </div>
            <span className="text-lg sm:text-base font-light flex items-center bg-[#F04E30] text-white px-8 py-1 uppercase sm:px-5 sm:py-2 space-x-3">
              Login
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
