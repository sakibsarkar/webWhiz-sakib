import Image from "next/image";
import { ArrowLeft } from "@/utils/icon/ArrowLeft";
import { ArrowRight } from "@/utils/icon/ArrowRight";

const SatisfiedCustomer = () => {
    return (
        <section className="mt-[76px]">
            <div className="container spacing min-h-[586px] flex items-end gap-[70px] justify-center">

                <div className="w-[554px] h-[450px] bg-[#EDEEFB] rounded-[16px] center relative">

                    <Image alt="satisfaction" src={"/images/Rectangle75.png"} height={510} width={369} className="absolute bottom-[77px]" />
                    <div className="flex justify-center items-center gap-[8px] absolute bottom-[40px]">
                        <div className="w-[50px] h-[4px] rounded-full  gradient"></div>
                        <div className="w-[50px] h-[4px] rounded-full  bg-[#d9e0f8]"></div>
                        <div className="w-[50px] h-[4px] rounded-full  bg-[#d9e0f8]"></div>
                    </div>
                </div>

                <div className="min-h-[586px] max-[586px] flex items-end justify-end pb-[62px]">

                    <div className="flex flex-col items-start justify-end gap-[40px]">
                        <div className="flex flex-col items-start justify-start gap-[4px]">
                            <p className="text-[#FBA017] text-[14px] font-[600] uppercase tracking-[1.68px]">Blog</p>
                            <div className="flex flex-col items-start justify-between gap-[16px]">
                                <h1 className="text-[40px] font-[700] leading-[140%] w-[516px]">Our <span className="highLight text-primary">satisfied customers</span>share their stories</h1>

                                <p className="verticalHigh text-[16px] w-[516px] h-[78px] leading-[160%]">The team consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology</p>
                            </div>

                        </div>
                        <div className="flex justify-end items-center gap-[12px]">
                            <button className="w-[32px] h-[32px] center border-[1px] border-primary rounded-full"><ArrowLeft /></button>
                            <p>
                                <span className="txtGradient text-[18.9px]">01</span>
                                <span className="text-[11.027px] text-paragraphColor">/06</span>
                            </p>
                            <button className="gradient w-[32px] h-[32px] center rounded-full"><ArrowRight /></button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SatisfiedCustomer;