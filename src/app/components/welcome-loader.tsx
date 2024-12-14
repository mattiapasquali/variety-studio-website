"use client";

import React, {useState, useEffect} from "react";
import "../styles/welcome-loader.css";

interface WelcomeLoaderProps{
    text : string;
}

const WelcomeLoader : React.FC<WelcomeLoaderProps>= (props) => {
    const [expanded, setExpanded] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setExpanded(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div className={`mx-auto relative w-full flex items-center justify-center bg-black text-white py-3 px-5 rounded-[200px] expand-animation h-[40px]`}>
            <p className={`font-bold text-center  ${expanded ? "visible" : "hidden"}`}>
                {props.text}
            </p>
        </div>
    );
}
export default WelcomeLoader;