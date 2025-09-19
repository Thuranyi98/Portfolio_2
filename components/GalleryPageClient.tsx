'use client'
import { galleryItems } from '@/libs/data/mockData'
import GalleryGrid from '@/components/GalleryGrid'
import GalleryLightbox from '@/components/GalleryLightbox'
import { useState } from 'react'
import Link from 'next/link'
import { GoArrowLeft } from 'react-icons/go'

export default function GalleryPageClient() {
  const [active, setActive] = useState<number | null>(null)

  const hasActive = active !== null
  const total = galleryItems.length

  const handlePrev = () => setActive((prev) => {
    if (prev === null) return prev
    return (prev - 1 + total) % total
  })
  const handleNext = () => setActive((prev) => {
    if (prev === null) return prev
    return (prev + 1) % total
  })

  return (
    <main className='px-4 lg:p-5'>
      <div className=' w-full pt-[80px]'>
        <Link href={'/'} className=' text-teal-300 group   flex items-center lg:text-md gap-1  font-semibold mb-2'><GoArrowLeft className=' duration-500 group-hover:translate-x-[-10px]' />Thura Nyi</Link>
        <h3 className='text-4xl font-bold lg:text-5xl text-slate-200'>Gallery</h3>
        <p className='text text-[14px] mt-2'>Moments and memories — Alongthrough Journey.</p>
        <GalleryGrid items={galleryItems} onSelect={(idx) => setActive(idx)} />
      </div>
      {hasActive && (
        <GalleryLightbox
          items={galleryItems}
          index={active as number}
          onClose={() => setActive(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </main>
  )
}
