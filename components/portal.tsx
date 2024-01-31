import Image from 'next/image';
import React, { useEffect } from 'react'
import V1 from '@/public/assets/Screenshot 2024-01-28 at 19.20.50.png';
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

function Portal({ click, handleClick }: { click: boolean, handleClick: (value: boolean) => void }) {
    useEffect(() => {
    document.body.style.overflow = click ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [click]);
  return (
      <div className={`${click ? 'opacity-1 ' : "opacity-0"} portal    duration-1000  fixed top-0 left-0 right-0 bottom-0 `}>
    <button onClick={()=>handleClick(false)} className='text absolute right-1 border-l-[1px] flex items-center justify-center border-purple-400 border-b-[1px] z-30 w-[60px] h-[60px] top-1'>
        <IoMdClose className='w-7 h-7'/>
    </button>
 <main className=''>
  <div className='div div_one'></div>
  <div className='div div_two'></div>
  <div className='div div_three'></div>
  <div className='div div_four'></div>
  <div className='div div_five'></div>
 
</main>
<div className='starwarpage'>
     <div className='starwarintro space-y-16'>
        <h3 className=' looking font-bold text-xl lg:text-3xl text-black '>Looking for a different site? Go back in time...</h3>
      <Link href={'https://portfolio-5bo7.vercel.app/'} target='_blank' className='relative group cursor-pointer'>
            <Image src={V1} width={200} className='rounded border-gray-500 border' alt='portfilio' />
            <div className='absolute group-hover:opacity-80 duration-500 bg-slate-400 font-bold opacity-0 flex items-center justify-center top-0 left-0 right-0 bottom-0'>V1</div>
      </Link>
     </div>
</div>
<div className='w-full absolute bottom-[8%] text-xs  text-center'>
    <Link href={'https://codepen.io/jasesmith/pen/qqgvZe'} className='text underline'>A Portal to Tomorrow by @jasemith</Link>
</div>
   </div>
  )
}

export default Portal