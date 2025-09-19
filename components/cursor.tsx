'use client'
import React, { useEffect } from 'react'
import { motion,useMotionValue,useSpring } from 'framer-motion';

function StickyCursor() {
    // We center via CSS transform, so no need for fixed cursor size offset
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothOptions = {damping:24,stiffness:260,mass:0.45}
    const smoothMouse = {
        x: useSpring(mouse.x,smoothOptions),
        y: useSpring(mouse.y,smoothOptions)
    }
    const manageMouseMover = (e:any) => {
        const { clientX, clientY } = e;
        // Set raw coords; wrapper will translate to center
        mouse.x.set(clientX);
        mouse.y.set(clientY);
    }
    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMover);
      
        return ()=>{  window.removeEventListener('mousemove', manageMouseMover);}
    });
  return (
    <motion.div style={{left:smoothMouse.x,top:smoothMouse.y, transform:'translate(-50%, -50%)'}} className=' hidden lg:block fixed pointer-events-none'>
      <div className='firefly'></div>
      <div className='firefly-core'></div>
    </motion.div>
  )
}

export default StickyCursor