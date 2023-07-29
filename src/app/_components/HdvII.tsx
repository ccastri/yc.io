'use client'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import HdvButton from './HdvButton'
// hdvButton
const HdvII = () => {
  return (
    <div className='w-full flex h-full mb-20 bg-[#FFF]'>
        <div className='px-4 py-2 rounded-t-md flex flex-row bg-blue-400'>

      <h2 className ="w-full font-semibold tracking-wider  text-bg[#FFF]"> II. INFORMACION GENERAL</h2>
      </div>
      
    <form className='grid grid-cols-10 items-center w-full border-2 rounded-b-md h-full '>

      <div className="flex flex-col  col-span-10 items-center px-6 py-4 border  h-full space-y-8">

        <label className='font-semibold tracking-widest h-7 text-center text-xs'>
            EQUIPO:
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>
        <label className='font-semibold tracking-widest h-7 text-center text-xs'>
            MARCA:
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>
        <label className='font-semibold tracking-widest h-7 text-center text-xs'>
            MODELO:
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>
        <label className='font-semibold tracking-widest h-7 text-center text-xs'>
            SERIE N°:
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>
        <label className='font-semibold tracking-widest xl:w-64 h-7 text-center text-xs'>
            ACTIVO FIJO:
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>
        <label className='font-semibold xl:w-64 tracking-widest h-7 text-center text-xs'>
            REGISTRO SANITARIO:
        <input type="text" className='mt-1  mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>
        <label className='font-semibold tracking-widest h-7 xl:w-64 text-center text-xs'>
            UBICACION:
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full mr-12 h-7 border rounded-md' />
        </label>  
      </div>

        {/* <div className='col-span-10 '>
        <div className='col-span-2'/> */}
        <div className="ml-12 mt-4 items-end  w-full col-span-10">
        <div className="relative h-20">
        <div className="absolute mx-auto ">
        <HdvButton />      

        {/* </div> */}
        </div>
        </div>
        </div>

      </form>
    </div>
  )
}

export default HdvII