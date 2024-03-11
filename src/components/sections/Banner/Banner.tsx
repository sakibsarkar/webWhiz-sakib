import Image from "next/image";
import badge from "../../../../public/images/badge.png";
import user from "../../../../public/images/Rectangle 54.png";
import userScreen from "../../../../public/images/RectangleScreen.png";
import { ArrowUpAngle } from "@/utils/icon/ArrowUpAngle";
import { CircleGraphic } from "@/utils/icon/CircleGraphic";
import { Ring } from "@/utils/icon/Ring";
import { UserIcon } from "@/utils/icon/User";

const Banner = () => {
    return (

        <section className="mt-[53px] mb-[76px] w-full">

            <div className="container spacing flex flex-col justify-around items-center md:!center md:flex-row gap-[94px] md:gap-[12px] lg:h-[526px]">


                <div className="flex flex-col justify-center items-center md:justify-start md:items-start  gap-[16px] ">
                    <div className="flex flex-col items-start justify-start gap-[8px] text-center md:text-left">
                        <h1 className="text-[25px] text-headingColor font-bold w-[306px] leading-[120%] sm-w-[400px] sm:text-[35px] md:text-[40px] md:w-[340px] xl:text-[65px] xl:w-[517px]">Turning </h1>

                        <h1 className="text-[25px] text-headingColor font-bold leading-[120%] w-[306px] sm-w-[400px] sm:text-[35px] md:text-[40px] md:w-[340px] xl:text-[65px] xl:w-[517px]"><span className="text-primary highLight">Imagination</span> into</h1>

                        <h1 className="text-[25px] text-headingColor font-bold w-[306px] leading-[120%] sm-w-[400px] sm:text-[35px] md:text-[40px] md:w-[340px] xl:text-[65px] xl:w-[517px]">Innovation</h1>
                    </div>

                    <p className="verticalHigh max-w-[578px] text-paragraphColor h-[78px] leading-[160%] !hidden xl:!flex ">Welcome to my digital playground, where creativity knows no bounds. I&apos;m a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities.</p>

                    <p className="verticalHigh text-paragraphColor h-[53px] leading-[160%] !flex xl:!hidden max-w-[337px] ">Welcome to my digital playground, where creativity knows no bounds passionate de...</p>



                    <div className="center w-fit gap-[12px] mt-[8px]">
                        <button className="btn-primary w-[160px] h-[46px]">Hire Me</button>
                        <button className="btn-outline w-[139px] h-[46px]">View Portfolio</button>
                    </div>
                </div>


                <div className="w-[50%] center">
                    <div className="relative left-[6px]">

                        <div className="w-[327px] h-[286px] xl:w-[358px] xl:h-[433px]">
                            <Image src={user} height={433} width={358} alt="image" className="imgFit hidden xl:inline-block" />

                            <Image src={userScreen} height={286} width={327} alt="image" className="imgFit inline xl:hidden" />
                        </div>
                        {/* author info  */}
                        <div className="shadowBox w-[201px] h-[79px] bg-white rounded-[12px] absolute top-[32px] left-[-99px] gap-[8px] hidden lg:center ">

                            <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
                                <Image alt="author" className="imgFit" width={47} height={47} src={user} />
                            </div>
                            <div>
                                <h6 className="font-[700] text-[16px]">Albert Flores</h6>
                                <p className="text-[14px] text-paragraphColor">Product Manager</p>
                            </div>
                        </div>

                        {/* total visitors */}
                        <div className="center gap-[8px] shadow w-[170px] h-[73px] absolute lg:top-[151px] md:top-[82px] lg:right-[-96px] lg:left-[unset] bg-white rounded-[12px] top-[-48px] left-[-23px]">
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
                        <div className="w-[173px] h-[79px] shadow center gap-[8px] bg-white rounded-[12px] absolute right-[4px] md:right-[-72px] bottom-[-47px] sm:right-[-21px]">
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
                    <div className="absolute w-[295px] h-[334px] xl:h-[481px] xl:w-[308px] bg-[#ff8c381a] z-[-1] rounded-[16px]">

                        <div className="absolute top-[-24px] sm:right-[-48px] z-0 right-[-10px]">
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