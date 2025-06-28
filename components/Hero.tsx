"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    if (videoRef.current) {
      const video = videoRef.current;

      if (video.readyState >= 1) {
        const startValue = isMobile ? "top 50%" : "center 60%"; //the first property refers to the element we're animating, the second property refers to the screen
        const endValue = isMobile ? "120% top" : "bottom top";

        const videoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
          },
        });

        videoTimeline.to(videoRef.current, {
          currentTime: videoRef.current!.duration,
        });
      }
    }
  }, []);

  return (
    <>
      <section
        id='hero'
        className='noisy '
      >
        <h1 className='title'>MOJITO</h1>
        <Image
          src='/images/hero-left-leaf.png'
          alt='left-leaf'
          className='left-leaf'
          height={200}
          width={200}
        />
        <Image
          src='/images/hero-right-leaf.png'
          alt='right-leaf'
          className='right-leaf'
          height={200}
          width={200}
        />
        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>Cool. Crisp. Classic.</p>
              <p className='subtitle'>
                Sip the spirit <br /> of Summer
              </p>
            </div>
            <div className='view-cocktails'>
              <p className='subtitle'>
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <Link href='#cocktails'>View Cocktails</Link>
            </div>
          </div>
        </div>
      </section>
      <div className='video absolute inset-0'>
        <video
          ref={videoRef}
          src='/videos/input.mp4'
          muted
          playsInline
          preload='metadata'
        />
      </div>
    </>
  );
};

export default Hero;
