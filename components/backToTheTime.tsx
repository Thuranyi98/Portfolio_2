'use client'
import React, { useState } from 'react'
import Light from '@/public/assets/rotate-2.gif';
import Image from 'next/image';
import Portal from './portal';

function BackToTheTime() {
  const [click, handleClick] = useState<boolean>(false);

  return (
   <div className=' duration-1000'>
     <Image onClick={()=>handleClick((prev)=>!prev)} className="absolute cursor-pointer w-[100px]  mt-[10px] mb-[30px] right-2" src={Light} alt="ligen"/>
     {
        click && <Portal click={click} handleClick={handleClick} />
     }
   </div>
  )
}

export default BackToTheTime