"use client"

import React, { useState } from "react"
 
interface EmailFormData {
    name: string;
    email: string;
    message: string;
  }


const ContactUs : React.FC = () => {

    const [userData, setUserData ] : any = useState<EmailFormData>();

    const sendEmail = async(e : any) => {
        e.preventDefault();
    }


    return (
        <div className="bg-white text-black pt-10 pb-4 h-[90vh]">
            <h1 className="text-center text-5xl font-ubuntu">Contact Us</h1>
            <div className="flex flex-col items-center justify-center w-full pt-20">
            <form className="flex flex-col gap-1 w-5/6 sm:w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4" onSubmit={sendEmail} >
               
                <div className="text-center mt-10">
                    <button type="submit" className="bg-white text-black rounded-3xl px-8 py-2" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default ContactUs;