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
        <div className=' flex flex-wrap'>
        <label className='font-semibold tracking-widest h-7 text-center text-xs'>AÑO DE FABRICACION

        <DatePicker onChange={()=>{onChange}}/>
        </label>
        </div>
           <div className=' flex flex-wrap'>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>FECHA DE COMPRA

        <DatePicker onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex flex-wrap'>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>FECHA DE INSTALACION

        <DatePicker onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex w-full'>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>INICIO DE OPERACION

        <DatePicker onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex flex-wrap'>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>DIRECCION

        <DatePicker onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex flex-wrap'>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>VENCIMIENTO DE GARANTIA

        
        <DatePicker onChange={()=>{onChange}}/>
        </label>
        </div>
      </div>
      <HdvButton />   
        </form>
      
       </div>
  )
}

export default HdvIII
