"use client";
import React, { useEffect, useState }  from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';



const Baniere: React.FC = () => {

  const [ activeAnimationLine, setActiveAnimationLine ] = useState<Number | null>(null);
  const [ activeAnimationPlace, setActiveAnimationPlace ] = useState<Number | null>(null);

// ANIMATION ALEATOIRE DES CARRES
  useEffect(()=> {
    const applyRandomAnimation = () => {
      // const elements = document.querySelectorAll('.random-animation-element');
      const randomNumber1 = Math.floor(Math.random() * 3 ) +1;
      const randomNumber2 = Math.floor(Math.random() * 2 );
      setActiveAnimationLine(randomNumber1);
      setActiveAnimationPlace(randomNumber2);
      // console.log(randomNumber1,randomNumber2);
    };
    const interval = setInterval(applyRandomAnimation, 4000); 
    return () => clearInterval(interval); 
  },[]);

// DELAIS POUR EVITER LE RETOUR DES CARRES INTERIEUR UNE FOIS DISPARUS
  useEffect(() => {
    const resetActiveAnimations = () => {
      setActiveAnimationLine(null);
      setActiveAnimationPlace(null);
    };
    const timeout = setTimeout(resetActiveAnimations, 2300);
    return () => clearTimeout(timeout);
  }, [activeAnimationLine, activeAnimationPlace]);

// CARRE  
    const grosCarre = (nbr: number, line: number) => {
        const carres: JSX.Element[] = [];
        for (let i:number = 0; i < nbr ; i++) {
          carres.push(
            <div key={`${line}-${i}`} id={`${line}-carre-${i}`} className="random-animation-element group border-2 hover:border-4 border-pink-600 rotate-45 h-32 w-32 flex justify-center items-center animate-slideInFromLeft animate-trail">
              <div className={`border-2 border-pink-600 h-28 w-28 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear01' : 'opacity-0'}`}>
                <div className={`border-2 border-pink-500 h-24 w-24 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear02' : 'opacity-0'}`}>
                  <div className={`border-2 border-pink-500 h-20 w-20 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear03' : 'opacity-0'}`}>
                    <div className={`border-2 border-pink-400 h-16 w-16 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear04' : 'opacity-0'}`}>
                      <div className={`border-2 border-pink-300 h-12 w-12 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear05' : 'opacity-0'}`}>
                        <div className={`border-2 border-pink-200 h-8 w-8 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear06' : 'opacity-0'}`}>
                          <div className={`border-2 border-pink-100 h-4 w-4 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear07' : 'opacity-0'}`}>
                            <div className={`border-2 border-pink-50 h-2 w-2 relative animate-appear08::after ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear08' : 'opacity-0'}`}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return carres;
      };

// NOM PRENOM
    const animationName = (name: String, type: String, startDelay: number) => {
      const nom: JSX.Element[] = [];
      const nameToArray = name.split("");
      // console.log(nameToArray);
      let delay = startDelay;
      for (let i:number = 0; i<name.length; i++) {
        nom.push(
          <span key={`${type}-${i}`} className="inline-block group-hover:animate-bounce" style={{ animationDelay: `${delay}s` }}> {nameToArray[i]} </span>
        );
        delay += 0.05;
      };
      return nom;
    };



    return (
      <div className="w-full"> 
        <section className="flex justify-between items-center w-full xl:px-32 lg:px-24 md:px-12 px-4  pt-16 pb-32 ">
          <div className="">
            <div className="flex justify-center ">
                {grosCarre(2, 1)}
            </div>
            <div className="flex justify-center "> 
                {grosCarre(3, 2)}
            </div>
            <div className="flex justify-center ">
                {grosCarre(2, 3)}
            </div>
          </div>
          <div className="group flex flex-col justify-center  mr-20"> 
            <div className=" mr-6">
              <p className=" text-small-caps text-right  text-pink-600 text-7xl tracking-widest cursor-default ">
                {animationName("Nathalie", "prenom", 0)}
              </p>
              <p className="text-small-caps text-right  text-pink-600/50 text-5xl tracking-widest cursor-default group-hover:text-pink-600/75 ">
                {animationName("Sartor", "nom", 0.15)}
              </p>
            </div> 
            <div className="mr-52 -mt-20  felx justify-start">
              <Player
                autoplay
                loop
                // speed={0.8}
                // hover={true}
                src={require("@/assets/AnimationSmile.json")}
                style={{ height: '250px', width: '250px' }}
              >
              </Player>
            </div>
          </div>
        </section>

        {/* <section className="flex w-full ">
          <div className="w-6/12 border-b rotate-12 rounded-b-full h-80">bla</div>
          <div className="w-6/12 border-t rounded-t-full h-60">bla</div>
        </section> */}
      </div>
    );
};

export default Baniere;