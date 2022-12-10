import { faArrowAltCircleDown, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import CallToAction from "../CallToAction"

export const ContentTwo = () => {
    return (
        <div className="w-screen lg:h-[60vw] flex justify-center bg-gradient-to-b from-gray via-white to-lightgray text-dark font-avenir pb-2">
            <div className="w-full flex items-center">
                <div className="w-full h-3/4 sm:flex ">
                    <div className="h-full w-full relative">
                        <Parallax className="h-full w-full" translateY={[-30,35]}>
                            <Image fill={true} src={"/Car.png"} alt={"Hey"} />
                        </Parallax>
                    </div>
                    <div className="flex md:flex-col flex-row px-8 py-16 sm:w-2/3 w-full">
                        <Parallax className="h-full w-full" translateY={[0,30]}>
                            <span className="text-5xl py-10 w-fulltext-center">
                                How It Works
                            </span>
                                <div className="sm:flex sm:w-full sm:flex-col justify-center items-center text-start text-2xl">
                                    <span className="w-full">
                                        polyester film with a scratch-resistant coating
                                    </span>
                                    <FontAwesomeIcon className="block lg:hidden w-full my-2 text-dark" icon={faArrowAltCircleDown} width={40} height={40} />
                                    <FontAwesomeIcon className="hidden lg:block w-full text-dark" icon={faArrowAltCircleRight} width={40} height={40} />
                                    <span className="w-full">
                                        allow some types of light rays to pass through while absorbing or reflecting others.
                                    </span>
                                </div>
                        </Parallax>
                    </div>
                </div>

            </div>
        </div>
    )
}