import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface props {
    children: React.ReactNode
}

function List({ children }: props) {
    return (
        <div className='flex justify-start items-start' >
            <BsArrowRight className='text-blue-sky md:text-[20px] text-[16px] md:min-w-[20px] min-w-[16px]' />
            {children}
        </div>
    )
}

export default List