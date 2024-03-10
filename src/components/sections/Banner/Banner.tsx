import Image from "next/image";
import badge from "../../../../public/images/badge.png";
import user from "../../../../public/images/Rectangle 54.png";
import { ArrowUpAngle } from "@/utils/icon/ArrowUpAngle";
import { CircleGraphic } from "@/utils/icon/CircleGraphic";
import { Ring } from "@/utils/icon/Ring";
import { UserIcon } from "@/utils/icon/User";

const Banner = () => {
    return (

        <section className="mt-[53px] mb-[76px] w-full">

            <div className="container spacing center gap-[12px] h-[526px]">


                <div className="flex justify-start items-start gap-[16px] flex-col">
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                        <h1 className="text-[65px] text-headingColor font-bold w-[517px] leading-[120%]">Turning </h1>

                        <h1 className="text-[65px] text-headingColor font-bold w-[517px] leading-[120%]"><span className="text-primary highLight">Imagination</span> into</h1>

                        <h1 className="text-[65px] text-headingColor font-bold w-[517px] leading-[120%]">Innovation</h1>
                    </div>

                    <p className="text-paragraphColor w-[572px] verticalHigh h-[78px] leading-[160%]">Welcome to my digital playground, where creativity knows no bounds. I&apos;m a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities.</p>

                    <div className="center w-fit gap-[12px] mt-[8px]">
                        <button className="btn-primary w-[160px] h-[46px]">Hire Me</button>
                        <button className="btn-outline w-[139px] h-[46px]">View Portfolio</button>
                    </div>
                </div>


                <div className="w-[50%] center relative">
                    <div className="relative">
                        <Image src={user} height={433} width={358} alt="image" />

                        {/* author info  */}
                        <div className="shadowBox w-[201px] h-[79px] bg-white rounded-[12px] absolute top-[32px] left-[-94px] center gap-[8px]">

                            <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
                                <Image alt="author" className="imgFit" width={47} height={47} src={user} />
                            </div>
                            <div>
                                <h6 className="font-[700] text-[16px]">Albert Flores</h6>
                                <p className="text-[14px] text-paragraphColor">Product Manager</p>
                            </div>
                        </div>

                        {/* total visitors */}
                        <div className="center gap-[8px] shadow w-[170px] h-[73px] absolute top-[152px] right-[-99px] bg-white rounded-[12px] ">
                            <div className="w-[32px] h-[32px] center bg-[#d1def7] rounded-full">
                                <UserIcon />
                            </div>

                            <div className="col-center">
                                <h6 className="text-[16px] font-[600]">15,235</h6>
                                <p className="text-[12px] text-paragraphColor">Visitors</p>
                            </div>
                            <div className="text-[#185AD9] center gap-[0px]">
                                <ArrowUpAngle />
                                <p>25%</p>

                            </div>
                        </div>


                        {/* total done project */}
                        <div className="w-[173px] h-[79px] shadow center gap-[8px] bg-white rounded-[12px] absolute right-[-77px] bottom-[-47px]">
                            <div className="bg-[#f5f0fa] center w-[47] h-[47] rounded-full p-[4px]">
                                <Image src={badge} width={39} height={39} alt="badge" />
                            </div>
                            <div className="">
                                <h2 className="text-paragraphColor text-[14px] font-[500]">
                                    Project Done
                                </h2>

                                <p className="font-[600] text-[16px] text-headingColor">4679</p>
                            </div>
                        </div>
                    </div>

                    {/* bacground graphics */}
                    <div className="absolute h-[481px] w-[308px] bg-[#ff8c381a] z-[-1] rounded-[16px]">

                        <div className="absolute top-[-24px] right-[-48px] z-0">
                            <CircleGraphic />
                        </div>

                        <div className="absolute bottom-[-11px]">
                            <Ring />
                        </div>
                    </div>



                </div>
            </div>
        </section>

    );
};

export default Banner;