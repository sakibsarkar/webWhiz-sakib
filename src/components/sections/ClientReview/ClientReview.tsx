import Image from "next/image";
import SectionHeadingV2 from "@/components/shared/SectionHeadingV2";
import { ArrowLeft } from "@/utils/icon/ArrowLeft";
import { ArrowRight } from "@/utils/icon/ArrowRight";
import { RatingStart } from "@/utils/icon/RatingStar";

const ClientReview = () => {
    return (
        <section className="xl:mt-[76px]">
            <div className="container flex items-start justify-start">
                <div className="w-[1290px] h-[401px] flex justify-between">

                    {/* left section */}
                    <div className="xl:w-[802px] h-full flex items-end justify-between">
                        <div className="h-full flex flex-col items-end justify-between gap-[32px]">
                            <div className="">
                                <SectionHeadingV2 heading="Client Reviews" description="The team at consistently delivered outstanding surpassing expectations" dWidth={314} />
                            </div>

                            {/* small images */}
                            <div className="flex items-center justify-start xl:gap-[32px]">

                                <div className="xl:w-[216] xl:h-[212px]">
                                    <Image width={216} height={212} alt="client" src={"/images/Rectangle60.png"} className="imgFit" />
                                </div>

                                <div className="xl:w-[216] xl:h-[212px]">
                                    <Image width={216} height={212} alt="client" src={"/images/Rectangle61.png"} className="imgFit" />
                                </div>
                            </div>
                        </div>

                        {/* big image */}
                        <div className="xl:w-[306px] xl:h-[401px]">
                            <Image className="imgFit" alt="bigClient" width={306} height={401} src={"/images/Rectangle62.png"} />
                        </div>

                    </div>

                    {/* right section review box */}

                    <div className="xl:w-[456px] h-full flex flex-col justify-end gap-[16px]">

                        <div className="flex justify-end items-center gap-[12px]">
                            <button className="w-[32px] h-[32px] center border-[1px] border-primary rounded-full"><ArrowLeft /></button>
                            <p>
                                <span className="txtGradient text-[18.9px]">01</span>
                                <span className="text-[11.027px] text-paragraphColor">/06</span>
                            </p>
                            <button className="gradient w-[32px] h-[32px] center rounded-full"><ArrowRight /></button>
                        </div>

                        <div className="p-[16px] w-full h-[170px] border-[1px] border-[#5F90F0] rounded-[12px] sm:p-[24px] col-center gap-[16px]">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex flex-col items-start justify-start gap-[2px]">
                                    <h3 className="text-[20px] font-[600] text-[#130929]">Maria Sarapavoo</h3>
                                    <p className="text-[14px] text-paragraphColor">Whistleblower and privacy advocate</p>
                                </div>

                                <div className="flex gap-[8px]">
                                    <p className="text-[16] font-[600] text-headingColor">4.5</p>
                                    <RatingStart />
                                </div>

                            </div>

                            <p className="w-full text-left text-paragraphColor text-[16px] ">The team at WebWhiz consistently delivered outstanding results surpassing our expectations in</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReview;