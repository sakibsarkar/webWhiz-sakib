import { ReactNode } from "react";

type Type = { children: ReactNode }

const LayoutWrapper: React.FC<Type> = ({ children }) => {
    return (
        <div className="w-[1140px]">
            {children}
        </div>
    );
};

export default LayoutWrapper;