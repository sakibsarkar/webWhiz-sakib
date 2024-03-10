import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import TriangleGraphic from "@/components/shared/TriangleGraphic/TriangleGraphic";

const Portfolio = () => {
    return (
        <section className="h-[786px]  pt-[81px]">

            <div className="container relative">
                <div className="flex flex-col items-start justify-start gap-[16px]">

                    <div className="container spacing">
                        <div className="flex flex-col items-start justify-start gap-[4px]">
                            <p className="text-[#FBA017] text-[14px] font-[600] uppercase tracking-[1.68px]">portfolio</p>
                            <div className="flex items-start justify-between gap-[20px] w-full">
                                <h1 className="text-[40px] font-[700] w-[554px] leading-[140%]">Discovering digital mastery and <span className="highLight text-primary">Creative innovation</span></h1>

                                <p className="verticalHigh w-[512px] h-[78px]">In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity.</p>
                            </div>

                        </div>
                    </div>


                    <PortfolioSlider />

                </div>


                <TriangleGraphic />
            </div>
        </section>
    );
};

export default Portfolio;