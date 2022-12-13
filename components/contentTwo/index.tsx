import { faArrowAltCircleDown, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"

export const ContentTwo = () => {
    return (
        <div className="w-screen h-fit flex justify-center bg-inherit text-light font-avenir sm:py-24">
            <div className="w-full flex items-center">
                <div className="w-full md:flex xl:flex-row flex-col items-center">
                    <div className="w-full h-[40vh] pt-24 sm:pt-32 md:py-64  lg:py-96 xl:pt-0 relative">
                        <Parallax className="h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[60vh] lg:h-[70vh] max-w-3xl px-2 lg:max-5xl overflow-hidden" translateY={[-60, 10]}>
                            <Image fill={true} src={"/coupe.png"} className="rotate-[25deg]" alt={"Tinted Bmw Coupe"} />
                        </Parallax>
                    </div>
                    <div className="flex md:flex-col flex-row md:w-2/3 w-full pt-16 sm:pt-32 md:pt-16 lg:pt-0">
                        <Parallax className=" w-full flex items-center flex-col" speed={2}>
                            {/* <span className="text-5xl w-full text-center  text-light"> */}
                            <span className="text-5xl text-center w-full bg-gradient-to-b invert py-6 bg-clip-text text-transparent">
                                How It Works
                            </span>
                            <div className="sm:flex px-12  w-full md:flex-col flex flex-row justify-center items-center text-start text-xl">
                                {/* <span className="w-full text-light md:text-center"> */}
                                <span className="text-xl md:text-center w-full bg-gradient-to-b invert py-6 bg-clip-text text-transparent">
                                    polyester film with a scratch-resistant coating
                                </span>
                                <FontAwesomeIcon className="hidden md:block m-3 text-light" icon={faArrowAltCircleDown} width={40} height={40} />
                                <FontAwesomeIcon className="block md:hidden w-1/3 text-light" icon={faArrowAltCircleRight} width={40} height={40} />
                                {/* <span className="w-full text-light md:text-center"> */}
                                <span className="text-xl md:text-center w-full bg-gradient-to-b invert py-6 bg-clip-text text-transparent">
                                    allow some light rays to pass through while absorbing or reflecting others.
                                </span>
                            </div>
                        </Parallax>
                    </div>
                </div>

            </div>
        </div>
    )
}