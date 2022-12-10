import Image from "next/image"
import { Parallax } from "react-scroll-parallax"

export const Logo = () =>
{
    return (
        <div className="h-[20vw] md:h-[8vw] w-1/2 bg-light">
                <div className="w-full h-full relative">
                    <Image src={"/fulllogo.jpg"} alt={"logo"} fill={true} />
                    /</div>
        </div>
    )
}