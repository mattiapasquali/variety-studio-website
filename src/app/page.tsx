import WelcomeLoader from "./components/welcome-loader";
import Navbar, { LinksProps } from "./components/navbar";

import Image from 'next/image';

import LogoImage from "../app/assets/varietystudioslogo.png";
import TeamImage from "../app/assets/employees.svg";
import MailImage from "../app/assets/mail.svg";
import ServiceImage from "../app/assets/service.svg";

const navbarSetting: LinksProps = {
  links: [
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
  ],
  logo : LogoImage
};


export default function Home() {
  //        <WelcomeLoader text={"Welcome To Variety Studios"}></WelcomeLoader>

  return (
    <div className="g-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar links={navbarSetting.links} logo={navbarSetting.logo}></Navbar>
      <section className="absolute top-2 transform left-1/2 -translate-x-1/2">
      </section>
      <main className="h-screen flex items-center">
        <Image className="mx-auto" src={LogoImage} alt="Logo" width={600} height={400} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
