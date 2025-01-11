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
    id : string;
}


const ContactUs : React.FC<ContactsUsProps> = (props) => {

    const [userData, setUserData ] : any = useState<EmailFormData>();

    const sendEmail = async(e : any) => {
        e.preventDefault();
    }
    
    const imageWidth : number = 60;

    return (
        <div id={props.id} className="bg-gray-100 text-black pt-3 pb-4 ">
            <h1 className="text-center text-5xl font-ubuntu mb-10">Contact Us</h1>
                <div className="mx-auto bg-yellow-100 text-orange-400 w-5/6 sm:w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg px-4 mb-8 py-2">
                    <b>🚀 Ready to collaborate ?</b>
                    <p>Share your idea or problem by filling out the form below, and our team will get in touch with you shortly. </p>
                </div>
                <form className="mx-auto flex flex-col gap-1 w-5/6 sm:w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4" onSubmit={sendEmail} >
                    <label className="text-gray-600 pl-3">Your Name</label>
                    <input type="text" id="name" name="from_name" required maxLength={128} placeholder="Your Name" 
                            className="outline-none border-2 border-gray-200 rounded-3xl px-8 py-2 mb-3"
                            onChange={(e : any) => setUserData({...userData, name : e.target.value})}  
                    />
                    <label className="text-gray-600 pl-3">Your email</label>
                    <input type="email" id="email" name="email_from" required maxLength={128} placeholder="Your email address" 
                            className="outline-none border-2 border-gray-200 rounded-3xl px-8 py-2 mb-3"
                            onChange={(e : any) => setUserData({...userData, email : e.target.value})} 
                    />
                    <label className="text-gray-600 pl-3">How can we help you</label>
                    <textarea id="message" name="message" required maxLength={11248576} placeholder="Additional information" 
                        className="outline-none border-2 border-gray-200 rounded-3xl px-8 py-6 min-h-[16em]"
                        onChange={(e : any) => setUserData({...userData, message : e.target.value})} 
                    />
                    <div className="text-center mt-10">
                        <button type="submit" className="bg-black text-white rounded-3xl px-8 py-2" >
                        Submit
                        </button>
                    </div>
                </form>
                  <ul className="flex inline-block mx-auto space-x-3 mt-10" style={{ width: imageWidth * props.contacts.length }}>

                {
                    props.contacts.map((element: ContactsDataProps, index : number) => (
                        <li key={element.name}> 
                            <a href={element.link}>
                                <Image src={element.image} width={imageWidth} height={imageWidth} alt="social icon" />
                            </a>
                        </li>

                    ))

                }
            </ul>
        </div>
    );
}

export default ContactUs;
