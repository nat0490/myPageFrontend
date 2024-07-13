// "use client";
import React, { useEffect, useState} from "react";
import myRealisations from "@/data/realisations";
import Image from "next/image";
import { PulseLoader } from 'react-spinners';
import { Link, MousePointerClick,Cog } from 'lucide-react';
import { useTheme } from "next-themes";

const Realisations: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const allImages = (imgs: string[]) => {
        const allImgs = [];
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i];
            allImgs.push(
                <Image
                    key={`${i}`}
                    src={img}
                    alt={img}
                    width={100}
                    height={100}
                    // className="size-28 hover:size-40 mb-4"
                />
            )
        }
        return allImgs;
    };

    const videos = (video: string[]) => {
        const allVideos = [];
        for (let i = 0; i < video.length; i++) {
            const v = video[i];
            allVideos.push(                  
                    <a  key={`${i}`}
                        href={v}
                        className="text-small-caps font-bold text-center text-pink-400 hover:text-pink-600 hover:cursor-pointer flex"
                        target="_blank" 
                        rel="noopener noreferrer"
                    > DEMO VIDEO {i +1}
                        <MousePointerClick color={`${theme === 'dark' ? "#fff" : "#000" }`} className="mt-1.5 ml-1"/> 
                    </a>                              
            )
        }
        return allVideos;
    };

    const [truncatedTexts, setTruncatedTexts] = useState<boolean[]>([]);
    useEffect(() => {
        const initialTruncatedTexts = myRealisations.map(realisation => true);
        console.log(initialTruncatedTexts);
        setTruncatedTexts(initialTruncatedTexts);
    }, []);
     const toggleDescription = (index: number) => {
        setTruncatedTexts(prevTexts => {
            return prevTexts.map((isTruncated, i) => {
                if (i === index) {
                    return !isTruncated;
                }
                return isTruncated;
            });
        });
    };
    // const description = (desc: string) => {        
    //     const toggleDescription = () => {
    //         console.log("click");
    //         setIsTruncated(!isTruncated);
    //     }
    //     const fullText = (
    //         < div className="group hover:cursor-pointer text-center p-0.5" onClick={toggleDescription}>
    //             {desc}      
    //         </div>
    //     );
    //     if (desc.length < 100) {
    //         return fullText;
    //     };
    //     const text = isTruncated ? (
    //         <div className="group hover:cursor-pointer text-center p-0.5" onClick={toggleDescription}>
    //           {desc.substring(0, 100)}
    //           <span className="group-hover:font-bold group-hover:animate-ping ">...</span>
    //         </div>
    //       ) : (
    //         fullText
    //       );
    //     return text;
    // };

    const allTech = (tech: string[]) => {
        const allTechs = [];
        for (let i = 0; i < tech.length; i++) {
            const t = tech[i];
            allTechs.push(
                <span key={`${i}`} className="flex flex-nowrap mr-1">{t} </span>
            )
        }
        return allTechs;
    }
    const links = (link: string[]) => {
        const allLinks = [];
        for (let i = 0; i < link.length; i++) {
            const l = link[i];
            allLinks.push(                  
                <a  key={`${i}`}
                    href={l}
                    className="text-small-caps font-bold text-center text-pink-400 hover:text-pink-600 hover:cursor-pointer text-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                > {l} </a>                    
            )
        }
        return allLinks;
    };
    
    const realisations = () => {
        const allRealisations = [];           
        for (let i = 0; i < myRealisations.length; i++) {
            const realisation = myRealisations[i];
            const isTruncated = truncatedTexts[i];
            const fullText = realisation.description;
            const displayText = isTruncated ? fullText.substring(0, 150) : fullText;                  
            allRealisations.push(
                <div key={`${i}`} className="flex flex-col w-1/3  rounded-xl bg-pink-700/5  m-4 p-2">
                    <h2 className="text-small-caps text-center text-xl m-2 bg-pink-600/10 rounded-lg">{realisation.name}</h2>
                    <div id="images" className="flex h-1/2 overflow-x-auto">
                        {allImages(realisation.image)}
                    </div>                    
                    <div id="videos" className="flex justify-around my-2">
                        {videos(realisation.video)} 
                    </div> 
                    {/* {description(realisation.description) } */}
                    <div 
                        id="descriptionContainer"
                        onClick={() => toggleDescription(i)}
                        className={`group cursor-pointer text-center ${theme === 'dark' ? "hover:bg-white/5" : "hover:bg-black/5" } rounded-lg py-1.5 my-0.5`}
                    >
                        <p id="description" className="text-center ">
                            {displayText}{isTruncated && fullText.length > 150 && <span className="group-hover:font-bold group-hover:animate-ping ">... </span>   }
                            {/* <MousePointerClick color={`${theme === 'dark' ? "#fff" : "#000" }`} className="mt-1.5 ml-1 hidden group-hover:flex"/>  */}
                        </p>
                    </div>
                    <div id="tech" className={`flex flex-col items-center border p-0.5 rounded-lg ${theme === 'dark' ? " border-pink-100/10" : " border-pink-800/10" }`}>
                        <Cog className="m-1 flex"/>
                        <div className="flex flex-wrap text-small-caps justify-center">
                            {allTech(realisation.tech)}
                        </div>
                    </div>                    
                    <div id="links" className="flex flex-col items-center justify-around" >
                        <Link className="m-1"/>                         
                        <div className="flex flex-col items-center ">
                            { realisation.link[0] !== "" && 
                            <div className="flex flex-col items-center mb-1">
                                <p className="underline ">Lien de l&apos;app:</p>  
                                {links(realisation.link)}  
                            </div>                                           
                            }
                            <div className="flex flex-col items-center ">
                                <p className="underline">Liens GitHub:</p>  
                                {links(realisation.linkGitHub)}                               
                            </div>  
                        </div>
                    </div>
                </div>
            );
        }
        return allRealisations;
    };

    if (!mounted) return <PulseLoader color="#db2777"/>;

    return (
        <section className="w-full">
            <h1 className="text-pink-600 text-small-caps text-center text-5xl mb-6 "> Réalisations </h1>
            <div className="border-y  border-blue-900 h-1/2 mb-36">
                <div className="flex">
                    {realisations()}
                </div>            
            </div>
        </section>
    );
};

export default Realisations;