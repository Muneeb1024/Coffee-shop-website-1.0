import Link from "next/link";

import { TbWorldWww } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function Footer() {
  return (
<footer className="footer-sec">
<div className="footer-social-icons-container">
<Link href={'/'}> <span><TbWorldWww className="Foot-icon"/></span></Link>
<Link href={'/'}> <span><FaFacebookF className="Foot-icon"/></span></Link>
<Link href={'/'}> <span><FaInstagram className="Foot-icon"/></span></Link>
<Link href={'/'}> <span><FaLinkedinIn className="Foot-icon"/></span></Link>
<Link href={'/'}> <span><FaTwitter className="Foot-icon"/></span></Link>
</div>

<div className="footer-nav-links">
  <Link href={'/'}>Home</Link>
  <Link href={'/'}>About</Link>
  <Link href={'/'}>Menu</Link>
  <Link href={'/'}>Products</Link>
  <Link href={'/'}>Review</Link>
  <Link href={'/'}>Contact</Link>
  <Link href={'/'}>Blogs</Link>
</div>

<span> Created By <Link href={'/'}> Muneeb Team Coffee</Link> | All Rights Reserved</span>
</footer>
  )
}

export default Footer;