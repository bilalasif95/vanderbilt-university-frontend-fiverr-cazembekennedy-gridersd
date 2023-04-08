import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
// import component 👇
import Drawer from 'react-modern-drawer'
import { useTranslation } from "next-i18next";
//import styles 👇
import 'react-modern-drawer/dist/index.css'

const MenuItems = [
    {
        Name: "Home",
        Route: "home"
    },
    {
        Name: "Introduction",
        Route: "intro"
    },
    {
        Name: "5 Recommendations",
        Route: "recommendations"
    },
    {
        Name: "When to Seek professional Help",
        Route: "professionalHelp"
    },
    {
        Name: "Research",
        Route: "research"
    },
]

function Navigation() {
    const Router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [Show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY < lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    });

    //translations from common.json
    const { t } = useTranslation('common');

    const onLanguageChange = (language: string) => {
        Router.replace(Router.pathname, Router.pathname, { locale: language })
    }

    return (
        <Wrapper style={`w-full md:h-[80px] h-[70px] bg-blue-main md:sticky top-0 z-[500] transition-all duration-1000 ${Show && "md:-top-[80px]"}`} >
            <div className='w-full h-full flex justify-between items-center' >
                {/* Logo */}
                <div className='md:w-[229px] w-[150px] md:h-[47px] h-[36px] relative' >
                    <Image src={"/Logo.png"} alt="" fill className='object-contain' />
                </div>
                {/* NavItems */}
                <div className='lg:flex hidden justify-center items-center xl:gap-8 lg:gap-6' >
                    {
                        MenuItems?.map((item: any, index: number) => {
                            return index === 0 ? Router.pathname === "/choices" || Router.query.slug ? <Link
                                href={"/"}
                                className={`font-Catamaran font-normal text-[16px] leading-[24px] cursor-pointer ${Router.pathname === "/choices" || Router.query.slug ? "text-blue-sky" : "text-white-main"} `}
                            >
                                {t("Home")}
                            </Link> : <ScrollLink
                                key={index}
                                className={`font-Catamaran font-normal text-[16px] leading-[24px] text-white-main cursor-pointer`}
                                to={item.Route}
                                spy={true}
                                isDynamic={true}
                            >
                                {t(item.Name)}
                            </ScrollLink> :
                                <ScrollLink
                                    key={index}
                                    className={`font-Catamaran font-normal text-[16px] leading-[24px] text-white-main cursor-pointer`}
                                    to={item.Route}
                                    spy={true}
                                    isDynamic={true}
                                >
                                    {t(item.Name)}
                                </ScrollLink>
                        })
                    }
                </div>
                <select defaultValue={Router.locale} onChange={(e) => onLanguageChange(e.target.value)}>
                    <option value="es">🇪🇸 Spanish</option>
                    <option value="ar">🇸🇦 Arabic</option>
                </select>
                {/* Hamburger */}
                <RxHamburgerMenu onClick={toggleDrawer} className='text-white-main text-[36px] lg:hidden block cursor-pointer' />
            </div>

            {/* drawer */}
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{ width: "100%" }}
            >
                <div className='w-full h-full bg-blue-main px-4' >
                    <div className='w-full md:h-[80px] h-[70px] flex justify-between items-center' >
                        {/* Logo */}
                        <div className='w-[150px] h-[36px] relative ' >
                            <Image src={"/Logo.png"} alt="" fill className='object-contain' />
                        </div>
                        {/* Cross Icon */}
                        <TfiClose onClick={toggleDrawer} className='text-white-main text-[26px] lg:hidden block cursor-pointer' />
                    </div>
                    <div className='flex justify-center items-center flex-col gap-6 mt-8' >
                        {
                            MenuItems?.map((item: any, index: number) => {
                                return index === 0 ? Router.pathname === "/choices" || Router.query.slug ? <Link
                                    onClick={toggleDrawer}
                                    href={"/"}
                                    className={`font-Catamaran font-normal text-[16px] leading-[24px] tracking-[0.2rem] text-center cursor-pointer ${Router.pathname === "/choices" || Router.query.slug ? "text-blue-sky" : "text-white-main"} `}
                                >
                                    {t("Home")}
                                </Link> : <ScrollLink
                                    onClick={toggleDrawer}
                                    key={index}
                                    className={`font-Catamaran font-normal text-[16px] leading-[24px] text-white-main tracking-[0.2rem] text-center cursor-pointer`}
                                    to={item.Route}
                                    spy={true}
                                    isDynamic={true}
                                >
                                    {t(item.Name)}
                                </ScrollLink> :
                                    <ScrollLink
                                        onClick={toggleDrawer}
                                        key={index}
                                        className={`font-Catamaran font-normal text-[16px] leading-[24px] text-white-main tracking-[0.2rem] text-center cursor-pointer`}
                                        to={item.Route}
                                        spy={true}
                                        isDynamic={true}
                                    >
                                        {t(item.Name)}
                                    </ScrollLink>
                            })
                        }
                    </div>
                </div>
            </Drawer>
        </Wrapper>
    )
}

export default Navigation;