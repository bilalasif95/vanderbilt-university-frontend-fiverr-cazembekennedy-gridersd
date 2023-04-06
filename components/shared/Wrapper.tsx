import React from 'react';

interface Props {
    id?: string
    style?: string;
    children: React.ReactNode
}

function Wrapper({ id, children, style }: Props) {
    return (
        <section id={id} className={style} >
            <div className='w-full h-full max-w-[1320px] m-auto md:px-8 px-4' >
                {children}
            </div>
        </section>
    )
}

export default Wrapper