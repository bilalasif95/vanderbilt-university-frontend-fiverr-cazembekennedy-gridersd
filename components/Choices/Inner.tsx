import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

interface props {
    children: React.ReactNode
}

function Inner({ children }: props) {
    return (
        <div className='flex justify-start items-start ml-9' >
            <BsArrowRight className='text-orange-main md:text-[20px] text-[16px] md:min-w-[20px] min-w-[16px]' />
            {children}
        </div>
    )
}

export default Inner