'use client'
import Image from 'next/image'
import { GalleryItem } from '@/libs/data/mockData'
import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md'

type Props = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function GalleryLightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const item = items[index]
  if (!item) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
      <button
        aria-label='Close'
        onClick={onClose}
        className='absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white'
      >
        <MdClose size={22} />
      </button>
      <button
        aria-label='Previous'
        onClick={onPrev}
        className='absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white'
      >
        <MdChevronLeft size={26} />
      </button>
      <button
        aria-label='Next'
        onClick={onNext}
        className='absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white'
      >
        <MdChevronRight size={26} />
      </button>

      <div className='max-w-[92vw] max-h-[82vh] w-full sm:w-auto glossy rounded-lg overflow-hidden'>
        <div className='relative w-[92vw] sm:w-[76vw] lg:w-[60vw] h-[60vh] sm:h-[70vh]'>
          <Image
            src={item.image}
            alt={item.alt || item.title}
            fill
            sizes='(min-width: 1024px) 60vw, (min-width: 640px) 76vw, 92vw'
            className='object-contain bg-black'
            priority
          />
        </div>
        <div className='p-3 sm:p-4 bg-black/50'>
          <div className='head text-[14px] font-semibold'>{item.title}</div>
          {item.caption ? <div className='text text-[12px] mt-1'>{item.caption}</div> : null}
          {item.date ? <div className='text text-[11px] opacity-70 mt-1'>{new Date(item.date).toLocaleDateString()}</div> : null}
        </div>
      </div>
    </div>
  )
}
