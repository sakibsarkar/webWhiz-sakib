type DataType = {
    w?: string,
    h?: string,

}

const VerticalLine: React.FC<DataType> = ({ w, h }) => {
    return (
        <div className="bg-[#E2F4EA]" style={{ width: w || "2px", height: h || "60px" }}>

        </div>
    );
};

export default VerticalLine;