"use client";

import React, {useState} from "react";

import Image from "next/image";
import { link } from "fs";

export interface LinkProps{
    name : string;
    link : string;
    img: React.ReactElement;
}

export interface LinksProps{
    links : Array<LinkProps>;
    logo: any;
    isRounded : boolean;
}

const Navbar : React.FC<LinksProps> = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    console.log(props.isRounded);
    return (
        <nav className={`bg-white w-full z-10 text-black fixed h-auto transition-[border-radius] duration-300 ease-linear  ${props.isRounded ? "scale-100 left-1/2 trasform -translate-x-1/2 rounded-bl-[30px] rounded-br-[30px] mx-auto  md:max-w-[800px] lg:max-w-[900px] " : " "}`}>
            <div className="mx-auto flex items-center justify-between px-4 py-6  max-w-[1000px] ">
                <div className="inline-flex items-center">
                    <Image className="w-[35px] h-[35px] mr-2 rounded " src={props.logo} width={100} height={100} alt="logo"/>
                    <p className="sm:hidden lg:block text-md ">Variety Studios </p>
                </div>
                <div className="hidden lg:flex sm:flex items-center justifay-center text-center mx-auto">
                    {
                        props.links.map((link : LinkProps, index : number) => (
                            <div key={index} className="flex items-center mr-4">                               
                            <Image src={link.img} width={25} alt="logo"/>
                                <a key={index} href={link.link} className="font-semibold uppercase text-xs mr-4 ml-2 " onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            </div>

                        ))
                    }
                </div>

                <div className="inline sm:hidden flex border rounded-xl px-2 lg:hidden">
                    <button style={{height : "40px"}}
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        >
                        <svg className="h-6 w-6 fill-light" viewBox="0 0 24 24" >
                        {isOpen ? (   
                            <path
                                fillRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        ) : (
                            <path
                                fillRule="evenod"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`overflow-hidden lg:hidden sm:hidden md:hidden transition-all duration-3000 ease-in-out ${isOpen ? "h-auto" : "h-0"}`}>
                <div className="grid grid-cols-2  gap-3 items-start text-center text-5xl justify-center mb-5">
                    {
                        props.links.map((link : LinkProps) => (
                            <div className="flex items-left justify-center " >
                                 <Image src={link.img} width={25} height={25} alt="logo"/>
                                <a href={link.link} className="font-semibold text-2xl sm:text-4xl  ml-2 " onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;