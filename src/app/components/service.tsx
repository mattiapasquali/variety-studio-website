import React from "react";
import Image from "next/image";

import GrowthImage from "./../assets/growth-phone.png";

interface ServicePros
{
    id : string;
}

const Service : React.FC<ServicePros> = (props) => {
    return(
        <div id={props.id} className="bg-white font-nunito text-3xl w-full h-auto flex items-center mt-20 mb-20">
            <div className="mx-auto max-w-[900px] pr-10 pl-10 pb-20 ">
                <div className="pb-20 ">
                    <b>We will help your business to growth.</b>
                    <p>Our team know how to solve your problems with customized and innovative software solutions for every need.</p>
                 </div>
                <h3 >Our Services</h3>
                <p><b>▪️ From Idea to Reality:</b> Full App Design and Development  </p>
                <p><b>▪️ Performance Optimization:</b> Startup-time, Animation and overall smoothness optimization for existing apps </p>
                <p><b>▪️ Consulting:</b> Startup-time, Animation and overall smoothness optimization for existing apps</p>
            </div>
        </div>
    );
}

export default Service;