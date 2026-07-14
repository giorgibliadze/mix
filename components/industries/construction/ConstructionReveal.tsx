"use client";
import {motion} from "framer-motion";
import type {ReactNode} from "react";

export function ConstructionReveal({children,className="",id}:{children:ReactNode;className?:string;id?:string}){
 return <motion.section id={id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55,ease:[.22,1,.36,1]}} className={className}>{children}</motion.section>
}
