"use client";
import Image from "next/image";
import  Baniere  from "@/components/layout/baniere";
import { AboutMe, Realisations, Skills, Loisirs, Contact } from "@/components/pages";
import { Player } from '@lottiefiles/react-lottie-player';
import { useTheme } from "next-themes";
import {ToggleTheme , Menu} from "@/components/common";



export default function Home() {

  return (

  
    <main className="flex w-full min-h-screen flex-col items-center justify-between ">
  
  
      <Baniere />
      <ToggleTheme />
      {/* <Menu/> */}

      <Skills />

      <AboutMe />

      <div className="flex">
            <Player
                autoplay
                loop
                // speed={0.8}
                // hover={true}
                src={require("@/assets/AnimationBubble1.json")}
                style={{ height: '250px', width: '250px' }}
              >
              </Player>

              <Player
                autoplay
                loop
                // speed={0.8}
                // hover={true}
                src={require("@/assets/AnimationBubble2.json")}
                style={{ height: '250px', width: '250px' }}
              >
              </Player>

              <Player
                autoplay
                loop
                // speed={0.8}
                // hover={true}
                src={require("@/assets/AnimationBubbleMvm.json")}
                style={{ height: '250px', width: '250px' }}
              >
              </Player>
              </div>

            <Realisations />
            <Skills />
            <Loisirs />
            <Contact />

    </main>


  );
}
