import React from "react";

const HomePage : React.FC = () => {
    return(
        <div className="flex items-center justify-center w-full h-screen relative grid ">
            <h1 className="text-center text-6xl font-nunito font-bold lg:mt-[100px] lg:mb-[70px]">Business <br className="block lg:hidden"></br> Growth</h1>
            <div className="relative flex mx-auto lg:max-h-[800px] lg:w-[940px]">
                <span className="hidden lg:block absolute  bottom-0 z-20 left-0 bg-black bg-black w-[170px] h-[254px] rounded-tl-[200px]"></span>
                <span className="hidden lg:block absolute  bottom-0 z-20 right-0 bg-black bg-black w-[170px] h-[254px] rounded-tr-[12000px]"></span>
                    <video className="z-10 mx-auto w-auto h-auto lg:max-w-[600px] max-h-full object-cover" autoPlay muted >
                        <source src="/assets/intro.mp4" type="video/mp4" />
                        Il tuo browser non supporta il tag video.
                    </video>
            </div>
    </div>
    );
}

export default HomePage;