import { ReactNode } from "react";

type Type = { children: ReactNode }

const LayoutWrapper: React.FC<Type> = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};

export default LayoutWrapper;