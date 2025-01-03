"use client"

import React,{ useEffect, useState, useRef } from "react";
import WelcomeLoader from "./components/welcome-loader";
import Navbar, { LinkProps } from "./components/navbar";
import About from "./components/about";
import Footer from "./components/contact-us";

import Image from 'next/image';

import LogoImage from "../app/assets/logo.png";
import TeamImage from "../app/assets/employees.svg";
import MailImage from "../app/assets/mail.svg";
import ServiceImage from "../app/assets/service.svg";
import PorfolioImage from "../app/assets/product.svg";
import ContactUs from "./components/contact-us";
import Service from "./components/service";


const navbarLinks:  Array<LinkProps> = 
[
    {
      name: "About", // Perché ogni taglio di capelli è un'opportunità di business! 
      link: "#about-us",
      img: TeamImage
    },
    {
      name: "Service",
      link: "#link",
      img: ServiceImage
    },
    {
      name: "Portfolio",
      link: "#link",
      img: PorfolioImage
    },
    {
      name: "Contact Us",
      link: "#link",
      img: MailImage
    },
  ];


export default function Home() {
  const [navbarRounded, setNavbarRounded] = useState(false);
  const componentRef : any= useRef([]);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setNavbarRounded(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="g-screen font-[family-name:var(--font-geist-sans)] bg-white">
      <Navbar links={navbarLinks} logo={LogoImage} isRounded={true} />
      <section className="h-screen ">
        video
      </section>
      <Service/>
      <main className="min-h-screen flex items-center row">
        <About id={"about-us"}/>
      </main>
      <footer>
        <ContactUs/>
      </footer>
    </div>
    
  );
}
