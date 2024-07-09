'use client'
import React, { useState } from "react";
import "./navigationbar.scss";
import Link from "next/link";
// import { DropdownButton } from "@/ui/svg/DropDownButton";


export default function NavigationBar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const toggleNavDropdown = () => {
    setShowNavDropdown((prev) => !prev);
  };
  return (
    // <div className={color ? "nav-container nav-container-bg" : "nav-container"}>
    <div className="nav-container">
      <div className="nav-logo">
        <Link href="/" style={{ textDecoration: "none" }}>
          <img
            src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/white_galago+1.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="nav-links">
        <div className="d-flex gap-5 nav-links-main">
          <Link
            href="/"
            onClick={scrollToTop}
            // className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <p>Home</p>
          </Link>
          <Link
            href="/promos"
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
          >
            <p>Promos</p>
          </Link>
          <Link
            href="/blogs"
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
          >
            <p>Blogs</p>
          </Link>
          <Link
            href="https://www.walktheplanet.com"
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
          >
            <p>About Us</p>
          </Link>
        </div>
        {/* <button className="shadow-sm rounded">Login</button> */}
        <div className="nav-info d-flex align-items-center gap-2">
          <div className="nav-profile">
            <img
              src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/NavigationBar+Assets/ProfilePicture.jpg"
              alt=""
              style={{ border: "2px solid #ffffff" }}
            />{" "}
          </div>
          <div
            className="nav-profile-info d-flex align-items-center gap-2"
            onClick={toggleNavDropdown}
            style={{ cursor: "pointer" }}
          >
            <p>Christian Mae</p>
            <p>
              {/* <DropdownButton _color="#FFFFFF" _height={7} _width={11} /> */}
            </p>
          </div>
          {showNavDropdown && (
            <div
              className="nav-dropdown w-full"
              onMouseLeave={() => setShowNavDropdown(false)}
            >
              <Link href="/bookings-and-trips" style={{ textDecoration: "none" }}>
                <p className="nav-dropdown-links">Bookings and Trips</p>
              </Link>
              <Link href="/profile" style={{ textDecoration: "none" }}>
                <p className="nav-dropdown-links">Account</p>
              </Link>
              <Link href="/favorites-page" style={{ textDecoration: "none" }}>
                <p className="nav-dropdown-links">Favorites</p>
              </Link>
              <hr />
              <Link href="/help-center" style={{ textDecoration: "none" }}>
                <p className="nav-dropdown-links">Help Center</p>
              </Link>
              <Link href="/" style={{ textDecoration: "none" }}>
                <p className="nav-dropdown-links">Log Out</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

