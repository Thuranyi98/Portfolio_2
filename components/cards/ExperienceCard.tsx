import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import Link from 'next/link';
import Button from '../button';

export type ExperienceLink = {
  name: string
  link: string
}

export type Experience = {
  id: number
  period: string
  title: string
  companyLink: string
  description: string
  links: ExperienceLink[] | null
  technologies: string[]
}

type Props = {
  data: Experience
}

function ExperienceCard({ data }: Props) {
  const { period, title, companyLink, description, links, technologies } = data
  return (
    <Link href={companyLink} target='_blank' className='flex flex-col sm:flex-row items-start  group cursor-pointer glossy lg:p-5 rounded-lg drop-shadow-4xl justify-between  gap-[20px] transition-opacity duration-200 group-hover/exp:opacity-50 hover:!opacity-100'>
      <div className='md:w-[25%] lg:w-[30%]'>
        <p className='text font-[500]  text-[12px]'>{period}</p>
      </div>
      <div className='sm:w-[450px] md:w-[65%] lg:w-[70%] space-y-3'>
        <Link href={companyLink} target='_blank' className='head flex items-center group-hover:text-teal-300 cursor-pointer gap-2'>{title}<MdOutlineArrowOutward /></Link>
        <p className='text leading-[22px] text-sm'>{description}</p>
        {links && links.length > 0 && (
          <div className='flex gap-4'>
            {links.map((l) => (
              <Link key={l.name} href={l.link} target='_blank' className='flex   hover:text-teal-300 gap-1 head text-sm items-center'>
                <CiLink />{l.name}
              </Link>
            ))}
          </div>
        )}
        <div className=' space-x-2 space-y-2 '>
          {technologies.map((t) => (
            <Button key={t} title={t} />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ExperienceCard


