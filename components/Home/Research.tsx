import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';

function Research() {
    return (
        <Wrapper id={"research"} style='w-full md:h-screen h-[100vh] relative bg-white-main' >
            <div className='relative w-full h-full flex justify-center items-center' >
                <div className='w-full flex justify-center items-center flex-col md:max-w-[830px] md:mb-0 mb-32 md:gap-0 gap-1' >
                    <h2 className='font-Catamaran font-bold sm:text-[36px] text-[26px] md:leading-[48px] leading-[36px] text-center text-blue-sky'>
                        More Info
                    </h2>
                    <h1 className='font-Catamaran font-semibold sm:text-[52px] text-[32px] md:leading-[72px] leading-[44px] text-center text-blue-main'>
                        Research
                    </h1>
                    <p className='font-Catamaran font-normal sm:text-[20px] text-[14px] md:leading-[26px] leading-[24px] text-center text-blue-off' >
                        A multimedia violence prevention program that teaches the basics in how to manage hurtful behavior in young children. Everybody knows that violence is the problem in big parts of the world. Although there is no quick way to solve the violence problem, experts agree that part of the answer is how the parents respond to hurtful behavior in their young children.
                    </p>
                    <button className='w-[208px] h-[50px] rounded-[25px] bg-orange-main font-Catamaran font-bold text-[18px] leading-[24px] uppercase text-white-main md:mt-10 mt-10' >
                        Learn More
                    </button>
                </div>

                {/* Objects */}
                <div className='md:w-[232.16px] w-[180px] md:h-[257.41px] h-[210px] absolute md:bottom-[5%] bottom-0 lg:-left-14 left-0 pointer-events-none' >
                    <Image src={"/ResearchChild.png"} alt="" fill className='object-contain' />
                </div>
            </div>
            <div className='lg:w-[300.59px] md:w-[300.59px] lg:h-[230.27px] md:h-[230.27px] absolute top-[5%] right-[4%]' >
                <Image src={"/ResearchArrow.png"} alt="" fill className='object-contain' />
            </div>
        </Wrapper>
    )
}

export default Research