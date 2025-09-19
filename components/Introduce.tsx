import React from 'react'
import ListItem from './lists/listItem'
import SocialLists from './lists/socialLists'
import PROFILE from '@/public/assets/Profile/92428710.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

function Introduce({ activeLink }: { activeLink: any }) {
  return (
    <div className='lg:w-[calc(40%-50px)] lg:pt-[100px] lg:fixed lg:h-[calc(100svh-200px)] space-y-6  lg:space-y-20'>
      <div className='space-y-4'>
        <div className='flex items-center gap-5'>



          <div className='w-[60px] h-[60px] overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 border border-gray-700/40 shadow-sm'>
            <Image
              alt='Portrait of Thura Nyi'
              className='w-full h-full object-cover'
              src={PROFILE}
              width={60}
              height={60}
              sizes="(min-width: 1024px) 60px, 48px"
              priority
              placeholder='blur'
              quality={85}
            />

          </div>
          <h3 className="text-4xl md:text-5xl font-bold head">Thura Nyi</h3>
        </div>
        <h3 className="text-xl font-light  head">Software Engineer</h3>
        <p className="text">
          I create efficient, accessible, <br /> and user-focused digital experiences.
        </p>
        <div className='mt-[30px] '>
          <Link href={'/gallery'} className='text-white group flex gap-2 duration-300 items-center cursor-pointer hover:text-teal-300 transition-colors'><span className="border-b-[0.5px] border-transparent group-hover:border-teal-300 transition-all duration-300">Image Gallery </span><FiArrowRight className='group-hover:translate-x-1 transition-transform duration-300' /></Link>
        </div>


      </div>

      <div className=' hidden lg:block space-y-6'>
        <ListItem activeLink={activeLink} title='About' />
        <ListItem activeLink={activeLink} title='Experience' />
        <ListItem activeLink={activeLink} title='Projects' />
        <ListItem activeLink={activeLink} title='Certificates' />

      </div>
      <SocialLists />

    </div>
  )
}

export default Introduce