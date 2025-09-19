import React from 'react'
import Image, { StaticImageData } from 'next/image'

export type Certificate = {
  id: number
  title: string
  issuer: string
  image: StaticImageData
  link?: string | null
}

function CertificateCard({ data }: { data: Certificate }) {
  const CardInner = (
    <div className='flex items-center gap-4 glossy rounded-xl p-4 lg:p-5 drop-shadow-4xl transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.01]'>
      <div className='w-[104px] h-[104px] shrink-0 rounded overflow-hidden border-[2px] border-gray-700 bg-white/5'>
        <Image src={data.image} alt={data.title} className='object-contain w-full h-full' />
      </div>
      <div className='space-y-1'>
        <p className='head text-[15px] font-semibold leading-5'>{data.title}</p>
        <p className='text text-[12px] opacity-80'>{data.issuer}</p>
        {data.link ? (
          <span className='text-[12px] head hover:text-teal-300 underline inline-block'>View credential</span>
        ) : null}
      </div>
    </div>
  )

  if (data.link) {
    return (
      <a href={data.link} target='_blank' rel='noopener noreferrer' aria-label={`View ${data.title} credential`}>
        {CardInner}
      </a>
    )
  }

  return CardInner
}

export default CertificateCard


