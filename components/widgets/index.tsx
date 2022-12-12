import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faC, faCheck, faCrown, faDice, faFastForward, faFire, faGlasses, faShield, faSlash, faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core"
import { Parallax } from "react-scroll-parallax"
import CallToAction from "../CallToAction"
import { faSun } from "@fortawesome/free-regular-svg-icons"
import { SvgIcon } from "@mui/material"
import { CleaningServicesOutlined, Fireplace, Lock, Looks, LooksTwoTwoTone, RollerShadesTwoTone, SevereCold, Shield, WbShadeSharp, WbSunny } from "@mui/icons-material"

let widgets = [
    { title: 'UV Protection', desc: 'Protects you from 99% of UV Rays', widget: Shield },
    { title: 'Heat Countermeasure', desc: 'Protects your car interior the dangerous heat of the sun', widget: SevereCold },
    { title: 'More Privacy', desc: `A one way opaque film, you can see out but they can't see in`, widget: RollerShadesTwoTone },
    { title: 'Improved Security', desc: 'Increase the strength of your windows preventing shattering', widget: Lock },
    {
        title: 'Fight Fading', desc: `Protect your interior from sun damage`, widget: WbSunny
    },
    {
        title: 'Clean Looking', desc: `Tinting your car is a great style choice`, widget: CleaningServicesOutlined
    },
]

const widget = (title: string, desc: string, widget: any) => {
    return (
        <div className="flex px-4 flex-col items-center justify-center text-center font-avenir hover:scale-110 transition delay-0 md:hover:-translate-y-4 lg:hover:-translate-y-12">
            <Parallax className="w-full h-full flex flex-col items-center justify-center text-center font-avenir" translateY={[-20, 20]}>
                <div className="text-offwhite rounded-lg 2xs:p-2">
                    <SvgIcon component={widget}  className="text-light text-5xl" />
                </div>
                <div className="flex flex-col 2xs:p-3">
                    <span className="text-4xl font-bold text-light">
                        {title}
                    </span>
                    <span className="text-3xl text-light">
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
            <div className="w-screen h-fit pt-32 2xs:24 flex justify-center items-center bg-inherit">
                <div className="w-full md:w-4/5 h-1/2 flex items-center ">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-y-12 gap-y-16">
                        {widgets.map((item) => (widget(item.title, item.desc, item.widget)))}
                    </div>
                </div>
            </div >
            <CallToAction />
        </>
    )
}