import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='  p-16 overflow-y-auto h-full w-full'>
        {/* <Image src={'/login.png'} alt='' fill object-fit='cover' /> */}
      <button className='rounded-edge rounded-xl p-12  bg-black font-bold text-xl'>Hello World</button>
    </div>
  )
}

export default page
