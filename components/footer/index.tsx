import Link from "next/link"

let footerClickables = [
    { title: 'FAQ', href: "/faq" },
    { title: 'About Us', href: "/about" },
    { title: 'Contact Us', href: "@mailto:cpmraygun@gmail.com" },
    { title: 'Expert Reviews', href: "/reviews" }
]

const footerClicks = (title: string, href: string) => {
    return (
        <div className="py-2">
            <Link href={href} className="underline">
                {title}
            </Link>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className="p-10 bg-gradient-to-b from-white to-lightgray text-black font-avenir">
            <div className="grid grid-cols-3 sm:mx-16 md:mx-32 lg:md-64 gap-24">
                <div className="ml-10 w-full flex flex-col justify-start">
                    {footerClickables.map((item) => (footerClicks(item.title, item.href)))}
                </div>
                <div className="flex flex-col">
                    <div className="text-3xl">
                        About Us
                    </div>
                    <div className="text-l py-2">
                    Specializing in automotive, commercial and residential tinting! Professional quality job for a friend

                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-3xl">
                        New Updates
                    </div>
                    <div className="text-l py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi dolorem alias similique! Repellendus, atque.
                    </div>
                </div>
            </div>
        </div>
    )
}