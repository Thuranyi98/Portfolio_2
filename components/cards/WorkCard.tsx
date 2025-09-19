import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import Button from '../button';
import Link from 'next/link';

function WorkCard() {
  return (
    <>

      <Link href={'https://smilaxglobal.com'} target='_blank' className='flex flex-col sm:flex-row items-start  group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between  gap-[20px]'>
        <div className='md:w-[25%] lg:w-[30%]'>
          <p className='text font-[500]  text-[12px]'>SEP 2024 - Presence</p>
        </div>
        <div className='sm:w-[450px] md:w-[65%] lg:w-[70%] space-y-3'>
          <Link href={'https://smilaxglobal.com'} target='_blank' className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>Frontend . Next Innovations ltd<MdOutlineArrowOutward /></Link>
          <p className='text text-sm'>Crafting company website and frontend applications using microservices architecture. Proficient in handling HR web application modules, React.js, Next.js, Redux, TypeScript, React Query, and Docker to create robust and scalable solutions. Collaboration with UI/UX designers, backend developers, and project owner.</p>
          <div className='flex gap-4'>
            <Link href="http://staging.locaboo.jp/" target='_blank' className='flex   hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />Locaboo.jp
            </Link>
            <Link href="http://staging.locaboo.jp/" target='_blank' className='flex   hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />Talent Cloud
            </Link>
          </div>
          <div className=' space-x-2 space-y-2 '>
            <Button title='TypeScript' />
            <Button title='React' />
            <Button title='AWS' />
            <Button title='Open AI' />

          </div>
        </div>

      </Link>

      <Link href={'https://smilaxglobal.com'} target='_blank' className='flex flex-col sm:flex-row items-start  group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between  gap-[20px]'>
        <div className='md:w-[25%] lg:w-[30%]'>
          <p className='text font-[500]  text-[12px]'>JAN 2024 - SEP 2024</p>
        </div>
        <div className='sm:w-[450px] md:w-[65%] lg:w-[70%] space-y-3'>
          <Link href={'https://smilaxglobal.com'} target='_blank' className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>Frontend . Smilax Global Co. ltd<MdOutlineArrowOutward /></Link>
          <p className='text text-sm'>Crafting company website and frontend applications using microservices architecture. Proficient in handling HR web application modules, React.js, Next.js, Redux, TypeScript, React Query, and Docker to create robust and scalable solutions. Collaboration with UI/UX designers, backend developers, and project owner.</p>
          <div className='flex gap-4'>
            <Link href="https://smilaxglobal.com" target='_blank' className='flex   hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />Company Website
            </Link>
          </div>
          <div className=' space-x-2 space-y-2 '>
            <Button title='TypeScript' />
            <Button title='React' />
            <Button title='Next.js' />
            <Button title='React Query' />
            <Button title='FramerMotion' />
            <Button title='Tailwind' />
            <Button title='Redux' />
            <Button title='Headless UI' />
          </div>
        </div>

      </Link>
      <Link href={'https://www.digitalengineeringtech.com'} target='_blank' className='flex flex-col sm:flex-row items-start  group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between  gap-[20px]'>
        <div className='md:w-[25%] lg:w-[30%]'>
          <p className='text font-[500]  text-[12px]'>DEC 2020 - JAN 2024 </p>
        </div>
        <div className='sm:w-[450px] md:w-[65%] lg:w-[70%] space-y-3'>
          <Link href={'https://www.digitalengineeringtech.com'} target='_blank' className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>FullStack . Digital Engineering Tech<MdOutlineArrowOutward /></Link>
          <p className='text text-sm'>Assigned to work on the front-end web Development for IOT projects. Responsible for developing Android apps and handling POS apps with React Native. Assigning tasks to junior developers for implementing new updates and features and testing APIs of the backend developer to ensure functionality.</p>
          <div className='flex gap-4'>
            <Link href="https://detfsmm.com" target='_blank' className='flex   hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />FMS
            </Link>
            <Link href="https://drive.google.com/file/d/15NQDfyogA01TvzT2dz9qv_8cEdl7pLjJ/view" target='_blank' className='flex  hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />FMS App
            </Link>
          </div>
          <div className=' space-x-2 space-y-2 '>
            <Button title='TypeScript' />
            <Button title='React' />
            <Button title='Next.js' />
            <Button title='React Native' />
            <Button title='FramerMotion' />
            <Button title='Tailwind' />
            <Button title='Node' />
            <Button title='Express' />
            <Button title='MONGODB' />
            <Button title='Redis' />
            <Button title='EC2' />
            <Button title='Z.com' />
            <Button title='MQTT' />
            <Button title='RaspberryPi' />
            <Button title='HomeBridge' />
          </div>
        </div>

      </Link>
      <Link href={'https://www.digitalengineeringtech.com'} target='_blank' className='flex flex-col sm:flex-row items-start  group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between  gap-[20px]'>
        <div className='md:w-[25%] lg:w-[30%]'>
          <p className='text font-[500]  text-[12px]'>DEC 2020 - JAN 2024 </p>
        </div>
        <div className='sm:w-[450px] md:w-[65%] lg:w-[70%] space-y-3'>
          <Link href={'https://www.digitalengineeringtech.com'} target='_blank' className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>FullStack . Digital Engineering Tech<MdOutlineArrowOutward /></Link>
          <p className='text text-sm'>Assigned to work on the front-end web Development for IOT projects. Responsible for developing Android apps and handling POS apps with React Native. Assigning tasks to junior developers for implementing new updates and features and testing APIs of the backend developer to ensure functionality.</p>
          <div className='flex gap-4'>
            <Link href="https://detfsmm.com" target='_blank' className='flex   hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />FMS
            </Link>
            <Link href="https://drive.google.com/file/d/15NQDfyogA01TvzT2dz9qv_8cEdl7pLjJ/view" target='_blank' className='flex  hover:text-teal-300 gap-1 head text-sm items-center'>
              <CiLink />FMS App
            </Link>
          </div>
          <div className=' space-x-2 space-y-2 '>
            <Button title='TypeScript' />
            <Button title='React' />
            <Button title='Next.js' />
            <Button title='React Native' />
            <Button title='FramerMotion' />
            <Button title='Tailwind' />
            <Button title='Node' />
            <Button title='Express' />
            <Button title='MONGODB' />
            <Button title='Redis' />
            <Button title='EC2' />
            <Button title='Z.com' />
            <Button title='MQTT' />
            <Button title='RaspberryPi' />
            <Button title='HomeBridge' />
          </div>
        </div>

      </Link>
    </>
  )
}

export default WorkCard