"use client";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { useState } from "react";
import { ArrowLeft } from "@/utils/icon/ArrowLeft";
import { ArrowRight } from "@/utils/icon/ArrowRight";
import { ArrowUpAngleBold } from "@/utils/icon/ArrowUpAngelBold";
import { portfolio } from "@/utils/mock/porfolioMockData";

interface DataType {
    id: string,
    image: any,
    title: string,
    description: string,
    type: string
}

const PortfolioSlider = () => {
    const [selected, setSelected] = useState<String>("All Project")
    const [data, setData] = useState<DataType[]>(portfolio)

    const tabs: string[] = ["All Project", "UI/UX Design", "Graphic Design", "Developments"]

    const handleChangeData = (projectType: string) => {
        if (projectType === selected) return "";

        const slider = document.getElementById("slider")
        const width = slider?.clientWidth

        if (slider && width) {
            slider.scrollLeft = 0
        }

        if (projectType === "All Project") {
            setData(portfolio)
            return setSelected(projectType)
        }

        const filterData = [...portfolio].filter(item => item.type === projectType)
        console.log(filterData);
        setData(filterData)
        setSelected(projectType)


    }

    const nextSlide = () => {
        const slider = document.getElementById("slider")
        const width = slider?.clientWidth
        if (slider && width) {
            slider.scrollLeft = slider.scrollLeft + width
        }
    }
    const prevSlide = () => {
        const slider = document.getElementById("slider")
        const width = slider?.clientWidth
        if (slider && width) {
            slider.scrollLeft = slider.scrollLeft - width
        }
    }

    return (
        <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col items-start justify-start gap-[40px]">
                <div className="flex items-center justify-start gap-[24px] w-[1165px] mx-auto">
                    {
                        tabs.map((tab, i) => <button
                            key={i}
                            onClick={() => handleChangeData(tab)}
                            className={`text-[16px] font-[500] px-[12px] py-[8px]
                    ${selected == tab ? "activeTab" : ""}
                    `}
                        >{tab}</button>)
                    }
                </div>

                <div className="flex items-center justify-start gap-[24px] overflow-auto box-content slider" id="slider">
                    {
                        data.map((item) => <div key={item.id} className="relative min-w-[554px] w-[554px] h-[390px] rounded-2xl overflow-hidden group cursor-pointer">

                            <Image alt="project" width={554} height={390} className="imgFit" src={item.image} />

                            <div className="absolute w-full h-full bg-[#050d1d99] top-[100%] bg-center flex justify-center items-end group-hover:top-0 duration-[0.3s]">

                                <div className="w-[506px] h-[88px] p-[16px] bg-white rounded-[16px] relative bottom-[24px] flex justify-between items-center">
                                    <div>
                                        <h3 className="text-[#130929] text-[20px] font-[700]">{item.title}</h3>
                                        <p className="text-[14px] text-paragraphColor">{item.description}</p>
                                    </div>

                                    <div className="w-[56px] h-[56px] gradient rounded-[12px] center">
                                        <ArrowUpAngleBold />
                                    </div>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
            </div>

            <LayoutWrapper>
                <div className="flex justify-end items-center gap-[12px]">
                    <button onClick={prevSlide} className="w-[32px] h-[32px] center border-[1px] border-primary rounded-full"><ArrowLeft /></button>
                    <p>
                        <span className="txtGradient text-[18.9px]">01</span>
                        <span className="text-[11.027px] text-paragraphColor">/06</span>
                    </p>
                    <button onClick={nextSlide} className="gradient w-[32px] h-[32px] center rounded-full"><ArrowRight /></button>
                </div>
            </LayoutWrapper>
        </div>
    );
};

export default PortfolioSlider;