import Image from 'next/image'
import React from 'react'
import Fimga from '@/public/assets/figma.png';
import {MdOutlineArrowOutward} from 'react-icons/md'
import Link from 'next/link';

function FigmaCard() {
  return (
     <Link href={'https://www.figma.com/file/p3EUx9Lk9EoI9nrWP8hXxB/Untitled?type=design&node-id=0%3A1&mode=design&t=j062iZ2sIhqKK5RX-1'} target='_blank' className='flex items-start group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl  gap-[30px]'>
        <div className='md:w-[25%] w-[30%] lg:w-[30%]'>
           <Image src={Fimga} width={140} layout='responsive'  className='rounded border-[3px] border-gray-700 hover:border-gray-800'  alt='project'/>
        </div>
        <div className='sm:w-[420px] md:w-[75%] lg:w-[70%] md:space-y-4'>
              <h3 className='text text-sm font-bold'>2024</h3>
              <h3 className='head font-bold text-sm flex items-center   group-hover:text-teal-300 cursor-pointer text-[15px] md:text-[16px] md:font-normal gap-2'> Weather App UI Design in Figma</h3>
         <div className='flex gap-4'>
        </div>
        </div>
        
    </Link>
  )
}

export default FigmaCard