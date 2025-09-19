import React from 'react'
import Button from '../button'
import { MdOutlineArrowOutward } from 'react-icons/md';
import PorjectImg from '../../public/assets/khitzayMock.png';
import Image, { StaticImageData } from 'next/image';
import { CiLink } from "react-icons/ci";
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  titleLink: string;
  description: string;
  image: StaticImageData; // Assuming KhitZayImg is a string representing the image source
  links: {
    name: string;
    link: string;
  }[]; // Allow links to be an array of objects or null
   languages: (string | undefined)[];
};


function ProjectCard({data}:{data:any}) {
  return (
    <Link href={data.titleLink} target='_blank' className='flex flex-col sm:flex-row  items-start group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between gap-[20px] transition-opacity duration-200 group-hover/projects:opacity-50 hover:!opacity-100'>
        <div className='hidden  md:w-[25%] lg:w-[30%] sm:block'>
           <Image src={data.image} width={250} layout='responsive' className='rounded  border-[2px] border-gray-700'  alt='project'/>
        </div>
        <div className='sm:w-[440px] md:w-[75%] lg:w-[70%]  scale-[1] space-y-3'>
              <Link target='_blank' href={data.titleLink} className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>{data.title}<MdOutlineArrowOutward /></Link>
              <p className='text text-sm'>{data.description}</p>
         <div className='flex gap-4'>
            {
             data.links && data.links.map((e:any) => (
            <Link target='_blank' href={e.link} key={e.link} className='flex hover:text-teal-300 gap-1 head text-sm items-center'>
                <CiLink/>{e.name}
            </Link>
                ))
            }
        </div>
        
        <div className=' gap-2 flex flex-wrap items-center justify-start  '>
            {
                data.languages.map((e:any) => (
                    <Button key={e} title={e} />  
                ))
            }
        </div>
        </div>
        <div className='sm:hidden'>
           <Image src={data.image} width={220} className='rounded  border-[2px] border-gray-700'  alt='project'/>
        </div>
        
    </Link>
  )
}

export default ProjectCard