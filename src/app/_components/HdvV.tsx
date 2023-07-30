import React from 'react'
import HdvButton from './HdvButton'

{/* V.REGISTRO TECNICO DE FUNCIONAMIENTO Y VI. CLASIFICACION BIOMEDICA */}
const HdvV = () => {
  return (
      <div className=' flex flex-row py-6'>
          <div className=' grid grid-cols-10  border-2  border-black'>
            <h2 className='bg-blue-200 h- col-span-10'>V. REGISTRO TECNICO DE FUNCIONAMIENTO</h2>
            <div className='col-span-10 border-2 px-12 border-black'>
          <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
  RANGO DE VOLTAJE
<span className='w-2 h-8 bg-verde-500'>
      <div  className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-44 text-slate-500 mx-auto border-b border-[#0D202F] `}/>
</span>
        </label>
          <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
RANGO DE CORRIENTE
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
        </label>
          <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
RANGO DE HUMEDAD
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
        </label>
          <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
RANGO DE CORRIENTE
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
        </label>
          <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
RANGO DE FRECUE NCIA
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
        </label>
          {/* <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '> */}
      <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {/* Default range</label> */}
RANGO DE CORRIENTE
<input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </label>
            <div className='w-full right-4'>

          <HdvButton/>
            </div>
            </div>
          </div>
      </div>
  )
}

export default HdvV
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">  </p>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">  </p>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">  </p>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">RANGO DE CORRIENTE  </p>
//               <p className="border-r-2 border-y-2 h-8 border-black text-xs">RANGO DE  FRECUENCIA   </p>
//             </div>
//             <div className='col-span-5 border-2 border-black'>
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />