/**
 * Author: Paurav Shah
 * Date: 2025-12-14
 * Version: 1.0.0
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from 'react';
import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, 
  NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent id="brand-logo-section" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Avatar size="sm" title="Paurav" color="default" src="./paurav_shah_photo.jpg"/>
          &nbsp;&nbsp;
          <Link id="brand-logo" className="google-sans-code-regular" title="Paurav" color="foreground" href="#">
            Paurav
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent id="brand-portfolio-section" className="hidden sm:flex gap-10" justify="center">
        {/* <NavbarItem>
          <Link id="about-item" className="menuItem" color="foreground" title="About" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="services-item" className="menuItem" color="foreground" title="Services" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="portfolio-item" className="menuItem" color="foreground" title="Portfolio" href="#portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link id="contact-item" className="menuItem" color="foreground" title="Contact" href="#contact">
            Contact
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent id="brand-social-section" justify="end">
        <NavbarItem>
          <Link color="foreground" title="Paurav Shah | LinkedIn" target="_blank" href="https://github.com/paurav11">
            <FaGithub/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Paurav Shah | LinkedIn" target="_blank" href="https://linkedin.com/in/paurav11/">
            <FaLinkedin/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Paurav Shah | Instagram" target="_blank" href="https://instagram.com/paurav_11/">
            <FaInstagram/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Paurav Shah | Facebook" target="_blank" href="https://facebook.com/paurav.shah.11/">
            <FaFacebook/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" title="Paurav Shah | X" target="_blank" href="https://x.com/PauravNShah">
            <FaXTwitter/>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" title="Paurav Shah | YouTube" target="_blank" href="https://www.youtube.com/@paurav11">
            <FaYoutube/>
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {/* <NavbarMenuItem>
          <Link id="about-item" className="w-full" title="About" color="foreground" href="#about" size="lg">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link id="services-item" className="w-full" title="Services" color="foreground" href="#services" size="lg">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link id="portfolio-item" className="w-full" title="Portfolio" color="foreground" href="#portfolio" size="lg">
            Portfolio
          </Link>
        </NavbarMenuItem> */}
        <NavbarMenuItem>
          <Link id="contact-item" className="w-full" title="Contact" color="foreground" href="#contact" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

const navbar = () => {
  useEffect(() => {
    ReactDOM.createRoot(document.getElementById("navbar-item")).render(
      <React.StrictMode>
        <NextUIProvider>
          <div className="w-screen flex items-start justify-center">
            <Menu/>
          </div>
        </NextUIProvider>
      </React.StrictMode>
    );
  }, []);

  return <div id="navbar-item"></div>;
};

export default navbar;