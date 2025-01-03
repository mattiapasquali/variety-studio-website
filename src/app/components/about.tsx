"use client";

import React, { useState, useRef, useEffect } from "react";

interface AboutProps{
    id : string;
}

const About : React.FC<AboutProps> = (props) => {
    const [highlightedSpan, setHighlightedSpan] = useState(1);

    const spansRef : any= useRef([]);

    useEffect(() => {
        const handleScroll = () => {  
          const scrollPosition = window.scrollY;
          const containerHeight = window.innerHeight;
          const totalHeight = document.body.clientHeight;
    
          const opacity = (totalHeight - scrollPosition - containerHeight) / containerHeight;
    
          // calcolo l'indice dello span da illuminare in base allo scroll
          let spanIndex = 0;
          for (let i = 0; i < spansRef.current.length; i++) {
            const spanPosition = spansRef.current[i].offsetTop;
            if (scrollPosition >= spanPosition - containerHeight / 2) {
                spanIndex = i + 1;
            } else {
              break;
            }
          }
          setHighlightedSpan(spanIndex);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id={props.id} className="bg-black text-white w-full py-5">
            <div className="mx-auto container max-w-[900px] px-4 flex items-center justify-center grid pt-20 pb-20">
                <span ref={el => spansRef.current[0] = el} className={`text-3xl lg:text-5xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear  ${highlightedSpan >= 1 ? "text-white" : ""}`}>
                    <p className="mb-6">
                        We know how to solve your problems with customized and innovative software solutions for every need.
                    </p>
                </span>
                <span  ref={el => spansRef.current[1] = el} className={`text-3xl lg:text-5xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear ${highlightedSpan >= 2 ? "text-white" : ""}`}>
                    <p className="mb-6"> We provide the answers to your challenges.</p>
                    <p>From vision to reality, we craft tailored software that streamlines your business and drives results.</p>
                </span>
                <span  ref={el => spansRef.current[2] = el} className={`text-3xl lg:text-5xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear ${highlightedSpan >= 3 ? "text-white" : ""}`}>
                    <p className="mb-6"> Your vision fuels our expertise. </p>
                    <p>Together, we design software solutions that create real impact and lasting value.
                    </p>
                </span>
                <span  ref={el => spansRef.current[3] = el} className={`text-3xl lg:text-5xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear ${highlightedSpan >= 4 ? "text-white" : ""}`}>
                    <p className="mb-6">With Variety Studios, you’re not just a client; you’re a partner. We’re here to make your ideas reality and help your business thrive in a digital world</p>
                </span>
                <b ref={el => spansRef.current[4] = el} className="font-ubuntu text-3xl lg:text-5xl mb-10 text-center mb-5"></b>
            </div>
        </div>
    )
}

export default About;