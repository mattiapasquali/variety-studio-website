"use client"

import React,{ useEffect, useState, useRef } from "react";
import WelcomeLoader from "./components/welcome-loader";
import Navbar, { LinkProps } from "./components/navbar";
import About from "./components/About";

import Image from 'next/image';

import LogoImage from "../app/assets/logo.png";
import TeamImage from "../app/assets/employees.svg";
import MailImage from "../app/assets/mail.svg";
import ServiceImage from "../app/assets/service.svg";


const navbarLinks:  Array<LinkProps> = 
[
    {
      name: "About", // Perché ogni taglio di capelli è un'opportunità di business! 
      link: "#link",
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
      img: TeamImage
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
    <div className="g-screen font-[family-name:var(--font-geist-sans)] w-full ">
      <Navbar links={navbarLinks} logo={LogoImage} isRounded={navbarRounded} ></Navbar>
      <section className=" h-screen">
      dsf
      </section>
      <main className="h-screen flex items-center">
        <About scrollPosition={scroll}/>
      </main>
      <footer className="row-start-3 h-screen bg-black-800 flex gap-6 flex-wrap items-center justify-center">
      sdfgkjdfg
      </footer>
    </div>
  );
}
