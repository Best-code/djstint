/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Rating, SvgIcon, Tooltip } from '@mui/material'

import { Logo } from '../Logo'
import BasicSpeedDial from '../SpeedDial'
import Link from 'next/link'
import { Collections, House, Info, Mail, PictureInPicture, Star } from '@mui/icons-material'
import { mailto } from '../MailTo'

let navigation = [
    { name: 'Home', href: '/', widget: House },
    { name: 'About', href: '/about', widget: Info },
    { name: 'Gallery', href: '/gallery', widget: Collections },
    { name: 'Reviews', href: '/reviews', widget: Star },
    { name: 'Contact', href: mailto, widget: Mail },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Header = () => {
    return (
        <div className="h-full w-full bg-light font-avenir">
            <div className="flex w-full h-full">
                <div className="w-full h-full flex items-center text-4xl">
                    <Link href="/" className="w-full h-full">
                        <Logo />
                    </Link>
                    <div className="hidden md:flex justify-center w-full items-center text-dark">
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                    <BasicSpeedDial />
                </div>

                <Disclosure as="nav" className="hidden w-2/5 px-4 lg:flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-x-8">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}

                                className='text-dark hover:scale-125 hover:-translate-y-2 transition text-center hover:text-black block py-2 rounded-md text-base font-medium'
                                aria-current={'page'}
                            >
                                <Link href={item.href}>
                                    <Tooltip title={item.name}>
                                        <SvgIcon component={item.widget} className="w-[1.75em] h-[1.75em]" />
                                    </Tooltip>
                                </Link>
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure >
            </div>
        </div >
    )
}

export default Header;