import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top", //when the bottom of the navbar reaches the top of the viewport, that's when the animation is applied
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <Link
          href='#home'
          className='flex items-center gap-2'
        >
          <Image
            src='/images/logo.png'
            alt='logo'
            width={30}
            height={30}
            quality={100}
          />
          <p>Velvet Pour</p>
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
