import React from "react";

const HomePage : React.FC = () => {
    return(
        <div className="flex grid items-center justify-center w-full h-screen overflow-hidden">
            <h1 className="text-center text-6xl font-nunito font-bold lg:mt-[100px] lg:mb-[70px]">Business <br className="block lg:hidden"></br> Growth</h1>
            <video
                className="max-w-full max-h-full object-cover mx-auto mt-20 " autoPlay muted playsInline>
                <source src="/assets/intro.mp4" type="video/mp4" />
              Il tuo browser non supporta il video.
            </video>
        </div>
    );
}

export default HomePage;