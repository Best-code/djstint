import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { Parallax } from 'react-scroll-parallax'


export const ContentThree = () => {
    return (

        <div className="font-avenir w-screen h-screen flex justify-center bg-[rgb(250,250,250)]">
            <Parallax className="h-full w-full flex justify-center py-8" translateY={[-20,20]}>
                <div className="w-full flex items-center relative h-full">
                    <Image fill={true} src="/inserthere.png" alt={"sexy car"} />
                </div>
        </Parallax>
        </div>
    )
}