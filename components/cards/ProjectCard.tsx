'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Button from '../button'
import { MdOutlineArrowOutward } from 'react-icons/md';
import PorjectImg from '../../public/assets/khitzayMock.png';
import Image, { StaticImageData } from 'next/image';
import { CiLink } from "react-icons/ci";
import Link from 'next/link';
import GalleryLightbox from '@/components/GalleryLightbox'
import { GalleryItem } from '@/libs/data/mockData'
import { createPortal } from 'react-dom'

type Project = {
  id: number;
  title: string;
  titleLink: string;
  description: string;
  image: StaticImageData; // Assuming KhitZayImg is a string representing the image source
  images?: StaticImageData[];
  links: {
    name: string;
    link: string;
  }[]; // Allow links to be an array of objects or null
   languages: (string | undefined)[];
};


function ProjectCard({data}:{data:any}) {
  const images: StaticImageData[] | null = useMemo(() => {
    if (Array.isArray(data.images) && data.images.length > 0) return data.images as StaticImageData[];
    return null;
  }, [data.images]);

  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const lightboxItems: GalleryItem[] = useMemo(() => {
    if (!images) return [];
    return images.map((img: StaticImageData, i: number) => ({
      id: i + 1,
      title: data.title,
      image: img,
      alt: data.title,
    }));
  }, [images, data.title]);

  const CardWrapper: any = data.titleLink ? Link : 'div';
  const wrapperProps: any = data.titleLink ? { href: data.titleLink, target: '_blank' } : {};

  // Auto-advance slides every 3s when images exist and lightbox is closed
  useEffect(() => {
    if (!images || images.length === 0) return;
    if (lightboxOpen) return; // pause when lightbox is open
    const id = setInterval(() => {
      setActiveIdx((p) => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images, lightboxOpen]);

  return (
    <CardWrapper {...wrapperProps} className='flex flex-col sm:flex-row  items-start group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between gap-[20px] transition-opacity duration-200 group-hover/projects:opacity-50 hover:!opacity-100'>
        <div className='hidden  md:w-[25%] lg:w-[50%] sm:block' onClick={(e) => { if (images) { e.preventDefault(); e.stopPropagation(); setLightboxOpen(true); } }}>
          {images ? (
            <div className='relative rounded  border-[2px] border-gray-700 overflow-hidden'>
              <Image src={images[activeIdx % images.length]} width={300}  className='w-full h-auto' alt='project'/>
              <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1'>
                {images.slice(0, 6).map((_, i) => (
                  <button
                    key={i}
                    aria-label={`slide ${i+1}`}
                    className={`h-[6px] w-[6px] rounded-full ${i === (activeIdx % images.length) ? 'bg-white' : 'bg-white/40'}`}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIdx(i); }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Image src={data.image} width={250} layout='responsive' className='rounded  border-[2px] border-gray-700'  alt='project'/>
          )}
        </div>
        <div className='sm:w-[440px] md:w-[75%] lg:w-[70%]  scale-[1] space-y-3'>
              {data.titleLink ? (
                <Link target='_blank' href={data.titleLink} className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>{data.title}<MdOutlineArrowOutward /></Link>
              ) : (
                <div className='head flex items-center gap-2'>{data.title}</div>
              )}
              <p className='text text-sm'>{data.description}</p>
         <div className='flex gap-4'>
            {
             data.links && data.links.map((e:any) => (
            <Link target='_blank' href={e.link} key={e.link} className='flex hover:text-teal-300 gap-1 head text-sm items-center'>
                <CiLink/>{e.name}
            </Link>
                ))
            }
        </div>
        
        <div className=' gap-2 flex flex-wrap items-center justify-start  '>
            {
                data.languages.map((e:any) => (
                    <Button key={e} title={e} />  
                ))
            }
        </div>
        </div>
        <div className='sm:hidden' onClick={(e) => { if (images) { e.preventDefault(); e.stopPropagation(); setLightboxOpen(true); } }}>
          {images ? (
            <Image src={images[activeIdx % images.length]} width={220} className='rounded  border-[2px] border-gray-700'  alt='project'/>
          ) : (
            <Image src={data.image} width={220} className='rounded  border-[2px] border-gray-700'  alt='project'/>
          )}
        </div>
        
        {lightboxOpen && images && typeof window !== 'undefined' && createPortal(
          <GalleryLightbox
            items={lightboxItems}
            index={activeIdx}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setActiveIdx((p) => (p - 1 + images.length) % images.length)}
            onNext={() => setActiveIdx((p) => (p + 1) % images.length)}
          />,
          document.body
        )}

    </CardWrapper>
  )
}

export default ProjectCard