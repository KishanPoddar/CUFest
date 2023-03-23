import React, { useState } from "react";
import img from "../assets/Logo.png";
import { RxHamburgerMenu } from 'react-icons/rx';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "CU Fest", link: "#cufest" },
        { name: "Event", link: "#projects" },
        { name: "Contact Us", link: "#contact" }
    ];
    return (
        <>
            <div className="fixed w-full left-0 top-0 z-[999] h-32 flex md:justify-center items-center justify-between">
                <div className="flex lg:basis-1/3 basis-1/4 justify-center">
                    <img src={img} alt="" className="xl:w-32 w-24" />
                </div>

                <div className="lg:basis-2/3 basis-3/4 text-white md:block hidden">
                    <div className="flex">
                        <ul className="flex justify-start items-center xl:text-xl lg:text-lg text-base ">
                            {menuLinks?.map((menu, i) => (
                                <li onClick={() => setOpen(false)} key={i} className="lg:px-6 px-3 hover:text-purple-400 font-serif">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))}
                            <div className="text-white">
                                <div className="button">Register</div>
                            </div>
                        </ul>
                    </div>
                </div>


                <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? "text-purple-400" : "text-white"} text-3xl md:hidden m-5`}>
                    <RxHamburgerMenu />
                </div>

                <div className={`md:hidden text-white absolute w:1/4 h-screen px-7 py-2 font-medium top-0 bg-blue-500 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col items-center justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-purple-400 font-serif">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                        <div className="text-white">
                            <div className="button">Register</div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
