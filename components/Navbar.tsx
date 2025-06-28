import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
