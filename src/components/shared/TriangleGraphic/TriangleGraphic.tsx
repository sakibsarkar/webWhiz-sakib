import { Trianlge2 } from "@/utils/Tirangle2";
import { Trianlge1 } from "@/utils/Triangle1";

const TriangleGraphic = () => {
    return (
        <div className="absolute z-[-5] w-full flex justify-between items-end bottom-0">
            <Trianlge1 />
            <Trianlge2 />

        </div>
    );
};

export default TriangleGraphic;