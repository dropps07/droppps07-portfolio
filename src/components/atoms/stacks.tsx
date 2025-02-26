"use client"

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee"; //lib for rolling board of icons

import { TbBrandNextjs } from "react-icons/tb";
import { RiFirebaseLine } from "react-icons/ri";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

import cursor from "../../../public/cursors/focus.png";

import { StacksData } from "@/constants/stacksData";

const iconClassname = "sm:text-[48px] text-[24px] sm:mx-[16px] mx-[8px]";

const Stacks = () => {
    const [gradientWidth, setGradientWidth] = useState(0);  //setting up intitial speed
    const [speed, setSpeed] = useState(0);

    useEffect(()=>{
        setGradientWidth(window.innerWidth > 640 ? 100 : 50)  //ternary operator to set speed
        setSpeed(window.innerWidth > 640 ? 200 : 100)
    },[])

    return (
        <div className="max-w-[1250px] w-full transition-all duration-300 shadow-lg hover:shadow-2xl rounded-[24px] bg-white
        overflow-hidden flex justify-center items-center p-[24px]">
            <Marquee
            gradient={true}
            gradientWidth={gradientWidth}
            speed={speed}
            pauseOnHover 
            autoFill
            style = {{cursor: `url(${cursor.src}), auto`}}
            >
                {StacksData.map((stack, index )=>(             //mapping all stacks stored in constant
                    <div className={iconClassname} key={index}>
                        {stack.icon}
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
export default Stacks;