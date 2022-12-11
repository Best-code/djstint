import { faArrowAltCircleDown, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import CallToAction from "../CallToAction"

export const ContentTwo = () => {
    return (
        <div className="w-screen md:h-[20vw] h-[60vw] flex justify-center bg-gradient-to-b from-gray via-white to-lightgray text-dark font-avenir pb-2">
            <div className="w-full flex items-center">
                <div className="w-full h-3/4 sm:flex ">
                    <div className="h-full w-full md:pt-12 xl:pt-0 relative">
                        <Parallax className="xl:h-[50vh] h-[40vh] w-full" translateY={[-60,30]}>
                            <Image fill={true} src={"/inserthere.png"} alt={"Hey"} />
                        </Parallax>
                    </div>
                    <div className="flex md:flex-col flex-row sm:py-10 xs:py-12 sm:w-2/3 w-full">
                        <Parallax className="h-full w-full flex items-center flex-col" translateY={[0,30]}>
                            <span className="text-5xl py-10 w-full text-center">
                                Lorem, ipsum dolor.
                            </span>
                                <div className="sm:flex px-2 w-full sm:flex-col flex flex-row justify-center items-center text-start text-2xl">
                                    <span className="w-full">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, architecto?
                                    </span>
                                    <FontAwesomeIcon className="hidden sm:block m-3 text-dark" icon={faArrowAltCircleDown} width={40} height={40} />
                                    <FontAwesomeIcon className="block sm:hidden w-1/3 text-dark" icon={faArrowAltCircleRight} width={40} height={40} />
                                    <span className="w-full">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo?
                                    </span>
                                </div>
                        </Parallax>
                    </div>
                </div>

            </div>
        </div>
    )
}