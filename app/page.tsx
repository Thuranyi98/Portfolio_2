'use client'
import Introduce from "@/components/Introduce";
import ShowCase from "@/components/ShowCase";
import BackToTheTime from "@/components/backToTheTime";
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

      // Use viewport middle for more stable section detection
      const viewportMiddle = scrollY + window.innerHeight * 0.38;
      let newActive: string | null = null;

      sections.forEach((current:any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 72; // small offset for header spacing
        const sectionId = current.getAttribute('id');

        // Primary: middle-of-viewport within section
        const inView = viewportMiddle >= sectionTop && viewportMiddle < sectionTop + sectionHeight;

        // Fallback for short sections: activate once scrolled past their top
        const isShort = sectionHeight < 240;
        const shortHit = isShort && scrollY >= sectionTop - 40;

        if ((inView || shortHit) && sectionId) {
          newActive = sectionId;
        }
      });

      if (newActive) {
        setActiveLink(newActive);
      }

      // If near bottom of the page, mark the last section as active
      const doc = document.documentElement;
      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= doc.scrollHeight - 2;
      if (atBottom && sections.length > 0) {
        const lastSection:any = sections[sections.length - 1];
        const lastId = lastSection.getAttribute('id');
        if (lastId) setActiveLink(lastId);
      }
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
