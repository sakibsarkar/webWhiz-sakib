import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import TriangleGraphic from "@/components/shared/TriangleGraphic/TriangleGraphic";

const Portfolio = () => {
    return (
        <section className="h-[786px]  pt-[81px]">

            <div className="container relative">
                <div className="flex flex-col items-start justify-start gap-[16px]">



                    <div className="w-full spacing">
                        <SectionTitle title="portfolio" subTitle="Discovering digital mastery and " highLightTxt="Creative innovation" description="In our portfolio section, you&apos;ll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity." subWidth="554px" />
                    </div>

                    <PortfolioSlider />

                </div>


                <TriangleGraphic />
            </div>
        </section>
    );
};

export default Portfolio;