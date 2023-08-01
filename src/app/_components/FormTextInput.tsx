import React from 'react'
import { InformacionGeneralData } from '../../../hdv';
import { FormFieldConfig } from './HdvII';
import { useFormContext } from 'react-hook-form';
export type FormFieldIIConfig = {
  label: string;
  name: keyof InformacionGeneralData
  type: string;
  validation?: string | null;
  // onChange:() => void;
  // You can add more properties like placeholder, required, etc. as needed
}
const formFields: FormFieldConfig[] = [
    { label: 'EQUIPO', name: 'equipo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'MARCA', name: 'marca', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'MODELO', name: 'modelo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'SERIE N°', name: 'serie', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'ACTIVO FIJO', name: 'activoFijo', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'REGISTRO SANITARIO', name: 'registroSanitario', type: 'text', validation:'Este campo es obligatorio', },
    { label: 'UBICACION', name: 'ubicacion', type: 'text', validation:'Este campo es obligatorio', },
  ];
  
const FormTextInput = () => {
  const{register, formState:{errors}} = useFormContext<InformacionGeneralData>()
  return (
    <div>
      {formFields.map((field) => (
            <label key={field.name} className='font-semibold tracking-widest h-12 text-center text-xs pb-4'>
              {field.label}
              <input
                type={field.type}
 {...register(`${field.name}`, {
                required: `${field.validation}`,
              })}
                onChange={()=>{}}
                className='mb-3 focus:outline-none focus:border-b-blue-500 w-full h-7 border-b'
              />
              {errors[field.name] && <span className="text-red-500 pb-4 font-semibold text-center text-sm w-36">{errors[field.name]?.message}</span>}
            </label>
          ))}
    </div>
  )
}

export default FormTextInput
