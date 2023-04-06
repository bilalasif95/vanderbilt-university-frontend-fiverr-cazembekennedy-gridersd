import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';

function Introduction() {
    return (
        <Wrapper style='w-full relative' >
            <div id='intro' className='w-full h-full md:py-28 py-16 flex justify-center items-center md:flex-row flex-col md:gap-20 gap-8 relative' >
                <div className='md:w-[50%] w-full md:h-[460px] sm:h-[350px] h-[280px] relative overflow-hidden rounded-[10px] z-30' >
                    <Image src={"/intro.png"} alt="" fill className='object-cover' />
                </div>
                <div className='md:w-[50%] w-full h-full flex justify-center items-start flex-col' >
                    <h2 className='font-Catamaran font-bold sm:text-[36px] text-[26px] md:leading-[48px] leading-[36px] text-start text-blue-sky'>
                        Introduction
                    </h2>
                    <h1 className='font-Catamaran font-semibold sm:text-[54px] text-[32px] md:leading-[72px] leading-[44px] text-start text-blue-main'>
                        Play Nicely
                    </h1>
                    <p className='font-Catamaran font-normal sm:text-[20px] text-[14px] md:leading-[26px] leading-[24px] text-start text-blue-off' >
                        A multimedia violence prevention program that teaches the basics in how to manage hurtful behavior in young children. Everybody knows that violence is the problem in big parts of the world. Although there is no quick way to solve the violence problem, experts agree that part of the answer is how the parents respond to hurtful behavior in their young children. Play Nicely teaches you appropriate ways to respond the next time you see your child hurt another.
                    </p>
                </div>

                {/* object */}
                <div className='md:w-[131.45px] md:h-[413.43px] md:block hidden absolute z-10 top-[60%] -left-[8%] pointer-events-none' >
                    <Image src={"/IntroArrow.png"} alt="" fill className='object-contain' />
                </div>
            </div>
        </Wrapper>
    )
}

export default Introduction