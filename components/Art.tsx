import { goodLists } from "@/constants";
import Image from "next/image";
import React from "react";

const Art = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Art;
