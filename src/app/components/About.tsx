"use client";

import React, { useState, useRef, useEffect } from "react";


const About : React.FC = () => {
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
          console.log(highlightedSpan);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-black text-white w-full py-5">
            <div className="mx-auto container max-w-[900px] px-4 flex items-center justify-center grid ">
                <b className="font-ubuntu text-2xl mb-10 text-center ">WITH VARIETY STUDIOS, YOU'LL SEE YOUR VISION COME TO LIFE.</b>
                <b className="font-ubuntu text-2xl mb-10 text-center ">THERE ARE SOFTWARE SOLUTIONS, AND THERE'S VARIETY STUDIOS.</b>
                <span ref={el => spansRef.current[0] = el} className={`text-xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear  ${highlightedSpan === 1 ? "text-white" : ""}`}>
                    <p className="mb-6">
                        Remember the excitement of building your first project? The thrill of seeing your ideas take shape?
                    </p>
                    <p>
                    Now, navigating the world of software development can feel overwhelming. Miscommunication, shifting requirements, and endless iterations. Does it really have to be this complicated?
                    </p>
                </span>
                <span  ref={el => spansRef.current[1] = el} className={`text-xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear ${highlightedSpan === 2 ? "text-white" : ""}`}>
                    <p className="mb-6"> We felt the same way.</p>
                    <p>As tech enthusiasts and problem solvers, we recognized that there’s a better way to bring your ideas to life. Tired of the traditional approach, we founded Variety Studios.</p>
                </span>
                <span  ref={el => spansRef.current[2] = el} className={`text-xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear ${highlightedSpan === 3 ? "text-white" : ""}`}>
                    <p className="mb-6"> And we didn’t stop there.</p>
                    <p>We specialize in custom web development and tailored software solutions that fit your unique needs. Our team dives deep into understanding your goals, ensuring that every line of code aligns with your vision. We leverage the latest technologies to create seamless, user-friendly experiences that engage and inspire</p>
                </span>
                <span  ref={el => spansRef.current[3] = el} className={`text-xl font-ubuntu mb-10 px-10 font-bold text-gray-500 transition-all duration-300 ease-linear ${highlightedSpan === 4 ? "text-white" : ""}`}>
                    <p className="mb-6">With Variety Studios, you’re not just getting a service; you’re gaining a partner dedicated to your success. We empower businesses to thrive in the digital landscape, transforming challenges into opportunities.</p>
                    <p>Join the countless clients who have turned their ideas into reality with CodeCraft. Experience the difference of working with a team that truly cares about your success.</p>
                </span>
                <b className="font-ubuntu text-2xl mb-10 text-center ">LET’S BUILD SOMETHING AMAZIONG TOGHETER.</b>
            </div>
        </div>
    )
}

export default About;