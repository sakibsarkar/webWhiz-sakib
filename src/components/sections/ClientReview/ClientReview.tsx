import Image from "next/image";
import SectionHeadingV2 from "@/components/shared/SectionHeadingV2";
import { ArrowLeft } from "@/utils/icon/ArrowLeft";
import { ArrowRight } from "@/utils/icon/ArrowRight";
import { RatingStart } from "@/utils/icon/RatingStar";

const ClientReview = () => {
    return (
        <section className="xl:mt-[76px]">
            <div className="container flex items-start justify-start">
                <div className="w-full xl:w-[1290px] xl:h-[401px] flex flex-col gap-[24px] items-center md:justify-around xl:flex-row">

                    {/* left section */}
                    <div className="sm:w-full xl:w-[802px] h-full flex items-end justify-center sm:gap-[50px] md:justify-around xl:justify-between xl:gap-[32px]">
                        <div className="h-full xl:w-[464px] flex flex-col items-start justify-between sm:items-end gap-[32px]">

                            <div className="flex xl:items-end">
                                <SectionHeadingV2 heading="Client Reviews" description="The team at consistently delivered outstanding surpassing expectations" dWidth={314} />
                            </div>


                            {/* small images for md device */}
                            <div className="hidden sm:flex items-center justify-start gap-[10px] md:gap-[32px] xl:w-full xl:justify-between">

                                <div className="w-[105px] h-[110px] md:h-[230px] md:w-[200px] xl:w-[216px] xl:h-[212px]">
                                    <Image width={216} height={212} alt="client" src={"/images/Rectangle60.png"} className="imgFit" />
                                </div>

                                <div className="w-[105px] h-[110px] md:h-[230px] md:w-[200px] xl:w-[216px] xl:h-[212px]">
                                    <Image width={216} height={212} alt="client" src={"/images/Rectangle61.png"} className="imgFit" />
                                </div>
                            </div>


                        </div>

                        {/* big image */}
                        <div className=" hidden sm:inline-block h-[160px] w-[120px] md:w-[290px] md:h-[380px] xl:w-[306px] xl:h-[401px]">
                            <Image className="imgFit" alt="bigClient" width={306} height={401} src={"/images/Rectangle62.png"} />
                        </div>

                    </div>

                    {/* small images and big image for small(mobile) device */}
                    <div className="sm:hidden flex items-end gap-[10px]">
                        <div className="flex items-center justify-start gap-[10px] ">

                            <div className="w-[105px] h-[110px]">
                                <Image width={216} height={212} alt="client" src={"/images/Rectangle60.png"} className="imgFit" />
                            </div>

                            <div className="w-[105px] h-[110px]">
                                <Image width={216} height={212} alt="client" src={"/images/Rectangle61.png"} className="imgFit" />
                            </div>
                        </div>
                        <div className="h-[160px] w-[120px] md:w-[290px] md:h-[380px] xl:w-[306px] xl:h-[401px]">
                            <Image className="imgFit" alt="bigClient" width={306} height={401} src={"/images/Rectangle62.png"} />
                        </div>

                    </div>

                    {/* right section review box */}

                    <div className="w-[80%] sm:w-[70%] md:w-[80%] xl:w-[456px] h-full flex flex-col justify-end gap-[16px]">

                        <div className="flex justify-end items-center gap-[12px]">
                            <button className="w-[32px] h-[32px] center border-[1px] border-primary rounded-full"><ArrowLeft /></button>
                            <p>
                                <span className="txtGradient text-[18.9px]">01</span>
                                <span className="text-[11.027px] text-paragraphColor">/06</span>
                            </p>
                            <button className="gradient w-[32px] h-[32px] center rounded-full"><ArrowRight /></button>
                        </div>

                        <div className="p-[16px] w-full h-[170px] border-[1px] border-[#5F90F0] rounded-[12px] sm:p-[24px] flex flex-col justify-between items-center gap-[16px]">
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