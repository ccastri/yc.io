'use client'
import { DatePicker } from '@mui/x-date-pickers'
import React, { ChangeEvent } from 'react'
import HdvButton from './HdvButton'
import { DeepMap, FieldError, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { FormFieldConfig } from '../documentos/hdv/page';
export type stepSecondToLast = {
  // prevStep: ()=>void;
  // nextStep: ()=>void;
  onChange:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>void;
  onSubmit: ()=>void;
  register: any // Use your actual form data type here
  errors: any
  validation: string | string[]
    // currentStep?: number;
  // register: UseFormRegister<FormData>; // Use your actual form data type here
  // errors: DeepMap<FormData, FieldError>
}
  const HdvII:React.FC<stepSecondToLast> = ({onChange, register, errors, validation}) => {


  const formFields: FormFieldConfig[] = [
    { label: 'EQUIPO', name: 'equipo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'MARCA', name: 'marca', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'MODELO', name: 'modelo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'SERIE N°', name: 'serie', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'ACTIVO FIJO', name: 'activo-fijo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'REGISTRO SANITARIO', name: 'registro-sanitario', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'UBICACION', name: 'ubicacion', type: 'text', validation:'Este campo es obligatorio', },
  ];

  return (
    <div className='w-full flex flex-col h-[30%] bg-[#FFF] border-4 rounded-md mb-6'>
    <div className='w-full xl:flex transition-all duration-150 h-full overflow-y-auto  bg-[#FFF]'><div className='px-4 py-2 rounded-t-md flex flex-row bg-[#3B2F3C]'>
      <h2 className ="w-full text-[#FAFAFA] font-semibold tracking-wider "> I. UBICACION GEOGRÁFICA</h2>
      </div>
            <form action=""
            className=' w-full  '
            >
      <div className="flex flex-col items-center  px-20 py-4 border space-y-8">
      <div className="col-span-2 grid grid-cols-2 bottom-0 gap-12"> {/* Wrap the form fields in a container with two columns */}
      {formFields.map((field, index) => (
        <div key={index} className='h-full bottom-0 border-'>
          <label className={`text-md font-bold tracking-widetext-center bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${errors[field.name] && 'text-red-500'}`}>
            {field.label}
            <input
              placeholder="Tu empresa S.A.S."
              className={`focus:border-blue-500 bottom-0 font-normal h-full focus:outline-none text-center text-sm pt-2 w-full  text-slate-500 mx-auto border-b border-[#0D202F]`}
              // name={`${field.name}`}
              {...register(`${field.name}`, {
                required: `${validation}`,
              })}
              onChange={() => {}}
            />
            {errors[field.name] && (
              <span className="text-red-500 font-semibold text-center text-sm">
                {errors[field.name]?.message}
              </span>
            )}
          </label>
        </div>
      ))}
    </div>
      </div>

        {/* <div className='col-span-10 '>
        <div className='col-span-2'/> */}

      </form>
        </div>

            
            <div className="grid grid-cols-2  px-12 bg-gradient-to-r from-[#C29A95] to-[#E0C4A0] ">
            <div className=" cols-span-1 mx-4 ">
              {/* fALTA ANIMAR QUE EL CURRENT SE ACTUALICE CON EL SCROLL Y LO QUE
              USE OBSERVER VEA EN PANTALLA */}
            <HdvButton title='Anterior '
              //  currentStep={currentStep} prevStep={prevStep}
               />      
          </div>
          <div className=" col-span-1 mx-4 ">
            <HdvButton title='Siguiente'
              // currentStep={currentStep} nextStep={nextStep}
            />      
          </div>
          </div>

    </div>
  )
}

export default HdvII
