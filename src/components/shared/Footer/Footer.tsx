import FooterLinkBox from "../FooterLinkBox/FooterLinkBox";
import Link from "next/link";
import React from "react";
import { Behance } from "@/utils/icon/Behance";
import { CopyRight } from "@/utils/icon/CopyRight";
import { Dribble } from "@/utils/icon/Dribble";
import { Linkedin } from "@/utils/icon/Linkedin";
import { LocationTransparent } from "@/utils/icon/LocationTransparent";
import { LogoWhite } from "@/utils/icon/LogoWhite";
import { MailTransparent } from "@/utils/icon/MailTransparent";
import { PhoneTransparent } from "@/utils/icon/PhoneTransparent";
import { StarIcon } from "@/utils/icon/StarIcon";
import { Teligram } from "@/utils/icon/Teligram";
import { Twitter } from "@/utils/icon/Twiteer";
import { WebTransparent } from "@/utils/icon/WebTransparent";
import { footerLinks } from "@/utils/mock/footerLinks";

const Footer = () => {
    return (
        <footer className="bg-[#0E1025] min-h-[453px]">
            <div className="container spacing pt-[32px] col-center flex flex-col items-center justify-between gap-[42px]">
                <div className="flex flex-col items-start justify-start gap-[62px] w-full">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-white text-[32px] relative">
                            <p className="text-[#FBA017] uppercase font-[600] text-[14px] tracking-[1.68px]">join us</p>
                            <h1 className="text-[32px] font-[700] "><span className="footHighlight">Subscribe</span> for newsletter</h1>
                            <div className="center border-[3.11px] border-[#FBA017] w-[28px] h-[28px] rounded-[50%] absolute right-[-45px]  top-[35px]">
                                <StarIcon />
                            </div>
                        </div>

                        <div className="flex justify-between w-[370px] h-[46px] border-[1px] border-[#ffffff33] rounded-full  pl-[16px]">
                            <input type="text" className="bg-transparent outline-none border-none text-white" placeholder="Enter your Email" />
                            <button className="btn-primary w-[111px] py-[10px] px-[16px] text-[14px] font-[500]">Subscribe</button>
                        </div>
                    </div>

                    <div className="flex gap-[133px] items-start w-full">

                        <div className="flex flex-col items-start justify-start gap-[16px]">

                            <div className="flex justify-start items-start flex-col gap-[8px]">
                                <div className="flex items-center justify-start gap-[8px]">
                                    <LogoWhite />
                                    <h3 className="text-white text-[18px] font-[800]">WebWhiz</h3>
                                </div>
                                <p className="w-[339px] text-[16px] text-[#808088] leading-[160%]">Customer Feedback Analytic like it was Supposed to be!</p>
                            </div>


                            <p className="horiLine text-white text-[16px]">Social Links</p>
                            <div className="flex justify-start items-center gap-[8px]">
                                <Link href={"/"}><Twitter /></Link>
                                <Link href={"/"}><Linkedin /></Link>
                                <Link href={"/"}><Teligram /></Link>
                                <Link href={"/"}><Behance /></Link>
                                <Link href={"/"}><Dribble /></Link>
                            </div>
                        </div>

                        <div className="flex justify-between items-start text-white w-full">

                            <FooterLinkBox heading="Company" links={footerLinks[0]} />
                            <FooterLinkBox heading="Our services" links={footerLinks[1]} />

                            <div className="flex flex-col items-start justify-start gap-[16px]">
                                <h3 className="underlineBg text-[20px] font-[600]">Contact</h3>

                                <div className="flex flex-col items-start justify-start gap-[12px]">
                                    <Link href={""} className="text-[#949498] text-[16px] flex gap-[8px] leading-[160%]"
                                    >
                                        <MailTransparent />
                                        alexgoat@gmai.com
                                    </Link>

                                    <Link href={""} className="text-[#949498] text-[16px] flex gap-[8px] leading-[160%]"
                                    >
                                        <PhoneTransparent />
                                        +880 16096-55707
                                    </Link>

                                    <Link href={""} className="text-[#949498] text-[16px] flex gap-[8px] leading-[160%]"
                                    >
                                        <LocationTransparent />
                                        221b Baker St London
                                    </Link>

                                    <Link href={""} className="text-[#949498] text-[16px] flex gap-[8px] leading-[160%]"
                                    >
                                        <WebTransparent />
                                        WebWhiz.com
                                    </Link>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="center gap-[2px] py-[16px] w-full border-t-[1px] border-[#262626]">
                    <CopyRight />

                    <p className="text-[14px] leading-[160%] font-normal text-paragraphColor">Copyright 2023 Elearner,Inc NewYork</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;