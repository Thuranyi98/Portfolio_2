'use client'
import Introduce from "@/components/Introduce";
import ShowCase from "@/components/ShowCase";
import BackToTheTime from "@/components/backToTheTime";
import Rotate from '@/public/assets/rotate-2.gif';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink, Element, scroller } from 'react-scroll';

export default function Home() {

  const [activeLink, setActiveLink] = useState('');
  const [client, setClient] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections:any = document.querySelectorAll('section[id]');

      sections.forEach((current:any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

     setClient(true);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  if(!client) return <div></div>

  return (
    <>
    <div className="flex flex-col lg:items-start lg:justify-start space-y-3">
    <Introduce  activeLink={activeLink} />
    <ShowCase/>
    </div>
    <BackToTheTime/>
    </>
  );
}
