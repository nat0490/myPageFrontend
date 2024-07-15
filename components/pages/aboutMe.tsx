import React, { useEffect, useState } from "react";
import monParcours from "@/data/monParcours";
import { useTheme } from "next-themes";
import { PulseLoader, PacmanLoader } from "react-spinners";
import Image from "next/image";
import { Baby, BriefcaseBusiness, GraduationCap, Library, Eye, SkipBack, SkipForward } from "lucide-react";

const AboutMe: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);    
//MONTAGE COMPOSANT
useEffect(() => {
    setMounted(true);
}, []);



    const parcours = () => {
        return monParcours.map((p, i) => (
            <div key={p.id} className="w-1/4 mb-4 shrink-0 s pt-2">
         
                {p.id === 1 &&
                    <div className={`h-0.5 mb-2 w-1/2 flex justify-end ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                        <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600'}`}></div> 
                    </div>}               
                {p.id === monParcours.length  && 
                    <div className="flex">
                        <div className="w-1/2"> </div>
                        <div className={` h-0.5 mb-2 w-1/2 flex justify-start ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                            <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-pink-600'}`}></div>    
                        </div>
                    </div>}
                {p.id !== 1 && p.id !== monParcours.length && 
                    <div className={`h-0.5 mb-2 flex justify-center ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                        <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-pink-600'}`}></div> 
                    </div> }

                <div  className="border border-blue-600  text-center h-full p-1 mr-2">
                    {/* flex flex-col items-center p-1 w-80 h-full */}
                    <div className="w-full whitespace-nowrap italic text-sm">
                        {p.date.debut === p.date.fin ? p.date.debut : `${p.date.debut} - ${p.date.fin}`}
                    </div>
                    <div className="flex justify-center m-1.5">
                        {p.type === "naissance" && <Baby />}
                        {p.type === "diplome" && <GraduationCap />}
                        {p.type === "etude" && <Library />}
                        {p.type === "travail" && <BriefcaseBusiness />}
                        {p.type === "look" && <Eye />}
                        
                    </div>
                    <h2 className="mb-2">{p.nom}</h2>
                    {/* <Image                    
                        src="@/assets/aboutMe/Geodis.svg"
                        alt="logo"
                        // layout="responsive"
                        // width={500} 
                        // height={500} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-150"
                        // priority={i === 0}
                    /> */}
                    <div className="text-small-caps mb-2">{p.lieu}</div>
                    <div className="mb-2 ">{p.description}</div>
                    <div className="">{p.skills}</div>
                </div>

            </div>
            
          ));
    };



    
    
    
    



    if (!mounted) return <PacmanLoader color="#db2777"/>;


    return (
        <section className="w-full  border-2 border-red-500">
            <h1 className="text-pink-600 text-small-caps text-right text-5xl mb-6 mr-8 "> A propos de moi </h1>
            
            <div className="flex justify-center">
                <SkipBack className="cursor-pointer"/>
                <SkipForward className="cursor-pointer"/>
            </div>
            

            <div className={`border-y border-white w-full flex flex-row-reverse overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-h-2 scrollbar-w-1/3 scrollbar  ${theme ==="light" ? "scrollbar-thumb-pink-200  scrollbar-track-pink-100/50  " : "scrollbar-thumb-pink-600/50  scrollbar-track-pink-950/50"} `}>
            {/* <div className="border-y border-white w-full overflow-x-auto flex space-x-2"> */}
          

                {parcours()}

            </div>
        </section>
    );
};

export default AboutMe;