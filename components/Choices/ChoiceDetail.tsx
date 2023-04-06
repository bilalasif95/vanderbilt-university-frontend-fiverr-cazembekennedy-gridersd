import React from 'react';
import Wrapper from '../shared/Wrapper';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import List from './List';
import Inner from './Inner';
import { useRouter } from 'next/router';


function ChoiceDetail() {
    const Router = useRouter()
    React.useEffect(() => {
        const slug = Number(Router.query.slug);
        if (!Router.isReady) return;
        else {
            const Choices = JSON.parse(localStorage.getItem("Choices") || "[]");
            if (Choices.length !== 0) {
                Choices.map((item: any, index: number) => {
                    if (index + 1 === slug) {
                        item.option.state = true
                        return;
                    }
                })
                localStorage.setItem("Choices", JSON.stringify(Choices))
            }
        }
    }, [Router])
    return (
        <Wrapper id={"home"} style='w-full md:py-20 py-16  bg-[url("/detailChoice.png")] bg-cover bg-no-repeat bg-center relative' >
            <div className='w-full bg-white-main rounded-[20px] overflow-hidden md:p-8 p-4 flex justify-center items-end flex-col' >
                {/* return back */}
                <Link href={"/choices"} className='font-Catamaran font-bold text-[16px] leading-[21px] flex justify-center items-center text-blue-main gap-2' >
                    <BiArrowBack className='text-blue-main text-[20px]' /> Return to 20 options
                </Link>
                <section className='w-full md:grid md:grid-cols-5 md:gap-20 flex flex-col gap-8 mt-6' >
                    <div className='w-full flex justify-center items-start flex-col col-span-3' >
                        <h2 className='font-Catamaran font-bold sm:text-[30px] text-[20px] md:leading-[48px] leading-[36px] text-start text-blue-sky capitalize'>
                            Option
                        </h2>
                        <h2 className='font-Catamaran font-bold sm:text-[30px] text-[20px] md:leading-[48px] leading-[36px] text-start text-blue-main capitalize my-1'>
                            Redirect toward a positive behavior
                        </h2>
                        <div className='flex justify-center items-center md:gap-2 gap-2' >
                            <Image src={"/great.png"} alt="" width={34} height={30.18} className='object-contain' />
                            <h5 className='font-Catamaran font-bold sm:text-[30px] text-[20px] md:leading-[48px] leading-[36px] text-start text-great capitalize'>
                                A Great Option
                            </h5>
                        </div>
                        <div className='mt-8 flex justify-center items-start flex-col gap-4' >
                            <List>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`Encourage another behavior to take place of your child's hurtful behavior`}
                                </p>
                            </List>
                            <Inner>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`Gives your child attention`}
                                </p>
                            </Inner>
                            <Inner>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`Let's children know they can do, not just what they can't`}
                                </p>
                            </Inner>
                            <List>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`For hitting/pushing/pulling hair, say`} <span className='text-blue-cool' >
                                        {`"Use your hands to throw a ball, help me clean up the house, or build Legos."`}
                                    </span>
                                </p>
                            </List>
                            <List>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`For kicking, say`} <span className='text-blue-cool' >
                                        {`"Kicking is not OK! You can use your feet to jump up and down. If you are feeling mad, you can stomp your feet."`}
                                    </span>
                                </p>
                            </List>
                            <List>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`For biting, say`} <span className='text-blue-cool' >
                                        {`"Use your teeth to eat food."`}
                                    </span>
                                </p>
                            </List>
                            <List>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`For language that is hurtful, say`} <span className='text-blue-cool' >
                                        {`"Let's think about better words to use the next time we are angry."`}
                                    </span>
                                </p>
                            </List>
                            <List>
                                <p className='font-Catamaran font-normal sm:text-[18px] text-[14px] md:leading-[26px] leading-[24px] pl-5' >
                                    {`Redirecting helps a child learn acceptable ways to respond to life's challenges.`}
                                </p>
                            </List>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center flex-col col-span-2 gap-6' >
                        <div className='w-full sm:h-[200px] h-[130px] relative overflow-hidden rounded-[10px]' >
                            <Image src={"/choices/1.png"} alt="" fill className='object-cover' />
                            <Image src={"/choices/cover.png"} alt="" fill className='object-cover' />
                        </div>
                        <div className='w-full flex justify-center md:items-end items-center flex-col gap-4' >
                            <Link href={"/choices"} className='w-[230px] h-[50px] rounded-[25px] bg-orange-main text-white-main whitespace-nowrap font-Catamaran font-bold text-[16px] leading-[21px] flex justify-center items-center gap-2' >
                                <BiArrowBack className='text-white-main text-[20px]' /> Return to 20 options
                            </Link>
                            <Link href={"/"} className='w-[230px] h-[50px] rounded-[25px] bg-blue-skyOff text-blue-sky whitespace-nowrap font-Catamaran font-bold text-[16px] leading-[21px] flex justify-center items-center' >
                                Home Page
                            </Link>
                        </div>
                    </div>
                </section>
            </div >
        </Wrapper>
    )
}

export default ChoiceDetail