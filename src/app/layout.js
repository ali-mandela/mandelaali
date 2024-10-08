import {Outfit} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {TfiEmail} from "react-icons/tfi";
import NavLinkComponent, { MobileMenu } from "@/components/NavLink";
import { RiMenu4Line } from "react-icons/ri";

import {Socials} from "@/data/nav";

const inter = Outfit({subsets: ["latin"]});

export const metadata = {
    title: "mandelaali",
    description: "I'm a passionate developer with experience in frontend development, seeking opportunities as a Full Stack Developer.

"
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <main className='min-w-screen'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div
                            className='col-span-2 h-screen overflow-hidden hidden md:flex flex-col justify-between border-r-[1px] border-[#9A9A9A] p-6'>
                            <SideBar/>
                        </div>
                        <div className='col-span-12 md:col-span-10 md:p-6 p-2 '>
                            {/* mOBILE */}
                           <MobileMenu/>
                            {/* Follow Me */}
                            <div className="">

                                <div className="md:text-right text-center my-4 md:my-0 ">
                                    {Socials.map((item) =>< a target = "_blank" rel = "noopener noreferrer" className = "font-light underline text-base italic mr-2 text-[#9A9A9A]" key = {
                                        item.id
                                    }
                                    href = {
                                        item.path
                                    }> {
                                        item.name
                                    } </a>)}
                                </div>

                            </div>
                            {children}
                        </div>
                    </div>
                    
                </main>
            </body>
        </html>
    );
}

export const SideBar = () => {
    return ( <> {/* MAILBOX */
    } <div className = "items-center flex hover:opacity-70 flex-col" > <div className="border-2 p-4 rounded-full border-[#9A9A9A]">
        <a href="mailto:muhammadali.nitrkl@gmail.com"><TfiEmail fontSize={28} color="#9A9A9A"/></a>
    </div> <h1 className = "font-medium text-lg my-2 text-[#9A9A9A]" > Get in touch </h1>
              </div> {/* Navigation */
    } <NavLinkComponent /> </>)
}
