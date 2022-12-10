import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import CallToAction from "../CallToAction"

export const ContentTwo = () => {
    return (
        <div className="w-screen h-[40vw] flex justify-center bg-gradient-to-b from-gray via-white to-lightgray text-dark font-avenir">
            <div className="w-3/4 flex items-center">
                <div className="w-full h-3/4 flex">
                    <div className="h-full w-full relative">
                        <Parallax className="h-full w-full" translateY={[-30,35]}>
                            <Image fill={true} src={"/Car.png"} alt={"Hey"} />
                        </Parallax>
                    </div>
                    <div className="flex flex-col px-8 py-16 w-2/3">
                        <Parallax className="h-full w-full" translateY={[0,30]}>
                            <span className="text-5xl py-10 w-1/2">
                                How It Works
                            </span>
                            <div className="grid grid-rows-2 gap-y-4">

                                <div className="flex flex-col justify-center items-center text-center text-2xl">
                                    <span>
                                        polyester film with a scratch-resistant coating
                                    </span>
                                    <FontAwesomeIcon className="m-3 text-dark" icon={faArrowAltCircleDown} width={40} height={40} />
                                    <span>
                                        allow some types of light rays to pass through while absorbing or reflecting others.
                                    </span>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>

            </div>
        </div>
    )
}