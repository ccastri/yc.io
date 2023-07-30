'use client'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import HdvButton from './HdvButton'
import {stepSecondToLast} from './HdvII'

const HdvIII:React.FC<stepSecondToLast> = ({onChange, prevStep, nextStep}) => {
  return (
    <div className='w-full md:flex h-full overflow-y-auto mb-20 bg-[#FFF]'>
    <div className='px-4 py-2 rounded-t-md flex flex-row bg-blue-400'>
      <h2 className ="w-full font-semibold tracking-wider text-[#fff] "> III. REGISTRO HISTORICO</h2>
      </div>
            <form action=""
            className='grid grid-cols-10 w-full border-2  rounded-md h-auto'
            >

      <div className=" col-span-10 space-y-8 py-4 px-6 ">
        <label className='font-semibold tracking-widest h-7 text-center text-xs'>AÑO DE FABRICACION
        <div className=' flex flex-wrap'>

        <DatePicker/>
        </div>
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>FECHA DE COMPRA
           <div className=' flex flex-wrap'>

        <DatePicker/>
        </div>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>FECHA DE INSTALACION
           <div className=' flex flex-wrap'>

        <DatePicker/>
        </div>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>INICIO DE OPERACION
           <div className=' flex w-full'>

        <DatePicker/>
        </div>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>DIRECCION
           <div className=' flex flex-wrap'>

        <DatePicker/>
        </div>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>VENCIMIENTO DE GARANTIA
           <div className=' flex flex-wrap'>

        <DatePicker/>
        </div>
        
        </label>
      </div>
      <HdvButton />   
        </form>
      
       </div>
  )
}

export default HdvIII
