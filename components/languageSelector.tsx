// "use client";
// // import React, { useState } from 'react';
// import React,{ useContext, createContext, useState} from "react";
// import RootLayout from '@/app/layout';
// // import { useAppContext } from "@/context";


// // const LangContext : Context<String> = createContext(defaultValue:"fr");

// const LanguageSelector: React.FC = () => {
// //   const [language, setLang] = useState<String>('fr');

// const { language, setLanguage } : any = useAppContext();

//   const toggleLanguage = () => {
//     setLanguage(language === 'fr' ? 'en' : 'fr');
//   };

//   // console.log(language);

//   return (
//     <div
//         // value={lang} 
//         className="w-full flex justify-end">
//         <button 
//             className="w-14 h-6 mr-12 mt-4 -mb-4 cursor-pointer relative bg-gray-50 border rounded-full " 
//             onClick={toggleLanguage}>
//         <div className={`transition-left ease-in-out duration-150 h-6 w-6 top-0 bg-slate-950 absolute rounded-full border ${language === 'fr' ? 'left-0' : 'right-0'}`}>
//             {language === 'fr' ? 'EN' : 'FR'}
//         </div>
//         </button>
//     </div >
//   );
// };

// export default LanguageSelector;