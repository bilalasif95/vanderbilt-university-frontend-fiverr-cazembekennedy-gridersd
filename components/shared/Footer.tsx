import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { Link } from 'react-scroll'


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

const SocialLinksForFooter = [
    {
        icon: "/instagram.png",
        name: "instagram",
        link: ""
    },
    {
        icon: "/facebook.png",
        name: "facebook",
        link: ""
    },
    {
        icon: "/linkedin.png",
        name: "linkedIn",
        link: ""
    }
]


function Footer() {
    return (
        <Wrapper style='w-full py-16 bg-[url("/Footer.png")] bg-cover bg-no-repeat bg-center relative' >
            <div className='w-full h-full grid md:grid-cols-4 gap-6' >
                <div className='w-full flex justify-center items-start flex-col gap-3 md:col-span-2' >
                    {/* Logo */}
                    <div className='md:w-[229px] w-[150px] md:h-[47px] h-[36px] relative' >
                        <Image src={"/Logo.png"} alt="" fill className='object-contain' />
                    </div>
                    <p className='font-Catamaran font-[300] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main mt-8' >
                        Copyright © 2023 Vanderbilt University Medical Center.<br />
                        All Rights Reserved.
                    </p>
                    <a href="" className='font-Catamaran font-[300] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main' >
                        Terms and Conditions
                    </a>
                    <a href="" className='font-Catamaran font-[300] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main' >
                        Privacy Policy
                    </a>
                </div>
                <div className='w-full flex justify-start items-start flex-col gap-3 border-t-[1px] border-t-orange-50 border-b-[1px] border-b-orange-50 md:py-0 md:border-none py-4' >
                    <p className='font-Catamaran font-[500] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main' >
                        Quick Links
                    </p>
                    {
                        MenuItems?.map((item: any, index: number) => {
                            return <Link
                                key={index}
                                className={`font-Catamaran font-[300] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main cursor-pointer`}
                                to={item.Route}
                            >
                                {item.Name}
                            </Link>
                        })
                    }
                </div>
                <div className='w-full flex justify-start items-start flex-col gap-3' >
                    <p className='font-Catamaran font-[500] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main' >
                        Contact Us
                    </p>
                    <p className='font-Catamaran font-[300] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main' >
                        1211 Medical Center Drive<br />
                        Nashville, TN 37232<br />
                        (615) 322-5000
                    </p>
                    <p className='font-Catamaran font-[500] sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] text-start text-white-main mt-2' >
                        Follow Us
                    </p>
                    <div className='flex justify-center items-center gap-2' >
                        {
                            SocialLinksForFooter?.map((item: any, index: number) => {
                                return <a target={'_blank'} key={index} href={item.link}>
                                    <Image src={item.icon} alt={item.name} width={22.33} height={22.33} className='object-contain' />
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer