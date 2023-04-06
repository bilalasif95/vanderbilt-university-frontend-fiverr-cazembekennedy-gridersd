import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';

const ChoicesContent = [
    {
        id: 1,
        Name: "Redirect toward a positive behavior",
        img: "/choices/1.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 2,
        Name: "Spank your child",
        img: "/choices/2.png",
        option: {
            state: false,
            icon: "/great.png"
        },
    },
    {
        id: 3,
        Name: "Take away a priviledge",
        img: "/choices/3.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
    {
        id: 4,
        Name: "Ignore the behavior",
        img: "/choices/4.png",
        option: {
            state: false,
            icon: "/great.png"
        },
    },
    {
        id: 5,
        Name: "Later, do a play role",
        img: "/choices/5.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
    {
        id: 6,
        Name: "Ask how the other child feels",
        img: "/choices/6.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 7,
        Name: "Discuss why hitting is wrong",
        img: "/choices/7.png",
        option: {
            state: false,
            icon: "/great.png"
        },
    },
    {
        id: 8,
        Name: "Give a warning",
        img: "/choices/8.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
    {
        id: 9,
        Name: "Later, encourage physical activity",
        img: "/choices/9.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 10,
        Name: "Set future expectations",
        img: "/choices/10.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
    {
        id: 11,
        Name: "Later, give praises",
        img: "/choices/11.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 12,
        Name: "Set the rule",
        img: "/choices/12.png",
        option: {
            state: false,
            icon: "/great.png"
        },
    },
    {
        id: 13,
        Name: "Time-Out",
        img: "/choices/13.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
    {
        id: 14,
        Name: "Ask about your child's feelings",
        img: "/choices/14.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 15,
        Name: "Say 'No'",
        img: "/choices/15.png",
        option: {
            state: false,
            icon: "/great.png"
        },
    },
    {
        id: 16,
        Name: "Leave the area",
        img: "/choices/16.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 17,
        Name: "Speak angrily",
        img: "/choices/17.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
    {
        id: 18,
        Name: "Change your daily schedule",
        img: "/choices/18.png",
        option: {
            state: false,
            icon: "/good.png"
        },
    },
    {
        id: 19,
        Name: "Tell him he is a bad boy",
        img: "/choices/19.png",
        option: {
            state: false,
            icon: "/great.png"
        },
    },
    {
        id: 20,
        Name: "Redirect with a question",
        img: "/choices/20.png",
        option: {
            state: false,
            icon: "/not.png"
        },
    },
]

function Hero() {
    React.useEffect(() => {
        const Choices = JSON.parse(localStorage.getItem("Choices") || "[]");
        if (!Choices || Choices?.length === 0) { localStorage.setItem("Choices", JSON.stringify(ChoicesContent)); }
    }, [])
    return (
        <>
            <Wrapper id={"home"} style='w-full md:h-[calc(100vh-80px)] h-[100vh] bg-[url("/Hero.png")] bg-cover bg-no-repeat bg-center relative' >
                <div className='relative w-full h-full' >
                    <div className='w-full h-full flex justify-center items-center flex-col relative z-50 md:pb-0 pb-14' >
                        <div className='md:w-[390px] sm:w-[390px] w-[100%] md:h-[112px] h-[112px] relative pointer-events-none' >
                            <Image src={"/play nicely.png"} alt="" fill className='object-contain' />
                        </div>
                        <h1 className='font-Catamaran font-bold md:text-[52px] sm:text-[40px] text-[28px] md:leading-[96px] sm:leading-[46px] leading-[36px] text-center text-blue-main' >
                            Healthy Discipline Program
                        </h1>
                        <p className='font-Catamaran font-normal sm:text-[20px] text-[14px] md:leading-[30px] leading-[24px] text-center text-blue-off sm:mt-8 mt-4' >
                            Build your parenting skill set. Strengthen your relationship with your child.<br />
                            Improve your child's health.
                        </p>
                        <Link href="/choices" className='w-[208px] h-[50px] rounded-[25px] bg-orange-main font-Catamaran font-bold text-[18px] leading-[24px] capitalize text-white-main md:mt-10 mt-6 flex justify-center items-center' >
                            Start
                        </Link>
                    </div>
                    {/* Objects */}
                    <div className='md:w-[229.22px] md:h-[262.72px] absolute top-[5%] left-[0%] pointer-events-none' >
                        <Image src={"/ArrowTop.png"} alt="" fill className='object-contain' />
                    </div>
                    <div className='md:w-[220px] w-[160px] md:h-[213.72px] h-[180px] absolute md:top-[10%] top-0 md:-right-6 -right-4 pointer-events-none' >
                        <Image src={"/ChildRight.png"} alt="" fill className='object-contain' />
                    </div>
                    <div className='md:w-[279.24px] w-[180px] md:h-[269.39px] h-[210px] absolute md:bottom-[5%] bottom-0 md:-left-14 -left-8 pointer-events-none' >
                        <Image src={"/ChildLeft.png"} alt="" fill className='object-contain' />
                    </div>
                </div>
                <div className='lg:w-[250px] md:w-[160px] lg:h-[500px] md:h-[300px] absolute lg:top-[60%] md:top-[65%] right-[5%]' >
                    <Image src={"/HeroDownArrow.png"} alt="" fill className='object-contain' />
                </div>
            </Wrapper>
            <div className='w-full flex justify-center items-center bg-transparent relative z-[400] md:-mt-[24px] -mt-[12px]' >
                <a href='#intro' className='md:w-[48px] w-[24px] relative md:h-[48px] h-[24px] cursor-pointer' >
                    <Image src={"/dir.png"} alt="" fill className='object-contain' />
                </a>
            </div>
        </>
    )
}

export default Hero