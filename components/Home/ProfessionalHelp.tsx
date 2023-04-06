import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';

function ProfessionalHelp() {
    return (
        <>
            <Wrapper id={"professionalHelp"} style='w-full md:py-18 py-16 relative bg-white-main' >
                <div className='w-full h-full flex justify-center items-center md:flex-row flex-col-reverse gap-8 relative z-10' >
                    <div className='md:w-[40%] w-full h-full flex justify-center items-start flex-col gap-4' >
                        <h2 className='font-Catamaran font-bold sm:text-[36px] text-[26px] md:leading-[48px] leading-[36px] text-start text-blue-sky'>
                            Professional Help
                        </h2>
                        <h1 className='font-Catamaran font-semibold sm:text-[54px] text-[32px] md:leading-[72px] leading-[44px] text-start text-blue-main'>
                            When to Seek Professional Help
                        </h1>
                        <p className='font-Catamaran font-normal sm:text-[20px] text-[14px] md:leading-[26px] leading-[24px] text-start text-blue-off' >
                            A multimedia violence prevention program that teaches the basics in how to manage hurtful behavior in young children. Everybody knows that violence is the problem in big parts of the world. Although there is no quick way to solve the violence problem, experts agree that part of the answer is how the parents respond to hurtful behavior in their young children. Play Nicely teaches you appropriate ways to respond the next time you see your child hurt another.
                        </p>
                        <button className='w-[180px] h-[50px] rounded-[25px] bg-orange-main font-Catamaran font-bold text-[18px] leading-[24px] text-white-main mt-6 uppercase' >
                            learn more
                        </button>
                    </div>
                    <div className='md:w-[60%] w-full md:h-[600px] h-[300px] relative' >
                        <Image src={"/ProfessionalHelp.png"} alt="" fill className='object-contain' />
                    </div>
                </div>
                <div className='md:w-[200px] md:h-[130px] md:block hidden absolute top-[5%] left-[30%] pointer-events-none z-0' >
                    <Image src={"/proArrow.png"} alt="" fill className='object-contain' />
                </div>
            </Wrapper>
            <div className='w-full h-[530px] flex justify-center items-center lg:flex-row flex-col' >
                <div className='lg:w-[50%] w-full h-full p-4 flex justify-center items-center flex-col bg-blue-skyOff gap-6' >
                    <div className='w-[171.5px] h-[114.68px] relative' >
                        <Image src={"/www.playnicely.org.png"} alt="" fill className='object-contain' />
                    </div>
                    <a href={"https://www.playnicely.org"} target={"_blank"} className="font-Catamaran font-medium md:text-[32px] text-[20px] md:leading-[48px] leading-[28px] text-blue-main border-b-2 border-b-blue-sky" >
                        www.playnicely.org
                    </a>
                </div>
                <div className='lg:w-[50%] w-full h-full p-4 flex justify-center items-center flex-col bg-orange-off gap-6' >
                    <div className='w-[171.5px] h-[114.68px] relative' >
                        <Image src={"/quickparenting.png"} alt="" fill className='object-contain' />
                    </div>
                    <a href={"https://www.quickparenting.assessment.org"} target={"_blank"} className="font-Catamaran font-medium md:text-[32px] text-[20px] md:leading-[48px] leading-[28px] text-blue-main border-b-2 border-b-blue-sky" >
                        www.quickparenting.assessment.org
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProfessionalHelp