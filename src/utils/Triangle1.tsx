type Type = { h?: string, w?: string }
export const Trianlge1: React.FC<Type> = ({ h = "744", w = "808" }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 808 744" fill="none">
        <path d="M808 744L0 0V744H808Z" fill="url(#paint0_linear_59_805)" fill-opacity="0.04" />
        <defs>
            <linearGradient id="paint0_linear_59_805" x1="39.2233" y1="80.8696" x2="878.799" y2="224.224" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5F90F0" />
                <stop offset="1" stop-color="#185AD9" />
            </linearGradient>
        </defs>
    </svg>

}