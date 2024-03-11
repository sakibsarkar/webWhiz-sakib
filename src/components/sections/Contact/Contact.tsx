import Image from "next/image";
import { CallIcon } from "@/utils/icon/CallIcon";
import { ClockIon } from "@/utils/icon/ClockIcon";
import { EmailIcon } from "@/utils/icon/EmailIcon";
import { MillIcon } from "@/utils/icon/MillIcon";

const Contact = () => {
    return (
        <section className="pt-[76px]">

            <div className="flex justify-end items-end container spacing xl:!px-[0]">
                <div className="w-full xl:w-[1290px] gap-[50px] min-h-[515px] md:gap-[50px] xl:gap-[150px] flex flex-col-reverse items-center justify-start md:justify-around md:flex-row">
                    <div className=" xl:min-h-[515px] center">
                        <div className="w-[327] sm:w-[340px] xl:w-[456px] h-fit flex flex-col items-start justify-start gap-[40px]">
                            <div className="w-full flex flex-col items-start justify-start gap-[12px]">
                                <h2 className="text-[40px] text-headingColor font-[700] leading-[140%]">Contact Us</h2>
                                <p className="verticalHigh w-[323px] text-[14px] xl:w-[452px] h-[52px] xl:text-[16px] text-paragraphColor leading-[160%]">Feel free to reach out to us at any time. We value your feedback, inquiries, and collaboration.</p>
                            </div>
                            <form className="flex flex-col items-center justify-start gap-[24px] w-full">
                                <input type="text" className="w-full h-[58px] py-[16px] px-[24px] border-b-[1px] border-[#e6e6e6]" placeholder="Name" />

                                <input type="text" className="w-full h-[58px] py-[16px] px-[24px] border-b-[1px] border-[#e6e6e6]" placeholder="Email" />

                                <input type="text" className="w-full h-[58px] py-[16px] px-[24px] border-b-[1px] border-[#e6e6e6]" placeholder="Message" />
                                <button className="btn-primary w-full py-[12px] pl-[24px] font-[500] h-[56px]">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="items-start w-[342px] xl:w-[834px] h-[398px] md:min-h-[515px] flex justify-center md:items-center xl:justify-end xl:items-end">
                        <div className="relative w-[327px] h-[267px]  xl:w-[590px] xl:h-[475px] rounded-xl flex justify-end">
                            <Image src="/images/Rectangle63.png" alt="call center" height={475} width={590} className="imgFit relative z-10" />
                            <div className="overlay absolute w-full h-full top-0 left-0 rounded-xl z-10"></div>

                            <div className="w-[261px] h-[216px] xl:w-[471px] xl:h-[288px] shadow_CNTC bg-white absolute top-[182.5px] left-[45px] rounded-[16px] flex justify-start p-[24px] xl:p-[32px] xl:top-[73.5px] xl:left-[-165px] z-20">

                                <div className="w-fit flex flex-col justify-center items-center xl:items-start xl:justify-start gap-[24px] xl:gap-[32px]">
                                    <div className="flex items-center justify-start gap-[8px]">
                                        <EmailIcon />
                                        <p className="text-paragraphColor text-[14px] xl:text-[16px]">michael.mitc@example.com</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[8px]">
                                        <CallIcon />
                                        <p className="text-paragraphColor text-[14px] xl:text-[16px]">michael.mitc@example.com</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[8px]">
                                        <MillIcon />
                                        <p className="text-paragraphColor text-[14px] xl:text-[16px]">michael.mitc@example.com</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-[8px]">
                                        <ClockIon />
                                        <p className="text-paragraphColor text-[14px] xl:text-[16px]">michael.mitc@example.com</p>
                                    </div>
                                </div>

                            </div>

                            <div className="w-[117px] h-[117px] absolute top-[-39px] rounded-[8px] left-[-40px] bg-[#185cd92a] z-0"></div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;