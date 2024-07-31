
import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className="">
            <Image src="/image 8.png" alt="gambar2" fill className='absolute z-[-1]'/>
            <Image src="/Rectangle 179.svg" alt='gambar3' width={1440} height={720} className='absolute bottom-0'/>
            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                <h1 className='
                 font-bold'>
                    TEKNIK FISIKA
                </h1>
                <p>
                    Institut Teknologi Sepuluh Nopember
                </p>
            </div>
        </div>
    )
}

export default About