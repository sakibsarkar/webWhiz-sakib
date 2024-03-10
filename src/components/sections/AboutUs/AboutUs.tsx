import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import VerticalLine from "@/utils/VerticalLine";
import { progressData } from "@/utils/mock/progressData";

const AboutUs = () => {
    return (
        <section className="pb-[37px]">
            <div className="container spacing mt-[76px] flex flex-col items-start justify-start gap-[48px]">
                <div className="w-full">
                    <SectionTitle title="About us" subTitle="We are turning products into " highLightTxt="Timeless elegance" description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity." subWidth="554px" />
                </div>

                <div className="w-full flex items-start justify-between">

                    <div className="max-w-[548px] h-[348px] p-[50px] center col-center gap-[16px] bg-[#f6f9fe] rounded-[12px] flex-1">
                        {
                            progressData.map(data => <div key={data.id} className="w-full flex flex-col items-start justify-start gap-[4.5px]">

                                <h4 className="font-[600] text-[16px]">{data.skill}</h4>

                                <div className="flex justify-between items-center w-full gap-[12px]">

                                    <div className="w-full h-[10px] relative bg-[#e4ecfb] rounded-full overflow-hidden">
                                        <div className={`absolute h-full gradient left-0 top-0 rounded-full`} style={{ width: data.progress + "%" }}></div>
                                    </div>

                                    <p className="text-[14px] text-paragraphColor">{data.progress}%</p>
                                </div>

                            </div>)
                        }
                    </div>


                    <div className="h-[383px] flex items-start justify-start relative">
                        <Image alt="about us" width={553} height={311} src={"/images/image129.png"} className="rounded-xl" />

                        <div className="absolute w-[531px] h-[124px] p-[32px 28px] gradient flex items-center justify-center text-white gap-[32px] rounded-[12px] bottom-0 right-[-51px]">

                            <div className="text-center">
                                <h3 className="text-[24px] font-[700]">58+</h3>
                                <p className="text-[16px] text-[#ffffffcc]">Project Delivery</p>
                            </div>

                            <VerticalLine />

                            <div className="text-center">
                                <h3 className="text-[24px] font-[700]">120+</h3>
                                <p className="text-[16px] text-[#ffffffcc]">Happy Clients</p>
                            </div>

                            <VerticalLine />

                            <div className="text-center">
                                <h3 className="text-[24px] font-[700]">32+</h3>
                                <p className="text-[16px] text-[#ffffffcc]">Yours Experience</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutUs;