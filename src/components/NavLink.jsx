'use client'

import { NavLinks } from "@/data/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default NavLinkComponent