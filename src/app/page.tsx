"use client"

import React,{ useEffect, useState, useRef } from "react";
import WelcomeLoader from "./components/welcome-loader";
import Navbar, { LinkProps } from "./components/navbar";
import HomePage from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import ContactUs, { ContactsDataProps } from "./components/contact-us";

import Image from 'next/image';

import LogoImage from "../../public/assets/logo.png";
import TeamImage from "../../public/assets/employees.svg";
import MailImage from "../../public/assets/mail.svg";
import ServiceImage from "../../public/assets/service.svg";
import PorfolioImage from "../../public/assets/product.svg";
import InstagramIcon from "./../../public/assets/instagram.svg";
import TikTokIcon from "./../../public/assets/tik-tok.svg";
import LinkedinIcon from "./../../public/assets/linkedin.svg";
import MailIcon from "./../../public/assets/mail.svg";


const navbarLinks:  Array<LinkProps> = 
[
    
    {
      name: "Service",
      link: "#service",
      image: ServiceImage
    },
    {
      name: "About", // Perché ogni taglio di capelli è un'opportunità di business! 
      link: "#about-us",
      image: TeamImage
    },
    {
      name: "Portfolio",
      link: "#link",
      image: PorfolioImage
    },
    {
      name: "Contact Us",
      link: "#contacts",
      image: MailImage
    },
  ];

const contactsData : Array<ContactsDataProps> = [
  {
    name : "Instagram",
    link : "link",
    image : InstagramIcon
  },
  {
    name : "TikTok",
    link : "",
    image : TikTokIcon
  },
  {
    name : "Linkedin",
    link : "",
    image : LinkedinIcon
  },

]

export default function Home() {
  const [navbarRounded, setNavbarRounded] = useState(false);
  const componentRef : any = useRef([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarRounded(scrollPosition > 10);
    }


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="g-screen font-[family-name:var(--font-geist-sans)] bg-white">
      <Navbar links={navbarLinks} logo={LogoImage} isRounded={true} />  
      <main className="relative flex grid grid-cols  bg-white">
          <HomePage/>
          <Service id={"service"}/>
          <About id={"about-us"}/>
      </main>
      <footer>
        <div className="bg-white">dfgfdg</div>
        <ContactUs contacts={contactsData} id={"contacts"}/>
      </footer>
    </div>
  );
}
