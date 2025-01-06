"use client"

import React, { useState } from "react"

import Image from "next/image";
 
interface EmailFormData {
    name: string;
    email: string;
    message: string;
}

export interface ContactsDataProps
{
    name : string;
    link : string;
    image : React.ReactElement
}

interface ContactsUsProps
{
    contacts : Array<ContactsDataProps>;
}


const ContactUs : React.FC<ContactsUsProps> = (props) => {

    const [userData, setUserData ] : any = useState<EmailFormData>();

    const sendEmail = async(e : any) => {
        e.preventDefault();
    }
    
    const imageWidth : number = 60;

    return (
        <div className="bg-gray-100 text-black pt-10 pb-4 ">
            <h1 className="text-center text-5xl font-ubuntu">Contact Us</h1>
            <form>
                
            </form>
            <ul className="flex inline-block  mx-auto space-x-3 mt-10" style={{width : imageWidth * props.contacts.length}}>
                {
                    props.contacts.map((element : ContactsDataProps) => (
                        <li>
                            <a href={element.link}>
                                <Image src={element.image} width={imageWidth} height={imageWidth} alt="social icon"/>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ContactUs;
