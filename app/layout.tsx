import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Nathalie",
  description: "Know more about me & who I am",
};

export default function RootLayout({ children}: Readonly<{children: React.ReactNode}>) {
  return (
   
        // <html lang="en">
        //   <body className={inter.className}>//    
        //       {children}//    
        //   </body>
        // </html>

        <html suppressHydrationWarning >
          <head />
          <body className={inter.className}>
            <ThemeProvider>{children}</ThemeProvider>
          </body>
        </html>
 
  );
}
