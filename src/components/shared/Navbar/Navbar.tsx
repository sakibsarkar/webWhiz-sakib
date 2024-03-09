import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import Link from "next/link";
import { Logo } from "@/utils/icon/Logo";

const Navbar = () => {
    return (
        <LayoutWrapper>
            <nav className="flex justify-between items-center mt-[32px]">
                <div>
                    <Link href={"/"}><Logo /></Link>
                </div>

                <div className="flex justify-center items-center gap-[32px]">
                    <ul className="flex justify-center items-center gap-[32px]">
                        <li><Link href={"/"} className="text-paragraphColor">Home</Link></li>
                        <li><Link href={"/portfolio"}>Portfolio</Link></li>
                        <li><Link href={"/about"} className="text-paragraphColor">About us</Link></li>
                        <li><Link href={"/services"} className="text-paragraphColor">Services</Link></li>
                        <li><Link href={"/testimonials"} className="text-paragraphColor">Testimonials</Link></li>
                        <li><Link href={"/blog"}>Blog</Link></li>
                    </ul>
                    <button className="btn-primary px-[24px] py-[12px]">Submit</button>
                </div>
            </nav>
        </LayoutWrapper>
    );
};

export default Navbar;