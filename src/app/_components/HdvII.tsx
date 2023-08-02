'use client'
import { DatePicker } from '@mui/x-date-pickers'
import React, { ChangeEvent } from 'react'
import HdvButton from './HdvButton'
import { DeepMap, FieldError, FieldErrors, SubmitHandler, UseFormRegister, useForm, useFormContext } from 'react-hook-form';
// import { FormFieldConfig } from '../documentos/hdv/page';
import { InformacionGeneralData } from '../../../hdv';
export type stepSecondToLast = {
  // prevStep: ()=>void;
  // nextStep: ()=>void;
  onChange?:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>void |number|null;
  onSubmit?: ()=>void;
  // register: UseFormRegister<InformacionGeneralData> // Use your actual form data type here
  // register: UseFormRegister<any> // Use your actual form data type here
  // errors:FieldErrors<InformacionGeneralData>
  // validation: string | string[]
    handleClick?:(index:number)=>void
    // currentStep?: number;
  // register: UseFormRegister<FormData>; // Use your actual form data type here
  // errors: DeepMap<FormData, FieldError>
}
export type FormFieldConfig = {
  label: string;
  name: keyof InformacionGeneralData
  type: string;
  validation?: string | null;
  // onChange:() => void;
  // You can add more properties like placeholder, required, etc. as needed
}
const HdvII:React.FC<stepSecondToLast> = ({onChange,}) => {
  const { register, handleSubmit, formState: { errors } } = useFormContext<InformacionGeneralData>();
console.log(errors)

  const formFields: FormFieldConfig[] = [
    { label: 'EQUIPO', name: 'equipo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'MARCA', name: 'marca', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'MODELO', name: 'modelo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'SERIE N°', name: 'serie', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'ACTIVO FIJO', name: 'activoFijo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'REGISTRO SANITARIO', name: 'registroSanitario', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'UBICACION', name: 'ubicacion', type: 'text', validation:'Este campo es obligatorio', },
  ];

  return (
    <div className='border-4 bg-[#fafafa rounded'>
    <div className='w-full flex flex-col h-[30%] bg-[#FFF]  rounded-md mb-6 '>
    <div className='w-full xl:flex transition-all duration-150 h-full overflow-y-auto  bg-[#FFF]'>
      <div className='px-4 py-2 rounded-t-md flex flex-row bg-[#3B2F3C]'>
      <h2 className ="w-full text-[#FAFAFA] font-semibold tracking-wider "> I. UBICACION GEOGRÁFICA</h2>
      </div>
            <form action=""
            className=' w-full  '
            >
      <div className="flex flex-col items-center  px-12 py-4  space-y-8">
      <div className="col-span-2 grid grid-cols-2 bottom-0 gap-8"> {/* Wrap the form fields in a container with two columns */}
      {formFields.map((field, index) => (
        <div key={index} className='h-full bottom-0 border- '>
          <label className={`text-md font-bold tracking-wide text-center bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${errors[field.name] && 'text-red-500'}`}>
            {field.label}
            <input
              placeholder="Tu empresa S.A.S."
              className={`focus:border-blue-500 bottom-0 font-normal h-full focus:outline-none text-center text-sm pt-2 w-full  text-slate-500 mx-auto border-b border-[#0D202F]`}
              // name={`${field.name}`}
              {...register(`${field.name}`, {
                required: `${field.validation}`,
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

            

    </div>
            <div className="flex justify-end  flex-row">
            {/* <div className="  w-auto mx-4 "> */}
              {/* fALTA ANIMAR QUE EL CURRENT SE ACTUALICE CON EL SCROLL Y LO QUE
              USE OBSERVER VEA EN PANTALLA */}
            <HdvButton title='Anterior '
              //  currentStep={currentStep} prevStep={prevStep}
               />      
          {/* </div> */}
          {/* <div className=" w-auto mx-4 "> */}
            <HdvButton title='Siguiente'
              // currentStep={currentStep} nextStep={nextStep}
            />      
          {/* </div> */}
          </div>
          </div>
  )
}

export default HdvII
