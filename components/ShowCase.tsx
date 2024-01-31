import React from 'react'
import WorkCard from './cards/WorkCard'
import { MdOutlineArrowOutward } from "react-icons/md";
import ProjectCard from './cards/ProjectCard';
import { projectsData } from '@/libs/data/mockData';
import { FiArrowRight } from "react-icons/fi";
import FigmaCard from './cards/FigmaCard';
import Link from 'next/link';

function ShowCase() {

  

  return (
    <div className='lg:w-[calc(50%-10px)]   w-full  lg:ml-[calc(50%-10px)]'>
      <section id='About' className='space-y-4   lg:m-0 lg:px-5'>
        
        <div className='pt-[100px] '>
          <h3 className='head text-sm font-bold tracking-wider lg:hidden  mb-[40px]'>ABOUT</h3>
          <p className='text text-[15px] leading-6'>Back in 2020, I embarked on a journey to explore custom animations, delving deep into the realms of coding and web development. Fast-forward to today, I&apos; ve had the privilege of contributing to various projects, including developing software for <span className=''> (10) stations of KyawSan Fuel Trading, a startup.</span> This journey also involved creating a <span className='head'>server API</span>, <span className='head'>Database Modeling</span>, and a <span className='head'>dashboard</span> for the Petroleum Products Regulatory Department <span className='head'>(PPRD)</span>.</p>
        </div>
        <p className='text text-[15px] leading-6'>Currently, my primary focus is delving deep into frontend development, with a dedicated study of <span className='head'>architecture</span> and <span className='head'>design patterns</span>. I find immense satisfaction in exploring what happens &apos;under the hood.&apos; My true passion lies in the intersection of design and engineering, where I enjoy crafting software that not only looks appealing but is also robustly built.

</p>
        <p className='text text-[15px] leading-6'>Outside of work, I engage in <Link href={'https://cultural-workshops-163557.framer.app'} target='_blank' className='text-teal-300 bloggg   duration-500 hover:font-bold'>blogging</Link> about React and various architectures. My goal is to provide comprehensive insights for junior developers, covering everything they need to know to build a web app and succeed in interviews.
</p>
       </section>
      <section id="Experience" className='pt-[100px]'>
         <h3 className='head text-sm font-bold  tracking-wider lg:hidden  mb-[40px]'>EXPERIENCE</h3>
        <WorkCard />
        <div className='my-[50px] '>
          <Link href={'https://read.cv/thuranyi'} target='_blank' className='text-white group flex gap-2 duration-500 items-center cursor-pointer hover:text-teal-300'>View Full Résumé <MdOutlineArrowOutward className=' group-hover:mb-1 group-hover:ml-1'/></Link>
        </div>
      </section>
      <section id='Projects' className='pt-[100px]'>
           <h3 className='head text-sm font-bold  mb-[40px] tracking-wider lg:hidden uppercase'>Projects</h3>
       <div className=' space-y-20'>
         {
          projectsData.map((e) => (
            <ProjectCard key={e.id} data={e} />
          ))
        }
       </div>
        <div className='my-[50px] '>
          <Link href={'/projects'} className='text-white group flex gap-2 duration-500 items-center cursor-pointer  '><span className="hover:border-b-[0.5px] border-teal-300">View Full Project Archive </span><FiArrowRight className='  group-hover:ml-1'/></Link>
        </div>
      </section>
      <div className=' my-[100px] space-y-6'>
         <h3 className='head text-sm font-bold tracking-wider lg:hidden  mb-[40px]'>Disign & Blog</h3>
        <FigmaCard/>
      </div>
      <p className='text-sm text sm:w-[420px]'>Coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
    </div>
  )
}

export default ShowCase