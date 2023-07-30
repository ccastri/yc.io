'use client'
import { DatePicker } from '@mui/x-date-pickers'
import React, { ChangeEvent } from 'react'
import HdvButton from './HdvButton'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFieldConfig } from '../documentos/hdv/page';
export type stepSecondToLast = {
  prevStep: ()=>void;
  nextStep: ()=>void;
  onChange:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>void;
}
  const HdvII:React.FC<stepSecondToLast> = ({nextStep, prevStep, onChange}) => {


  const formFields: FormFieldConfig[] = [
    { label: 'EQUIPO', name: 'equipo', type: 'text' },
    { label: 'MARCA', name: 'marca', type: 'text' },
    { label: 'MODELO', name: 'modelo', type: 'text' },
    { label: 'SERIE N°', name: 'serie', type: 'text' },
    { label: 'ACTIVO FIJO', name: 'activo-fijo', type: 'text' },
    { label: 'REGISTRO SANITARIO', name: 'registro-sanitario', type: 'text' },
    { label: 'UBICACION', name: 'ubicacion', type: 'text' },
  ];

  return (
    <div className='w-full flex flex-col h-full mb-6 bg-[#FFF] border-4'>
      <div className='w-full flex h-full bg-[#FFF]'>

        <div className='px-4 py-2 rounded-t-md flex flex-row bg-blue-400'>

      <h2 className ="w-full font-semibold tracking-wider  text-bg[#FFF]"> II. INFORMACION GENERAL</h2>
      </div>
      
    <form className='grid grid-cols-10 items-center w-full  rounded-b-md h-full '>

      <div className="flex flex-col  col-span-10 items-center px-6 py-4 border  h-full space-y-8">
        {formFields.map((field, index)=>(
          <div  key={index}  className=''>
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-600 mx-auto '>
            {field.label}
            <input 
            placeholder='Tu empresa S.A.S.'
            className={` focus:border-blue-500 focus:outline-none text-center text-sm  pt-2 w-40 text-slate-500 mx-auto border-b border-[#0D202F] `}
            name={`${field.name}`}
            onChange={()=>{}}
            />
            </label>
            </div>
        ))}
      </div>

        {/* <div className='col-span-10 '>
        <div className='col-span-2'/> */}

      </form>
        </div>
          <div className='w-full  flex justify-between relative flex-row h-full'>
            <div className=' w-[38%]  bg-blue-500 z-50 h-full'/>
            <div className="w-[62%]  flex flex-col  px-12 bg-[#E0C4A0] ">
            <div className="  ">
            <HdvButton title='Siguiente ' prevStep={prevStep}/>      
          </div>
          <div className="  ">
            <HdvButton title='Anterior' nextStep={nextStep}/>      
          </div>
          </div>
        </div>
    </div>
  )
}

export default HdvII
