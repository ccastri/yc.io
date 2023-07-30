import React from 'react'
import HdvButton from './HdvButton'

{/* IV. Registro tecnico de instalacion */}
const HdvIV = () => {
  // #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C 
  return (
      <div className='h-full bg-[#E0C4A0] '>
      <h2 className='text-[#3B2F3C] font-semibold text-xl text-center  py-4'>IV.REGISTRO TECNICO DE INSTALACION</h2>
      <form className='grid bg-[#fafafa] h-full grid-cols-10 border-2'>
        {/* className="flex flex-col col-span-5 space-y-8 py-4 px-6 " */}
        <div className='col-span-3 space-y-8 py-4 px-3 '>


      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
Tension (V)
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label>
      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
POTENCIA (W)
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label >
      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
Presion (mmHg)
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label>
        </div>
        <div className='col-span-4  border-x-2'>
        <div className='col-span-3 space-y-8 py-4 px-6 '>


      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
RANGO DE TEMPERATURA:
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label>
      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>

FRECUENCIA (Hz):
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label >
      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
CORRIENTE (A):
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label>
        </div>


        </div>
        <div className='col-span-3'>
        <div className='col-span-3 space-y-8 py-4 px-3 '>


      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
PESO (Kg)
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label>
      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
VELOCIDAD
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label >
      <label className=' text-sm text-center flex flex-col  w-auto text-slate-600 mx-auto '>
PREDOMINANTE
      <input type="text" className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-full text-slate-500 mx-auto border-b border-[#0D202F] `}/>
      </label>
        </div>
        </div>
        <HdvButton/>
        </form>
      </div>
  )
}

export default HdvIV