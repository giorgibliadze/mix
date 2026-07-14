"use client";

import {motion} from "framer-motion";
import type {ReactNode} from "react";

export function HealthcareReveal({children,className="",id}:{children:ReactNode;className?:string;id?:string}){
 return <motion.section id={id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.52,ease:[.22,1,.36,1]}} className={className}>{children}</motion.section>;
}
