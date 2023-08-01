'use client'
import React, { useState } from 'react'
import HdvButton from './HdvButton'
import { stepSecondToLast } from './HdvII'
import { Controller, useFormContext } from 'react-hook-form'
import { RegistroTecnicoFuncionamiento } from '../../../hdv'

{/* V.REGISTRO TECNICO DE FUNCIONAMIENTO Y VI. CLASIFICACION BIOMEDICA */}

export type FormFieldVConfig = {
  label: string;
  name: keyof RegistroTecnicoFuncionamiento
  type: string;
  validation?: string | null;
  // onChange:() => void;
  // You can add more properties like placeholder, required, etc. as needed
}
const HdvV :React.FC<stepSecondToLast> = ({onChange}) => {
  // console.log(currentStep)
  const [fieldValues, setFieldValues] = useState<Partial<RegistroTecnicoFuncionamiento>>({});
  const minVal = '0'
  const maxVal = '100'
const { register, handleSubmit, control, formState: { errors } } = useFormContext<RegistroTecnicoFuncionamiento>();
  const formFields: FormFieldVConfig[] = [
  {
    label: 'RANGO DE VOLTAJE',
    name: 'rangoVoltaje',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'RANGO DE CORRIENTE',
    name: 'rangoCorriente',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'RANGO DE HUMEDAD',
    name: 'rangoHumedad',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'RANGO DE FRECUENCIA',
    name: 'rangoFrecuencia',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  // Add more fields as needed
];
  return (

      <div className=' border  xl:grid xl:grid-cols-2  h-full'>

          <div className=' col-span-1  h-full '>
            <h2 className='bg-blue-200 h-full py-6 col-span-10'>V. REGISTRO TECNICO DE FUNCIONAMIENTO</h2>
            </div>
            <div className='py-4 space-y-4 col-span-1 h-full border-2 px-6 border-black'>
     {formFields.map((field, index) => (
            <div key={index} className='space-y-4  border-2'>
              <label className={`text-md font-bold tracking-wide text-center bottom-0 flex flex-col w-full text-slate-600 mx-auto ${errors[field.name] && 'text-red-500'}`}>
                {field.label}
                <Controller
                  control={control}
                  name={field.name} // Specify the name attribute
                  render={({ field }) => (
                    <input
                      type="range"
                      value={field.value || ''}
                      onChange={(e) => {
                        setFieldValues({ ...fieldValues, [field.name]: e.target.value });
                        field.onChange(e);
                        onChange(e);
                      }}
                      min={minVal}
                      max={maxVal}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                  )}
                />
                {/* Rest of the code */}
                <div className="flex flex-col justify-between">
        <span>Min: {minVal}</span>
        <span>Rango Actual: {fieldValues[field.name]}</span>
        <span>Max: {maxVal}</span>
      </div>
      {errors[field.name] && (
        <span className="text-red-500 font-semibold text-center text-sm">
          {errors[field.name]?.message}
        </span>
      )}
              </label>
            </div>
          ))}
        {/* </label> */}
            <div className='w-full right-4'>

          <HdvButton/>
            </div>
          </div>
      </div>
  )
}

export default HdvV
