import Image from "next/image"
import { Parallax } from "react-scroll-parallax"

export const Logo = () => {
    return (
        
        <a href="/" className="sm:h-[14vh] md:h-[14vh] h-[16vh] w-screen md:w-1/2 bg-light">
            <div className="w-full h-full relative bg-red-900">
                <Image src={"/placeholderlogo.jpg"} alt={"logo"} fill={true} />
                /</div>
        </a>
    )
}