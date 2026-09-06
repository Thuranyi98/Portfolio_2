import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ListItem from './lists/listItem'
import SocialLists from './lists/socialLists'
import GalleryLightbox from '@/components/GalleryLightbox'
import { GalleryItem } from '@/libs/data/mockData'
import PROFILE from '@/public/assets/Me/thuranyi.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const profileItem: GalleryItem = {
  id: 0,
  title: 'Thura Nyi',
  image: PROFILE,
  alt: 'Portrait of Thura Nyi',
}

function Introduce({ activeLink }: { activeLink: any }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  return (
    <div className='lg:w-[calc(40%-50px)] lg:pt-[100px] lg:pb-[24px] lg:fixed lg:max-h-[calc(100svh-40px)] lg:overflow-y-auto no-scrollbar space-y-6 lg:space-y-8'>
      <div className='space-y-4'>
        <div className='flex items-center gap-5'>
          <h3 className="text-4xl md:text-5xl font-bold head">Thura Nyi</h3>
        </div>
        <h3 className="text-xl font-light  head">Software Engineer</h3>
        <p className="text">
          I create efficient, accessible, <br /> and user-focused digital experiences.
        </p>
        <div className='mt-[30px] '>
          <Link href={'/gallery'} className='text-white group flex gap-2 duration-300 items-center cursor-pointer hover:text-teal-300 transition-colors'><span className="border-b-[0.5px] border-transparent group-hover:border-teal-300 transition-all duration-300">Image Gallery </span><FiArrowRight className='group-hover:translate-x-1 transition-transform duration-300' /></Link>
        </div>

        <div
          role='button'
          tabIndex={0}
          aria-label='View full-size photo'
          onClick={() => setLightboxOpen(true)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(true) }}
          className='relative w-full max-w-[260px] group cursor-pointer'
        >
          <div className='absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-blue-500/25 via-teal-400/10 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10' />
          <div className='relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 border border-gray-700/40 shadow-lg shadow-black/40 group-hover:ring-teal-300/30 transition-all duration-300'>
            <Image
              alt='Portrait of Thura Nyi'
              className='object-cover transition-transform duration-500 group-hover:scale-105'
              src={PROFILE}
              fill
              sizes="(min-width: 1024px) 260px, 70vw"
              placeholder='blur'
              quality={85}
            />
          </div>
        </div>

      </div>

      {lightboxOpen && typeof window !== 'undefined' && createPortal(
        <GalleryLightbox
          items={[profileItem]}
          index={0}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />,
        document.body
      )}

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