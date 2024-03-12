import { Trianlge2 } from "@/utils/Tirangle2";
import { Trianlge1 } from "@/utils/Triangle1";

const TriangleGraphic = () => {
    return (
        <div className="absolute z-[0] w-full flex justify-between items-end bottom-0 overflow-x-hidden">
            <Trianlge1 />
            <Trianlge2 />

        </div>
    );
};

export default TriangleGraphic;