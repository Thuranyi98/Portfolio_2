'use client'
import { allProject } from '@/libs/data/mockData'
import React, { useEffect, useState } from 'react'
import Button from '../button'
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ProjectListProps{

}



export const ProjectList = () => {

    const [projects, setProjects] = useState(allProject);
    
    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

if(!isClient)return <div>loading.</div>
  return (
<table  className='w-full text-sm text-slate-200 mt-[60px]'>
  <tr className='text-start leading-snug  font-light h-[50px] '>
    <th className='text-start'>Year</th>
    <th className='text-start'>Project</th>
    <th className='text-start hidden lg:table-cell' >Made at</th>
    <th className='text-start hidden lg:table-cell'>Built with</th>
    <th className='text-start hidden sm:table-cell'>Link</th>
  </tr>
   {
    projects.map((e)=>(
        <tr key={e.id} className=' border-t-[1px] border-b-[1px] border-slate-300/10 h-[70px]'>
             <td className='text'>{e.year}</td>
             <td className=' leading-snug font-semibold '><div className='flex items-center gap-2'>{e.name}<MdOutlineArrowOutward className=' lg:hidden  group-hover:ml-1'/></div></td>
             <td className='text hidden lg:table-cell'>{e.madeAt}</td>
            <td className='hidden lg:table-cell space-x-2'>{
                e.languages.map((e, index) => <Button key={index} title={e} />)
            }</td>
        <td className='hidden text sm:table-cell group'><div className='flex items-center group-hover:text-teal-300 duration-300 cursor-pointer'><a href={e.link} target='_blank'>{e.link}</a><MdOutlineArrowOutward className=' group-hover:translate-y-[-3px] duration-300  group-hover:translate-x-2'/></div></td>
       </tr>
    ))
   }
</table>
  )
}
