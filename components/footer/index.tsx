import Link from "next/link"
import { mailto } from "../MailTo"
import WebTechCD from "../WebTechCD"

let footerClickables = [
    { title: 'Home', href: "/" },
    { title: 'About Us', href: "/about" },
    { title: 'Contact Us', href: mailto },
    { title: 'Expert Reviews', href: "/reviews" }
]

const footerClicks = (title: string, href: string) => {
    return (
        <div className="p-2">
            <Link href={href} className="underline">
                {title}
            </Link>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="sm:p-10 p-12 bg-gradient-to-b from-white to-lightgray text-black font-avenir">
            <div className="grid grid-cols-2 sm:mx-16 md:mx-32 lg:md-64 xs:gap-6 sm:gap-24 items-center ">
                <div className=" w-full flex flex-col xl:flex-row flex-wrap justify-start">
                    {footerClickables.map((item) => (footerClicks(item.title, item.href)))}
                    <div className="w-full py-2 flex flex-col md:items-center md:flex-row font-black">
                        Created By
                        <div className="md:pl-8 hover:scale-125 transition duration-300">
                            <WebTechCD />
                        </div>
                    </div>
                </div>
                <div className="ml-8 md:ml-0 flex flex-col">
                    <div className="text-3xl">
                        About Us
                    </div>
                    <div className="text-md py-2">
                        Specializing in automotive, commercial and residential tinting! Professional quality job for a friend
                    </div>
                </div>
            </div>
        </div>
    )
}