import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';


const Recommendation = [
    {
        ReNo: "Recommendation 1",
        img: "/recommendation1.png",
        description: "Teach your child how not to be hurt by others",
        learnMoreLink: ""
    },
    {
        ReNo: "Recommendation 2",
        img: "/recommendation2.png",
        description: "Increase the tools in your toolkit to respond to challenging behavior",
        learnMoreLink: ""
    },
    {
        ReNo: "Recommendation 3",
        img: "/recommendation3.png",
        description: "Decrease exposure to violence and too much media",
        learnMoreLink: ""
    },
    {
        ReNo: "Recommendation 4",
        img: "/recommendation4.png",
        description: "Show love",
        learnMoreLink: ""
    },
    {
        ReNo: "Recommendation 5",
        img: "/recommendation5.png",
        description: "Be consistent",
        learnMoreLink: ""
    },
]


function Recommendations() {
    return (
        <Wrapper id={"recommendations"} style='w-full md:py-28 py-16 relative bg-[#EAF4FE]' >
            <div className='w-full h-full flex justify-center items-center flex-col' >
                <h1 className='font-Catamaran font-semibold sm:text-[54px] text-[32px] md:leading-[72px] leading-[44px] text-start text-blue-main'>
                    Recommendations
                </h1>
                <section className='w-full mt-10 grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10' >
                    {
                        Recommendation?.map((item: any, index: number) => {
                            return <div key={index} className='w-full flex justify-center items-center flex-col gap-4' >
                                <h5 className='font-Catamaran font-bold sm:text-[30px] tracking-tight text-[24px] md:leading-[40px] leading-[32px] text-center text-blue-sky' >
                                    {item.ReNo}
                                </h5>
                                <div className='w-full h-[100px]  relative' >
                                    <Image src={item.img} alt="" fill className='object-contain' />
                                </div>
                                <p className='font-Catamaran font-bold sm:h-[85px] sm:text-[16px] text-[14px] md:leading-[26px] leading-[24px] text-center text-blue-main mt-6' >
                                    {item.description}
                                </p>
                                <Link href={item.learnMoreLink} className="font-Catamaran font-medium text-[16px] leading-[26px] uppercase text-orange-main border-b-2 border-b-orange-main" >
                                    Learn More
                                </Link>
                            </div>
                        })
                    }
                </section>
            </div>
        </Wrapper>
    )
}

export default Recommendations