"use client";

import { featureLists, goodLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The Art</h2>
        <div className='content'>
          <ul className='space-y-4 will-fade'>
            {goodLists.map((feature, idx) => (
              <li
                key={idx}
                className='flex items-center gap-2'
              >
                <Image
                  src='/images/check.png'
                  alt='check'
                  height={20}
                  width={20}
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className='cocktail-img'>
            <Image
              src='/images/under-img.jpg'
              alt='cocktail'
              className='abs-center masked-img size-full object-contain'
              height={500}
              width={500}
              quality={100}
            />
          </div>
          <ul className='space-y-4 will-fade'>
            {featureLists.map((feature, idx) => (
              <li
                key={idx}
                className='flex items-center justify-start gap-2'
              >
                <Image
                  src='/images/check.png'
                  alt='check'
                  height={20}
                  width={20}
                />
                <p className='md:w-fit w-60'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='masked-container'>
          <h2 className='will-fade'>Sip-Worthy Perfection</h2>
          <div id='masked-content'>
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn&apos;t just a drink. It&apos;s a carefully crafted moment
              made just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
