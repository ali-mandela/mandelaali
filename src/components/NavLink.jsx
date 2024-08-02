'use client'

import { NavLinks } from "@/data/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";import { RxCross1 } from "react-icons/rx";
import { useState } from "react";


const NavLinkComponent = () => {
    const pathname = usePathname(); 
    
  return (
    <ul className="text-center">
                  {NavLinks.map((link) => (
                    <li
                      className={`my-6 text-xl italic capitalize ${
                        pathname === link.path ? "text-slate-300" : "text-[#9A9A9A]"
                      }`}
                      key={link.id}
                    >
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
  )
}
export const MobileMenu=()=>{
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname(); 
  return(
    <div className="md:hidden relative flex justify-between">
    <div className=" hover:opacity-70">
        <div onClick={()=>setisOpen(!isOpen)} className=" p-4 ">
            {!isOpen? <RiMenu4Line fontSize={28} color="#9A9A9A"/>:<RxCross1 fontSize={28} color="#9A9A9A"/>  }
            <div className="absloute top-2 left-0">
            { isOpen &&  NavLinks.map((link) => (
                    <li
                      className={`my-6  text-xl italic capitalize ${
                        pathname === link.path ? "text-slate-300" : "text-[#9A9A9A]"
                      }`}
                      key={link.id}
                    >
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
            </div>


        </div>
    </div>
    <div className=" hover:opacity-70">
        <div className=" p-4">
            <a href="mailto:muhammadali.nitrkl@gmail.com"><TfiEmail fontSize={28} color="#9A9A9A"/></a>
        </div>
    </div>

</div>
  )
}
export default NavLinkComponent