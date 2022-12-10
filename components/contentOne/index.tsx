import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import BasicSpeedDial from "../SpeedDial"

export const ContentOne = () => {
    return (
        <>
            <div className="w-screen md:h-[40vw] h-[80vh] flex flex-col md:flex-row justify-center bg-gradient-to-b from-black via-dark to-gray font-avenir">
                <div className="w-3/4 h-full">
                    <div className="w-full md:h-3/4 h-full flex md:flex-row flex-col">
                        <Parallax className="h-full w-full" speed={3}>
                            <div className="flex flex-col px-8 pt-16 lg:w-2/3 w-full">
                                <span className="text-5xl py-20 sm:w-2/3 w-full bg-gradient-to-b invert bg-clip-text text-transparent">
                                    Your Car. Cooler.
                                </span>
                        <Parallax className="h-full w-full" speed={1}>
                                    <span className="text-2xl text-white">
                                        Pimp your ride with some tint wrap on them windows
                                    </span>
                        </Parallax>
                            </div>
                        </Parallax>
                        <div className="h-full w-screen xs:w-full relative">
                        <Parallax className="hidden 2xs:block h-full w-full" speed={-10}>
                                <Image  src={"/carthree.png"} fill sizes="50vw" alt={"Corvette Tinted"} />
                        </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}