import React from 'react'
import ListItem from './lists/listItem'
import SocialLists from './lists/socialLists'

function Introduce({activeLink}:{activeLink:any}) {
  return (
    <div className='lg:w-[calc(40%-50px)] lg:pt-[100px] lg:fixed lg:h-[calc(100svh-200px)] space-y-6  lg:space-y-20'>
    <div className='space-y-4'>
    <h3 className="text-4xl md:text-5xl font-bold head">Thura Nyi</h3>
    <h3 className="text-xl font-light  head">Frontend Developer</h3>
    <p className="text">I build pixel-perfect, engaging, and <br/> accessible digital experiences.</p>
    </div>
   
    <div className=' hidden lg:block space-y-6'>
    <ListItem activeLink={activeLink} title='About'/>
    <ListItem activeLink={activeLink} title='Experience'/>
    <ListItem activeLink={activeLink} title='Projects'/>
    </div>     
    <SocialLists/> 
    
    </div>
  )
}

export default Introduce