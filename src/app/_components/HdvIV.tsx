import React from 'react'
import HdvButton from './HdvButton'
import { FormFieldConfig, stepSecondToLast } from './HdvII'
import { RegistroTecnicoInstalacion } from '../../../hdv';
import { DeepMap, FieldError, FieldErrors, SubmitHandler, UseFormRegister, useForm, useFormContext } from 'react-hook-form';
// import { useFormContext } from 'react-hook-form';

export type FormFieldIVConfig = {
  label: string;
  name: keyof RegistroTecnicoInstalacion
  type: string;
  validation?: string | null;
  // onChange:() => void;
  // You can add more properties like placeholder, required, etc. as needed
}
{/* IV. Registro tecnico de instalacion */}
const HdvIV:React.FC<stepSecondToLast> = ({onChange}) => {
     const { register, handleSubmit, formState: { errors } } = useFormContext<RegistroTecnicoInstalacion>();
  // #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C 
  const formFields: FormFieldIVConfig[] = [
  {
    label: 'Tensión',
    name: 'tension',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Corriente',
    name: 'corriente',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Peso',
    name: 'peso',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Potencia',
    name: 'potencia',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Frecuencia',
    name: 'frecuencia',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Velocidad',
    name: 'velocidad',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Presión',
    name: 'presion',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Rango de Temperatura',
    name: 'rangoTemperatura',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
  {
    label: 'Tecnología Predominante',
    name: 'tecnologiaPredominante',
    type: 'text',
    validation: 'Este campo es obligatorio',
  },
];

return (
  <div className='h-full border-4 xl:flex'>
    <h2 className='text-[#3B2F3C] bg-[#E0C4A0] font-semibold  px-4 text-xl text-center py-4'>IV.REGISTRO TECNICO DE INSTALACION</h2>
    <div className='grid grid-cols-3 gap-2 p-4 '>

      {/* Render your form fields inside the grid */}
      {formFields.map((field) => (
        <div key={field.name} className='border-2 h-auto font-semibold tracking-widest text-center text-xs p-4'>
            {field.label}
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
    <div className='flex xl:flex-col xl:items-center bg-[#fafafa] justify-center'>
      <HdvButton title= 'Anterior' />
      <HdvButton title='Siguiente' />
    </div>
  </div>
);
}

export default HdvIV
  