import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import BasicSpeedDial from "../SpeedDial"

export const ContentOne = () => {
    return (
        <>
            <div className="w-screen flex flex-col sm:flex-row justify-center bg-gradient-to-b from-black via-dark to-gray font-avenir">
                <div className="w-full lg:w-3/4">
                    <div className="w-full md:h-3/4 h-full flex flex-col md:flex-row lg:flex-row">
                        <Parallax className="h-full w-full" speed={20}>
                            <div className="flex flex-col px-8 py-16 lg:w-2/3 w-full">
                                <span className="text-5xl py-20 w-1/2 text-white ">
                                    Your Car. Cooler.
                                </span>
                                <div className="">
                                    <span className="text-2xl text-white">
                                        Pimp your ride with some tint wrap on them windows
                                    </span>
                                </div>
                            </div>
                        </Parallax>
                        <div className="h-full w-full relative md: mt-4">
                            <img className="lg:absolute md:block hidden" src={"/carthree.png"} alt={"Hey"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}