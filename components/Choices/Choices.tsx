import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';




function Choices() {
    const [Data, setData] = React.useState([])
    React.useEffect(() => {
        const Choices = JSON.parse(localStorage.getItem("Choices") || "[]");
        setData(Choices)
    }, [])

    return (
        <React.Fragment>
            <Wrapper style='w-full h-[500px] bg-[url("/Hero.png")] bg-cover bg-no-repeat bg-center relative' >
                <div className='relative w-full h-full flex justify-center items-center flex-col' >
                    <div className='md:w-[390px] sm:w-[390px] w-[250px] md:h-[112px] h-[112px] relative pointer-events-none' >
                        <Image src={"/play nicely.png"} alt="" fill className='object-contain' />
                    </div>
                    <h1 className='font-Catamaran font-semibold sm:text-[42px] text-[24px] md:leading-[60px] leading-[28px] text-center text-blue-main'>
                        Assume you see one young child hit another.<br />
                        What are you going to do?
                    </h1>
                    <p className='font-Catamaran font-normal sm:text-[20px] text-[14px] md:leading-[26px] leading-[24px] text-start text-blue-off my-14' >
                        Select the options and learn if they are:
                    </p>
                    <div className='flex justify-center items-center md:gap-12 gap-6' >
                        <div className='flex justify-center items-center md:gap-2 gap-1' >
                            <Image src={"/great.png"} alt="" width={34} height={30.18} className='object-contain' />
                            <h5 className='font-Catamaran font-semibold sm:text-[22px] text-[16px] md:leading-[32px] leading-[24px] text-start text-blue-main capitalize'>
                                Great
                            </h5>
                        </div>
                        <div className='flex justify-center items-center md:gap-2 gap-1' >
                            <Image src={"/good.png"} alt="" width={34} height={30.18} className='object-contain' />
                            <h5 className='font-Catamaran font-semibold sm:text-[22px] text-[16px] md:leading-[32px] leading-[24px] text-start text-blue-main capitalize'>
                                good
                            </h5>
                        </div>
                        <div className='flex justify-center items-center md:gap-2 gap-1' >
                            <Image src={"/not.png"} alt="" width={34} height={30.18} className='object-contain' />
                            <h5 className='font-Catamaran font-semibold sm:text-[22px] text-[16px] md:leading-[32px] leading-[24px] text-start text-blue-main capitalize'>
                                Not Recommended
                            </h5>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Wrapper style='w-full py-16 relative' >
                <div className='w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4' >
                    {
                        Data?.map((item: any, index: number) => {
                            return <Link key={index} href={`/choices/${item.id}`} className='w-full h-[310px] overflow-hidden rounded-[10px] border-[5px] transition-all duration-300 border-transparent hover:border-[#ACD4F7]' >
                                {/* Image section */}
                                <div className='w-full h-[130px] relative' >
                                    <Image src={item.img} alt="" fill className='object-cover' />
                                    <Image src={"/choices/cover.png"} alt="" fill className='object-cover' />
                                </div>
                                <div className='w-full h-[180px] flex justify-center items-center flex-col p-8 bg-blue-skyOff/70' >
                                    {/* Title */}
                                    <h5 className='font-Catamaran h-[60px] font-semibold sm:text-[20px] text-[16px] md:leading-[28px] leading-[24px] text-center text-blue-main capitalize'>
                                        {item.Name}
                                    </h5>
                                    <Image src={item?.option?.state ? item?.option?.icon : "/go.png"} alt="" width={34} height={30.18} className='object-contain mt-4' />
                                </div>
                            </Link>
                        })
                    }
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Choices