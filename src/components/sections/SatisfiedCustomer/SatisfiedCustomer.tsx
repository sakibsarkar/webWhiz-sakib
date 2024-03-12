import Image from "next/image";
import { ArrowLeft } from "@/utils/icon/ArrowLeft";
import { ArrowRight } from "@/utils/icon/ArrowRight";

const SatisfiedCustomer = () => {
    return (
        <section className="my-[76px]">
            <div className="container spacing flex flex-col-reverse items-center gap-[120px] md:flex-row md:justify-around md:items-end xl:h-[586px] xl:items-end xl:gap-[70px] justify-center">

                <div className="w-[340px] h-[284px] xl:w-[554px] xl:h-[450px] bg-[#EDEEFB] rounded-[16px] center relative">

                    <Image alt="satisfaction" src={"/images/Rectangle75.png"} height={510} width={369} className="absolute bottom-[77px] w-[227px] h-[348px] xl:h-[510px] xl:w-[369px]" />
                    <div className="flex justify-center items-center gap-[8px] absolute bottom-[40px]">
                        <div className="w-[50px] h-[4px] rounded-full  gradient"></div>
                        <div className="w-[50px] h-[4px] rounded-full  bg-[#d9e0f8]"></div>
                        <div className="w-[50px] h-[4px] rounded-full  bg-[#d9e0f8]"></div>
                    </div>
                    <div className="absolute bottom-[-43px] justify-end items-center gap-[12px] flex md:hidden">
                        <button className="w-[32px] h-[32px] center border-[1px] border-primary rounded-full"><ArrowLeft /></button>
                        <p>
                            <span className="txtGradient text-[18.9px]">01</span>
                            <span className="text-[11.027px] text-paragraphColor">/06</span>
                        </p>
                        <button className="gradient w-[32px] h-[32px] center rounded-full"><ArrowRight /></button>
                    </div>
                </div>

                <div className="w-[340px] h-[308px] sm:h-[400px] xl:h-[586px] xl:w-[586px] flex items-end justify-end pb-[62px]">

                    <div className="flex flex-col items-start justify-end gap-[40px]">
                        <div className="flex flex-col items-start justify-start gap-[4px]">
                            <p className="text-[#FBA017] w-full text-center text-[14px] font-[600] uppercase tracking-[1.68px] md:text-left">Blog</p>
                            <div className="flex flex-col items-start justify-between gap-[16px]">
                                <h1 className="text-[28px] text-center font-[700] leading-[140%] w-[330px] xl:text-[40px]  xl:w-[516px] md:text-left">Our <span className="highLight text-primary">satisfied customers</span>share their stories</h1>

                                <p className="verticalHigh !hidden text-[16px] w-[516px] h-[78px] leading-[160%] xl:!flex md:text-left">The team consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology</p>

                                <p className="flex text-center verticalHigh text-[16px] w-[348px] h-[54px] leading-[160%] xl:!hidden md:text-left">The team consistently delivered outstanding results surpassing our expectations in terms of creativity stra</p>



                            </div>

                        </div>
                        <div className="justify-end items-center gap-[12px] hidden md:flex">
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