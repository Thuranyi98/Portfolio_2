import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import ProjectCard from './cards/ProjectCard';
import { projectsData, experiencesData, certificatesData, clientsData } from '@/libs/data/mockData';
import { FiArrowRight } from "react-icons/fi";
import FigmaCard from './cards/FigmaCard';
import Link from 'next/link';
import ExperienceCard from './cards/ExperienceCard';
import CertificateCard from './cards/CertificateCard';
import ClientsMarquee from './ClientsMarquee';

function ShowCase() {



  return (
    <div className='lg:w-[calc(60%-10px)]  w-full  lg:ml-[calc(45%-10px)]'>
      <section id='About' className='space-y-4   lg:m-0 lg:px-5'>

        <div className='pt-[90px] '>
          <h3 className='head text-sm  font-bold tracking-widest lg:hidden  mb-[40px]'>ABOUT</h3>
          <p className='text text-[15px] leading-7'>Back in 2020, I began my coding journey through self-learning on YouTube, where I developed a variety of projects. Fast forward to today, I’ve had the privilege of contributing to diverse initiatives, including software development for <span className='head'>Bonchon Myanmar</span>, <span className='head'>Edusn Private School</span>, <span className='head'>Japanese projects</span>, and <span className='head'>IoT solutions</span>  . Along the way, I’ve worked across multiple domains—Frontend development
            ,Server-side APIs, DevOps, and  Database Modeling.</p>
        </div>
        <p className='text text-[15px] leading-6'>Currently, my primary focus is advancing in <span className='head'>Software Engineering</span> , with dedicated study in Data Structures, Algorithms, Design Patterns, and Project Management. I find immense satisfaction in exploring what happens under the hood. My true passion lies at the intersection of design and engineering, where I enjoy crafting software that is not only visually appealing but also built on a solid foundation.

        </p>
        <p className='text text-[15px] leading-6'>Outside of work, I engage in <Link href={'https://cultural-workshops-163557.framer.app'} target='_blank' className='bloggg group inline-block align-middle duration-500'>
          <span className='relative inline-block'>
            <span className='bg-gradient-to-r cursor-pointer from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent font-semibold'>Blogging</span>
            <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:-translate-y-[140%] group-hover:opacity-100 select-none'>🌈✨</span>
          </span>
        </Link> and <span className='cafe-coding group inline-block align-middle duration-500'>
            <span className='relative inline-block'>
              <span className='bg-gradient-to-r cursor-pointer from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-semibold'>cafes coding</span>
              <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:-translate-y-[140%] group-hover:opacity-100 select-none'>☕️💻🚀</span>
            </span>
          </span>. Through my writing, I aim to provide practical insights for developers—covering everything from building web applications to preparing for technical interviews.
        </p>
      </section>
      <section id='Clients' className='pt-[80px]'>
        <h3 className='head text-sm font-bold tracking-wider lg:hidden mb-[30px]'>Clients</h3>
        <ClientsMarquee clients={clientsData} />
      </section>
      
      <section id="Experience" className='pt-[100px]'>
        <h3 className='head text-sm font-bold  tracking-wider lg:hidden  mb-[40px]'>EXPERIENCE</h3>
        <div className='space-y-6 group/exp'>
          {experiencesData.map((exp) => (
            <ExperienceCard key={exp.id} data={exp} />
          ))}
        </div>
        <div className='my-[50px] '>
          <Link href={'https://read.cv/thuranyi'} target='_blank' className='text-white group flex gap-2 duration-500 items-center cursor-pointer hover:text-teal-300'>View Full Résumé <MdOutlineArrowOutward className=' group-hover:mb-1 group-hover:ml-1' /></Link>
        </div>
      </section>
      <section id='Projects' className='pt-[100px]'>
        <h3 className='head text-sm font-bold  mb-[40px] tracking-wider lg:hidden uppercase'>Projects</h3>
        <div className=' space-y-20 group/projects'>
          {
            projectsData.map((e) => (
              <ProjectCard key={e.id} data={e} />
            ))
          }
        </div>
        <div className='my-[50px] '>
          <Link href={'/projects'} className='text-white group flex gap-2 duration-500 items-center cursor-pointer  '><span className="hover:border-b-[0.5px] border-teal-300">View Full Project Archive </span><FiArrowRight className='  group-hover:ml-1' /></Link>
        </div>
      </section>
    
      <section id='Certificates' className='pt-[30px] pb-[20px]'>
        <h3 className='head text-sm font-bold tracking-wider lg:hidden mb-[24px]'>Certificates</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6'>
          {certificatesData.map((c, idx) => (
            <div
              key={c.id}
              className='fade-up'
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <CertificateCard data={c} />
            </div>
          ))}
        </div> 
      </section>
      <p className='text-sm text sm:w-[420px] my-[60px]'>Coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
    </div>
  )
}

export default ShowCase