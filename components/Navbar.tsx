import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link
          href='#home'
          className='flex items-center gap-2'
        >
          Velvet Pour
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
