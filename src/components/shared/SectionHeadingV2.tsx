type DataType = {
    heading: string,
    description: string,
    dWidth: Number
}

const SectionHeadingV2: React.FC<DataType> = ({ heading, description, dWidth }) => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-[12px]">
            <h2 className="text-[40px] text-headingColor font-[700] leading-[140%]">{heading}</h2>
            {
                dWidth ?
                    <p className="verticalHigh w-[323px] text-[14px]  h-[52px] xl:text-[16px] text-paragraphColor leading-[160%]" style={{ width: dWidth + "px" }}>{description}</p>
                    :
                    <p className="verticalHigh w-[323px] text-[14px] xl:w-[452px] h-[52px] xl:text-[16px] text-paragraphColor leading-[160%]">{description}</p>
            }
        </div>
    );
};

export default SectionHeadingV2;