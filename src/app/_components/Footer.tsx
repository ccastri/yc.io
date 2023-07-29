import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <main className=' bottom-0 border hover:opacity-100 bg-[#123CD0] opacity-50 w-full sticky'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path fill="#00cba9" fill-opacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,165.3C274.3,139,343,85,411,96C480,107,549,181,617,197.3C685.7,213,754,171,823,138.7C891.4,107,960,85,1029,101.3C1097.1,117,1166,171,1234,202.7C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg> */}
      {/* <Image src="/wave_footer.svg" alt="wave footer" className='top-0' width={700} priority 
      height={150}/> */}
      {/* <Image src="/wave_footer.svg" alt="wave footer" className='' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" fill/> */}
    </main>
  )
}

export default Footer