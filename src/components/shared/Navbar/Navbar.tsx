import Link from "next/link";
import { Logo } from "@/utils/icon/Logo";
import { MenuIcon } from "@/utils/icon/MenuIcon";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center container spacing px-[24px] sm-px-[42px] lg:px-[0] lg:mt-[32px]">
            <div>
                <Link href={"/"}><Logo /></Link>
            </div>

            <div className=" hidden lg:flex justify-center items-center gap-[32px]">
                <ul className="flex justify-center items-center gap-[32px]">
                    <li><Link href={"/"} className="text-paragraphColor text-[14px]">Home</Link></li>
                    <li><Link href={"/portfolio"} className="text-paragraphColor text-[14px]">Portfolio</Link></li>
                    <li><Link href={"/about"} className="text-paragraphColor text-[14px]">About us</Link></li>
                    <li><Link href={"/services"} className="text-paragraphColor text-[14px]">Services</Link></li>
                    <li><Link href={"/testimonials"} className="text-paragraphColor text-[14px]">Testimonials</Link></li>
                    <li><Link href={"/blog"}>Blog</Link></li>
                </ul>
                <button className="btn-primary px-[24px] py-[12px]">Contact</button>
            </div>

            <div className="flex lg:hidden relative items-center justify-center gap-[24px]">
                <button className="btn-primary px-[24px] py-[12px]">Contact</button>
                <button><MenuIcon /></button>
            </div>
        </nav>
    );
};

export default Navbar;