import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id='hero'
        className='noisy'
      >
        <h1 className='title'>MOJITO</h1>
        <Image
          src='/images/hero-left-leaf.png'
          alt='left-leaf'
          className='left-leaf'
          height={100}
          width={100}
        />
        <Image
          src='/images/hero-right-leaf.png'
          alt='right-leaf'
          className='right-leaf'
          height={100}
          width={100}
        />
        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>Cool. Crisp. Classic.</p>
              <p className='subtitle'>
                Sip the spirit <br /> of Summer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
