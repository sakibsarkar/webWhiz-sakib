import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import TriangleGraphic from "../../shared/TriangleGraphic/TriangleGraphic";
import { ArrowUpAngleBold } from "@/utils/icon/ArrowUpAngelBold";
import { serviceData } from "@/utils/mock/serviceData";

const Service = () => {
    return (
        <section className="bg-[#f6f9fe]">
            <div className="container relative min-h-[992px] py-[80px]">


                <div className="spacing flex flex-col gap-[40px]">
                    <div className="flex flex-col items-center justify-center mt-[42px] md:items-start md:justify-start gap-[4px] md:mt-[0px]">
                        <p className="text-[#FBA017] text-[14px] font-[600] uppercase tracking-[1.68px]">Services</p>
                        <div className="flex flex-col items-center justify-center gap-[10px] w-full md:flex-row md:items-start md:justify-between">
                            <h1 className="text-[24px] text-center sm:text-[28px] w-[330px] lg:text-[40px] font-[700] leading-[140%] lg:w-[554px] lg:text-left">Our <span className="highLight text-primary">satisfied customers</span>share their stories</h1>

                            <p className="!hidden verticalHigh w-[512px] h-[78px] lg:!flex">In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.</p>

                            <p className="verticalHigh max-w-[340px] h-[54px] lg:hidden">In our portfolio section, you&apos;ll embark on a visual journey through a meticulously cura...</p>
                        </div>

                    </div>

                    <div className="service-grid">



                        {
                            serviceData.map(({ id, description, title, Icon }) => <div key={id} className="w-full h-[311px] p-[32px] flex items-start justify-start gap-[16px] flex-col bg-white rounded-[32px] relative z-10 border-[1px] border-[transparent] hover:border-primary">
                                <div className="gradient p-[12px] rounded-full absolute right-[32px] top-[32px]">
                                    <ArrowUpAngleBold />
                                </div>
                                <div className="w-[80px] h-[80px] center bg-[#e8effb] rounded-[16px]">
                                    <Icon />
                                </div>

                                <div className="flex items-start justify-start flex-col gap-[8px]">
                                    <h1 className="text-[28px] font-[700] text-headingColor">{title}</h1>
                                    <p className="text-[16px] text-paragraphColor max-w-[490px] leading-[160%] h-[78px] overflow-hidden lg:h-auto">{description}</p>
                                </div>

                            </div>
                            )
                        }
                    </div>
                </div>


                <TriangleGraphic />
            </div>
        </section>
    );
};

export default Service;