import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faC, faCheck, faCrown, faDice, faFastForward, faShield, faSlash } from "@fortawesome/free-solid-svg-icons"
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core"
import { Parallax } from "react-scroll-parallax"
import CallToAction from "../CallToAction"

let widgets = [
    { title: 'Heat Protection', desc: 'Protects you from the dangerous heat of the sun', widget: faCheck },
    { title: 'UV Protection', desc: 'Protects you from the dangerous UV Rays of the sun', widget: faShield },
    { title: 'Cooler Looking', desc: 'Protects you from the dangers of getting no bitches', widget: faDice },
    { title: 'More Bitches', desc: 'Protects you from the dangers of getting no bitches', widget: faCrown },
    {
        title: 'Faster Downhill', desc: `Due to the added weight of all the bitches in the car,
                                        itll roll faster down hill`, widget: faFastForward
    },
    {
        title: 'Slower Uphill', desc: `Due to the added weight of all the bitches in the car, 
                                            itll be just slow enough for everyone to notice 
                                            all your bitches`, widget: faSlash
    },
]

const widget = (title: string, desc: string, icon: IconProp) => {
    return (
        <div className="flex flex-col items-center justify-center text-center font-avenir">
            <Parallax className="w-full h-full py-7 flex flex-col items-center justify-center text-center font-avenir" translateY={[-20, 20]}>
                <div className="text-offwhite border-2 rounded-lg p-2 border-light">
                    <FontAwesomeIcon icon={icon} width={50} height={50} className="text-dark" />
                </div>
                <div className="flex flex-col p-3 mx-5 md:mx-0 ">
                    <span className="text-4xl font-bold">
                        {title}
                    </span>
                    <span className="text-2xl text-start">
                        {desc}
                    </span>
                </div>
            </Parallax>
        </div>
    )
}

export const Widgets = () => {

    return (
        <>
            <div className="w-screen pt-[24em] md:pt-36 lg:pt-10  flex justify-center items-center bg-gradient-to-b from-lightgray to-gray">
                <div className="w-full md:w-3/4 h-1/2 flex items-center ">
                    <div className="md:grid md:grid-cols-3 grid-cols- md:gap-y-12 gap-y-8">
                        {widgets.map((item) => (widget(item.title, item.desc, item.widget)))}
                    </div>
                </div>
            </div >
            <CallToAction />
        </>
    )
}