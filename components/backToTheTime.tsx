'use client'
import React, { useState } from 'react'
import Light from '@/public/assets/rotate-2.gif';
import Image from 'next/image';
import Portal from './portal';

function BackToTheTime() {
  const [click, handleClick] = useState<boolean>(false);

  return (
   <div className='fixed bottom-4 right-4 z-50 duration-1000'>
     <Image onClick={()=>handleClick((prev)=>!prev)} className="cursor-pointer w-[100px]" src={Light} alt="ligen"/>
     {
        click && <Portal click={click} handleClick={handleClick} />
     }
   </div>
  )
}

export default BackToTheTime