import Link from "next/link";

type LinkType = {
    id: string;
    txt: string;
    href: string
};

type DataType = {
    heading: string, links: LinkType[]
}

const FooterLinkBox: React.FC<DataType> = ({ heading, links }) => {
    return (
        <div className="flex flex-col items-start justify-start gap-[16px]">
            <h3 className="underlineBg text-[20px] font-[600]">{heading}</h3>

            <div className="flex flex-col items-start justify-start gap-[12px]">
                {
                    links.map(link => <Link
                        key={link.id}
                        href={link.href}
                        className="text-[#949498] text-[16px] leading-[160%]"
                    >
                        {link.txt}
                    </Link>)
                }
            </div>

        </div>
    );
};

export default FooterLinkBox;