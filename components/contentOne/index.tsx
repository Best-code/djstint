import Image from "next/image"
import { Parallax } from "react-scroll-parallax"

export const ContentOne = () => {
    return (
        <div className="w-screen sm:h-[40vw] h-screen flex flex-col sm:flex-row justify-center bg-gradient-to-b from-black via-dark to-gray font-avenir">
            <div className="w-3/4">
                <div className="w-full sm:h-3/4 h-full flex">
                    <Parallax className="h-full w-full" speed={20}>
                        <div className="flex flex-row sm:flex-col px-8 py-16 w-2/3">
                            <span className="text-5xl py-20 w-1/2 text-white">
                                Your Car. Cooler.
                            </span>
                            <div className="grid grid-rows-2 gap-y-4">
                                <span className="text-2xl text-white">
                                    Pimp your ride with some tint wrap on them windows
                                </span>
                            </div>
                        </div>
                    </Parallax>
                    <div className="h-full w-full relative">
                        <Image fill={true} src={"/carthree.png"} alt={"Hey"} />
                    </div>
                </div>
            </div>
        </div>
    )
}