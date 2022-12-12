import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import BasicSpeedDial from "../SpeedDial"

export const ContentOne = () => {
    return (
        <>
            <div className="w-screen md:h-[40vw] h-[80vh] flex flex-col md:flex-row justify-center bg-inherit font-avenir sm:px-12 md:px-24">
                <div className="w-full h-full">
                    <div className="w-full h-full flex md:flex-row flex-col">
                        <Parallax className="h-full w-full" speed={3}>
                            <div className="flex flex-col px-8 pt-16 lg:w-2/3 w-full">
                                <span className="text-5xl py-4 sm:py-10 md:py-20 sm:w-2/3 w-full bg-gradient-to-b invert bg-clip-text text-transparent">
                                    Your Car. Cooler.
                                </span>
                        <Parallax className="h-full w-2/3" speed={1}>
                                    {/* <span className="text-2xl text-white"> */}
                                <span className="text-2xl py-4 sm:py-10 md:py-20 sm:w-2/3 w-full bg-gradient-to-b invert bg-clip-text text-transparent">
                                        Upgrade your ride with some UV tint wrap on the windows
                                    </span>
                        </Parallax>
                            </div>
                        </Parallax>
                        <div className="hidden 2xs:flex w-screen scale-x-[-1] xs:w-full pt-32 xl:pt-0 relative">
                        <Parallax className="flex items-center h-[40vh] lg:h-[60vh] w-full max-w-xl md:max-w-4xl" speed={-10}>
                                <Image  src={"/stang.png"} className="" fill sizes="100vw" alt={"Corvette Tinted"} />
                        </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}