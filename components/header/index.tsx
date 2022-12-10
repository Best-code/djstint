/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAtom, faFlask } from '@fortawesome/free-solid-svg-icons'
// import { signIn, signOut, useSession } from "next-auth/react"
// import Link from 'next/link'
// import Waves from "../waves"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faCarOn, faHouse, faInfo, faMailForward, faNewspaper, faPaperclip, faStar } from "@fortawesome/free-solid-svg-icons"
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core"
import { Rating, Tooltip } from '@mui/material'

import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { Logo } from '../Logo'
import BasicSpeedDial from '../SpeedDial'

let navigation = [
    { name: 'Home', href: '/', widget: faHouse },
    { name: 'About', href: '/about', widget: faInfo },
    { name: 'Reviews', href: '/reviews', widget: faStar },
    { name: 'Contact', href: 'mailto:cpmraygun@gmail.com', widget: faMailForward },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Header = () => {
    return (
            <div className="h-full w-full bg-light font-avenir">
                <div className="flex w-full h-full">
                    <div className="w-full h-full flex items-center pr-64 text-4xl">
                        <Logo/>
                        <div className="flex items-center mx-10 text-dark">
                            <Rating name="read-only" value={5} readOnly />
                        </div>

                    </div>

                    <Disclosure as="nav" className="hidden w-2/5 xl:flex items-center justify-center">
                        <div className="grid grid-cols-5 gap-x-8">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className='text-dark text-center hover:text-black block px-3 py-2 rounded-md text-base font-medium'
                                    aria-current={'page'}
                                >
                                    <Tooltip title={item.name}>
                                        <FontAwesomeIcon className="hidden sm:block w-full h-full" icon={item.widget} width={60} height={60} />
                                    </Tooltip>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure >
                </div>
            </div >
    )
}

export default Header;