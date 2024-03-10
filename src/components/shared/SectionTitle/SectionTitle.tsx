type DataType = {
    title: string,
    subTitle: string,
    highLightTxt: string,
    description: string,
    subWidth: string
}

const SectionTitle: React.FC<DataType> = ({ title, subTitle, highLightTxt, description, subWidth }) => {
    return (

        <div className="flex flex-col items-start justify-start gap-[4px]">
            <p className="text-[#FBA017] text-[14px] font-[600] uppercase tracking-[1.68px]">{title}</p>
            <div className="flex items-start justify-between gap-[20px] w-full">
                <h1 className="text-[40px] font-[700] leading-[140%]" style={{ width: subWidth }}>{subTitle}<span className="highLight text-primary">{highLightTxt}</span></h1>

                <p className="verticalHigh w-[512px] h-[78px]">{description}</p>
            </div>

        </div>

    );
};

export default SectionTitle;