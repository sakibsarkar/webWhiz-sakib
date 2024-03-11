type DataType = {
    title: string,
    subTitle: string,
    highLightTxt: string,
    description: string,
    subWidth: string
}

const SectionTitle: React.FC<DataType> = ({ title, subTitle, highLightTxt, description, subWidth }) => {
    return (

        <div className="flex flex-col items-center justify-center mt-[42px] md:items-start md:justify-start gap-[4px] md:mt-[0px]">
            <p className="text-[#FBA017] text-[14px] font-[600] uppercase tracking-[1.68px]">{title}</p>
            <div className="flex flex-col items-center justify-center gap-[10px] w-full md:flex-row md:items-start md:justify-between">
                <h1 className="text-[24px] sm:text-[28px] w-[330px] lg:text-[40px] font-[700] leading-[140%] lg:w-[554px]">{subTitle}<span className="highLight text-primary">{highLightTxt}</span></h1>

                <p className="!hidden verticalHigh w-[512px] h-[78px] lg:!flex">{description}</p>

                <p className="verticalHigh max-w-[340px] h-[54px] lg:hidden">In our portfolio section, you&apos;ll embark on a visual journey through a meticulously cura...</p>
            </div>

        </div>

    );
};

export default SectionTitle;