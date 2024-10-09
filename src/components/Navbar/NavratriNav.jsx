import React, { useState, useEffect } from "react";
import { FaHome, FaUsers, FaDiaspora } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import './NavratriNav.css'; // Import custom CSS
import { Link } from "react-router-dom";

const NavratriNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const navItems = [
    { name: "Home Page", icon: <FaHome />, link: "/Navratri-2024/" },
    { name: "Classmates", icon: <FaUsers />, link: "/classmates" },
    // { name: "Celebrations", icon: <FaDiaspora />, link: "/celebrations", subItems: [
    //   { name: "Events", link: "/celebrations/events" },
    //   { name: "Gallery", link: "/celebrations/gallery" },
    // ]},
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (link) => {
    if (link === "/restricted") {
      setError("Oops! This section is currently dancing to a different tune. Please try again later!");
      setTimeout(() => setError(null), 3000);
    } else {
      setError(null);
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <div className="nav-header">
          <div className="nav-logo">
            <span className="logo-text">Happy Navratri</span>
          </div>
          <div className="nav-desktop">
            <div className="nav-items">
              {navItems.map((item) => (
                <div key={item.name} className="nav-item">
                  <Link
                    to={item.link}
                    className="nav-link"
                    onClick={() => handleNavClick(item.link)}
                    aria-haspopup={item.subItems ? "true" : "false"}
                  >
                    {item.icon}
                    <span className="nav-item-text">{item.name}</span>
                  </Link>
                  {item.subItems && (
                    <div className="sub-menu">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className="sub-item"
                          onClick={() => handleNavClick(subItem.link)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="nav-mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle-btn"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              {isOpen ? <MdClose className="menu-icon" /> : <MdMenu className="menu-icon" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobile-menu">
        <div className="mobile-menu-items">
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              <Link
                to={item.link}
                className="mobile-nav-link"
                onClick={() => handleNavClick(item.link)}
              >
                {item.icon}
                <span className="mobile-nav-text">{item.name}</span>
              </Link>
              {item.subItems && item.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.link}
                  className="mobile-sub-item"
                  onClick={() => handleNavClick(subItem.link)}
                >
                  {subItem.name}
                </Link>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {error && (
        <div className="error-toast">
          {error}
        </div>
      )}
    </nav>
  );
};

export default NavratriNav;
