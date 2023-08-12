'use client'

import React from 'react'
import HdvButton from './HdvButton'
import {stepSecondToLast} from './HdvII'
import { DatePicker } from '@mui/x-date-pickers'
import { useField } from '@mui/x-date-pickers/internals'
import { Controller, DeepMap, FieldError, FieldErrors, SubmitHandler, UseFormRegister, useForm, useFormContext } from 'react-hook-form';
import { RegistroHistorico } from '../../../hdv'
import { useFormCurrentStep } from '../context/useFormStepContext'
import dayjs from 'dayjs'

type IDateConfig ={
   label: string,
   name: keyof RegistroHistorico;
   validation:string,
}
const HdvIII:React.FC<stepSecondToLast> = ({onChange}) => {
   // console.log(currentStep)
   const {selectedDate, setSelectedDate} = useFormCurrentStep()
   const { register, control, handleSubmit, formState: { errors } } = useFormContext<RegistroHistorico>();
   console.log(selectedDate)

   const formFields: IDateConfig[] = [
    { label: 'AÑO DE FABRICACION', name: 'yearOfFabrication', validation:'Este campo es obligatorio', },
    { label: 'FECHA DE COMPRA', name: 'boughtDate', validation:'Este campo es obligatorio', },
   //  { label: 'MODELO', name: 'modelo', validation:'Este campo es obligatorio', },
    { label: 'FECHA DE INSTALACION N°', name: 'installationDate', validation:'Este campo es obligatorio', },
    { label: 'INICIO DE OPERACION', name: 'startingOppDate', validation:'Este campo es obligatorio', },
   //  { label: 'DIRECCION', name: 'address', validation:'Este campo es obligatorio', },
    { label: 'VENCIMIENTO DE GARANTIA', name: 'warrantyEnd', validation:'Este campo es obligatorio', },
  ];
  

  return (
   <div className='border-4 rounded-md mb-20'>
    <div className='w-full md:flex h-full overflow-y-auto  bg-[#FFF]'>
    <div className='px-4 py-2 rounded-t-md flex flex-row bg-blue-400'>
      <h2 className ="w-full font-semibold tracking-wider text-[#fff] "> III. REGISTRO HISTORICO</h2>
      </div>
            <div
            
            className='w-full border-b-4 pb-6 px-24 rounded-md h-auto'
            >
      <div className=" w-full flex flex-col space-y-8 py-4 px-6 ">
        <div className=' flex flex-col space-y-8'  >
         <label htmlFor="" className={`text-md font-bold tracking-wide text-center bottom-0 flex flex-col w-64  text-slate-600 mx-auto ${errors['AdquisitionWay'] && 'text-red-500'}`}>
            FORMA DE ADQUISICION:
            <select 
            id=""
            className={`text-center py-4 justify-center focus:border-blue-500 w-full items-center text-slate-400 text-xs text-md focus:outline-none font-semibold border-b ${errors['AdquisitionWay'] && 'border-red-500'}`}
             {...register('AdquisitionWay', {
                      required: 'Este campo es obligatorio',
                    })}
            >
<option value="">Seleccione forma...</option>
    <option value="Compra">Compra</option>
    <option value="Donacion">Donacion</option>
    <option value="Incautacion">Incautacion</option>
            </select>
         {errors['AdquisitionWay'] && (
           <span className="text-red-500 font-semibold text-center text-sm">
             {errors['AdquisitionWay']?.message}
           </span>
         )}
         </label>
{formFields.map(field => (
  <label key={field.name} className='font-semibold h-auto tracking-widest w-full text-center text-xs' id={field.name} htmlFor=''>
    {field.label}
    <div className='w-full'>
          <DatePicker
            {...register(field.name, {
                required: 'Este Campo es requerido',
              })}
              // defaultValue={dayjs().toDate().toISOString()}
            format= 'YYYY-MM-DD'
            value={selectedDate[field.name]}
            onChange={(newValue: any) => setSelectedDate((prev) => ({ ...prev,   [field.name]: newValue.toDate().toISOString() ,
    }))}
          />
  {/* Nu funciona el error porque el campo siempre tiene un valor */}
    </div>
  </label>
))}
<label className={`text-md font-bold tracking-wide text-center bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${errors['fabricante'] && 'text-red-500'}`}>
            Fabricante
            <input
              placeholder="Tu empresa S.A.S."
              className={`focus:border-blue-500 bottom-0 font-normal h-full focus:outline-none text-center text-sm pt-2 w-64  text-slate-500 mx-auto border-b border-[#0D202F]`}
              // name={`${field.name}`}
              {...register('fabricante', {
                required: 'Este campo es requerido',
              })}

            />
            {errors['fabricante'] && (
              <span className="text-red-500 font-semibold text-center text-sm">
                {errors['fabricante']?.message}
              </span>
            )}
          </label>
        </div>
        </div>
          </div>
        
         </div>
        <div className='flex w-full items-center justify-center mx-2'>

        <HdvButton title='Anterior' />   
        <HdvButton title='Siguiente' />   
        </div>
        </div>
    )
  }
  
  export default HdvIII
    