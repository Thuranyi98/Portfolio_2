'use client'
import Image from 'next/image'
import { GalleryItem } from '@/libs/data/mockData'

type Props = {
  items: GalleryItem[]
  onSelect?: (index: number) => void
}

function GalleryGrid({ items, onSelect }: Props) {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-[6px] sm:gap-2 lg:gap-2 mt-[60px]'>
      {items.map((it, idx) => (
        <figure
          key={it.id}
          className='group rounded-md overflow-hidden glossy cursor-pointer'
          onClick={() => onSelect && onSelect(idx)}
        >
          <div className='relative w-full h-0 pb-[100%]'>
            <Image
              src={it.image}
              alt={it.alt || it.title}
              fill
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 33vw'
              placeholder='blur'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200'></div>
            <figcaption className='pointer-events-none absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
              <div className='text-[11px] sm:text-[12px] text-white drop-shadow'>{it.title}</div>
              {it.caption ? <div className='text-[10px] text-white/80'>{it.caption}</div> : null}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  )
}

export default GalleryGrid
