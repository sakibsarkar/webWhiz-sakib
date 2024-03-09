type Type = { h?: string, w?: string }

export const Trianlge2 = ({ h = "550", w = "632" }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 632 550" fill="none">
        <path d="M0 550L632 0V550H0Z" fill="url(#paint0_linear_59_173)" fill-opacity="0.04" />
        <defs>
            <linearGradient id="paint0_linear_59_173" x1="601.32" y1="59.7826" x2="-53.1617" y2="178.023" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5F90F0" />
                <stop offset="1" stop-color="#185AD9" />
            </linearGradient>
        </defs>
    </svg>
}