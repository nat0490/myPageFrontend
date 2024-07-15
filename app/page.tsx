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

      {/* <Menu/> */}

      {/* <div className="w-full flex justify-center pl-24 lg:pl-48">
        <Player
            autoplay
            loop
            // speed={0.8}
            // hover={true}
            src={require("@/assets/AnimationBubble1.json")}
            style={{ height: '250px', width: '250px' }}
          > </Player>          
      </div> */}

      {/* <div className="w-full flex justify-center pl-24 lg:pl-48">
          <Player
              autoplay
              loop
              src={require("@/assets/AnimationBubbleMvm.json")}
              style={{ height: '250px', width: '250px' }}                  
            ></Player>
        </div> */}

      <AboutMe />



        <div className="w-full flex justify-start pl-24 lg:pl-48">
          <Player
              autoplay
              loop
              src={require("@/assets/AnimationBubbleMvm.json")}
              style={{ height: '250px', width: '250px' }}                  
            ></Player>
        </div>

      <Realisations />

      <div className="w-full flex justify-end pr-24 lg:pr-48 -mb-6">
        <Player
            autoplay
            loop
            src={require("@/assets/AnimationBubbleMvm.json")}
            style={{ height: '250px', width: '250px' }}                  
          ></Player>
      </div>
      

      <Skills />

      <div className="w-full flex justify-center pr-48 lg:pr-96">
          <Player
              autoplay
              loop
              src={require("@/assets/AnimationBubbleMvm.json")}
              style={{ height: '250px', width: '250px' }}                  
            ></Player>
      </div>

      {/* <Loisirs /> */}

      <Contact />

    </main>


  );
}
