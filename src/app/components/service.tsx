import React from "react";
import Image from "next/image";

import GrowthImage from "./../assets/growth-phone.png";
import DeviceImage from "./../../../public/assets/device.png";

interface ServicePros
{
    id : string;
}

const Service : React.FC<ServicePros> = (props) => {
    return(
        <div id={props.id} className="bg-white grid font-nunito text-3xl w-full h-auto flex items-center mt-20 mb-20">
            <div className="mx-auto max-w-[900px] pr-10 pl-10 pb-20 ">
                <div className="pb-20 ">
                    <b>We will help your business to growth.</b>
                    <p>Our team know how to solve your problems with customized and innovative software solutions for every need.</p>
                 </div>
                <h3 >Our Services</h3>
                <p><b>▪️ From Idea to Reality:</b> Full App Design and Development  </p>
                <p><b>▪️ Performance Optimization:</b> Custom software boosts your business by enhancing efficiency and speeding up services. </p>
                <p><b>▪️ Consulting:</b> We provide consulting services focused on the creation and optimization of networks to enhance connectivity and collaboration within your organization.</p>
            </div>
            <Image className="mx-auto mt-10" src={DeviceImage} width={1200} height={1200} alt="Device Image"/>

        </div>
    );
}

export default Service;