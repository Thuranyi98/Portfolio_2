import Link from 'next/link'
import React from 'react'

function ListItem({title,activeLink}:{title:string,activeLink:any}) {
  return (
    <Link href={`#${title}`} className={`${activeLink === title?'text-white border-white':'text border-slate-200'} flex  items-center gap-[20px]`}>
          <div className={`border-t-[1px] duration-300 w-[40px] border-[#64748b] ${activeLink === title?'w-[60px] border-white':''}`}></div>
          <p className='  uppercase text-[12px] font-bold'>{title}</p>
    </Link>
  )
}

export default ListItem