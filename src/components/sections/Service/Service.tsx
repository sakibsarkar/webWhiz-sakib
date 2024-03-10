import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import TriangleGraphic from "../../shared/TriangleGraphic/TriangleGraphic";
import { serviceData } from "@/utils/mock/serviceData";

const Service = () => {
    return (
        <section className="bg-[#f6f9fe]">
            <div className="container relative h-[992px] py-[80px]">


                <div className="spacing flex flex-col gap-[40px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                        <p className="text-[#FBA017] text-[14px] font-[600] uppercase tracking-[1.68px]">Services</p>
                        <div className="flex items-start justify-between gap-[20px] w-full">
                            <h1 className="text-[40px] font-[700] leading-[140%] w-[516px]">Our <span className="highLight text-primary">satisfied customers</span>share their stories</h1>

                            <p className="verticalHigh w-[512px] h-[78px]">In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.</p>
                        </div>

                    </div>

                    <div className="service-grid">



                        {
                            serviceData.map(({ id, description, title, Icon }) => <div key={id} className="w-[554px] h-[311px] p-[32px] flex items-start justify-start gap-[16px] flex-col bg-white rounded-[32px] relative z-10 border-[1px] border-[transparent] hover:border-primary">

                                <div className="w-[80px] h-[80px] center bg-[#e8effb] rounded-[16px]">
                                    <Icon />
                                </div>

                                <div className="flex items-start justify-start flex-col gap-[8px]">
                                    <h1 className="text-[28px] font-[700] text-headingColor">{title}</h1>
                                    <p className="text-[16px] text-paragraphColor max-w-[490px] leading-[160%]">{description}</p>
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