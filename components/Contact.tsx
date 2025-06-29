import { openingHours, socials, storeInfo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <footer id='contact'>
      <Image
        src='/images/footer-right-leaf.png'
        alt='leaf-right'
        id='f-right-leaf'
        height={200}
        width={200}
        quality={100}
      />
      <Image
        src='/images/footer-left-leaf.png'
        alt='leaf-left'
        id='f-left-leaf'
        height={200}
        width={200}
        quality={100}
      />
      <div className='content'>
        <h2>{storeInfo.heading}</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>{storeInfo.address}</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>
        <div>
          <h3>Open Everyday</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className='flex-center gap-5'>
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={30}
                  height={30}
                  quality={100}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
