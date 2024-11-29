import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image src={"/logo1.png"} alt="Logo" width={60} height={60} />
      </Link>

      <nav className="navbar">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/product"}>Products</Link>
        <Link href={"/review"}>Review</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/blog"}>Blogs</Link>
      </nav>

      <div className="icons">
        <FaSearch className="icon"/>
        <FaCartShopping className="icon"/>
        <RiMenu3Line id="menu"/>
      </div>
    </header>
  );
}

export default Header;
