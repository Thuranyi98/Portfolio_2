import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BiLogoBlogger } from "react-icons/bi";
import Link from 'next/link';
function SocialLists() {
    const iconsize = "w-6 h-6 hover:text-white cursor-pointer"
  return (
    <div className='flex lg:absolute bottom-0 text  items-center gap-5'>
         <Link href={'https://github.com/Thuranyi98'}> <FaGithub className={iconsize} /></Link>
         <Link href={'https://www.linkedin.com/in/thura-nyi-453858241/'}>  <IoLogoLinkedin className={iconsize} /></Link>
         <Link href={'https://cultural-workshops-163557.framer.app'}> <BiLogoBlogger className={iconsize}/></Link>
    </div>
  )
}

export default SocialLists