import React from "react";
import video from "../assets/CUFest2023.mp4";  //take any video

const Home = () => {
    return (
        <>
            <section id="home" className="flex justify-center items-center">
                <video autoPlay loop muted playsInline className="fixed right-0 -top-10 -z-10">
                    <source src={video} type="video/mp4"/>
                </video>
                {/* <div className="text-center w-[60vw] mx-auto flex flex-col justify-between items-center">
                  <div className="text-8xl text-amber-400 mt-48">The Biggest Carnival of the year</div>
                  <div>
                    <div className="text-5xl text-orange-500">CU FEST 2023</div>
                    <div className="text-5xl text-orange-500">27th and 28th April</div>
                  </div>
                </div> */}
            </section>
        </>
    );
};

export default Home;
