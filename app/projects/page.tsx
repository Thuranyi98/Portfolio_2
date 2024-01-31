import { ProjectList } from '@/components/lists/projectList';
import Link from 'next/link';
import React from 'react'
import { GoArrowLeft } from "react-icons/go";
function Page() {
  return (
    <div>
      <div>
        <Link href={'/'} className=' text-teal-300 group   flex items-center lg:text-md gap-1  font-semibold mb-2'><GoArrowLeft className=' duration-500 group-hover:translate-x-[-10px]' />Thura Nyi</Link>
        <h3 className='text-4xl font-bold lg:text-5xl text-slate-200'>All Projects</h3>
        <ProjectList/>
      </div>
    </div>
  )
}

export default Page