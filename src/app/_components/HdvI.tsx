'use client'
import React, { ChangeEvent, useState } from 'react'
import {FileUploader} from './DragAndDrop'
import { FieldErrors, UseFormRegister, useForm, useFormContext } from 'react-hook-form';
import Image from 'next/image';
import HdvButton from './HdvButton';
// import { FormFieldConfig } from '../documentos/hdv/page';
import { UbicacionGeograficaData } from '../../../hdv';
// export type FormFieldConfig = {
//   label: string;
//   name: string;
//   type: string;
//   // You can add more properties like placeholder, required, etc. as needed
// }

// type stepOne = {
//   // nextStep: ()=>void;
//  register: UseFormRegister<any> // Use your actual form data type here
//   errors: any
//   // validation: string | string[]
// }
interface HdvIProps {
  register: UseFormRegister<UbicacionGeograficaData>;
  errors: FieldErrors<UbicacionGeograficaData>;
  onChange:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>void;
  onSubmit: ()=>void;
  handleClick:(index:number)=>void
}
export type FormFieldConfig = {
  label: string;
  name: keyof UbicacionGeograficaData 
  type: string;
  validation?: string | null;
  // onChange:() => void;
  // You can add more properties like placeholder, required, etc. as needed
}

const HdvI:React.FC<HdvIProps> = ({onChange}) => {
  // Define the form fields configuration
  const formFields: FormFieldConfig[] = [
    { label: 'DEPARTAMENTO', name: 'departamento', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'MUNICIPIO', name: 'municipio', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'ENTIDAD', name: 'entidad', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'CORREO', name: 'correo', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'DIRECCION', name: 'direccion', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'TELEFONO', name: 'telefono', type: 'text', validation:'Este campo es obligatorio'  },
  ];

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { register, handleSubmit, formState: { errors } } = useFormContext();

  const handleUpload = (files: File[]) => {
    setSelectedFiles(files);
  };

  // const handleSubmit = (data: FormData) => {
  //   // Handle form submission here
    
  //   console.log('data submitted');
  // };
  // const methods = useForm<UbicacionGeograficaData>();
  // const { register, handleSubmit, formState: { errors } } = methods;

  return (
    <div className='w-full xl:flex flex-col transition-all duration-150 h-full mb-20 bg-[#FFF] border-4'>
      <div className='px-4 py-2 rounded-t-md flex flex-row bg-[#3B2F3C]'>
      {/* <>{console.log(currentStep)}</> */}
        <h2 className='w-full text-[#FAFAFA] font-semibold tracking-wider'>I. UBICACION GEOGRÁFICA</h2>
      </div>
      <form action='' className='grid grid-cols-10 w-full border-2 rounded-md pb-8 h-auto'>
        <div className='flex flex-col col-span-5 space-y-4 py-2  px-6 '>
          {formFields.map((field) => (
             <label key={field.name} className={`text-md font-bold tracking-wide  bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${errors[field.name] && 'text-red-500'}`}>
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
              {errors[field.name] && <span className="text-red-500 pb-4 font-semibold text-center text-sm w-full">{errors[field.name]?.message}</span>}
            </label>
          ))}
        </div>
        <div className='col-span-5 h-full p-4 space-y-2  '>
          <FileUploader onUpload={handleUpload} />
          {selectedFiles.map((file) => (
            <div key={file.name} className='border-2'>
              <Image className='h-auto w-full' src={URL.createObjectURL(file)} alt={file.name} width={100} height={30} />
              <ul className='flex flex-col text-xs my-auto text-center h-full rounded-xl flex-wrap'>
                {file.name}-{file.size / 1000}kb{' '}
              </ul>
            </div>
          ))}
        </div>
        <div className='col-span-5' />
      </form>
      <div className='w-full bg-gradient-to-r from-[#badaed] to-[rgb(5,137,75)] '>
<div className='w-[60%] ml-20'>

        <HdvButton />
</div>
      </div>
    </div>
  )
}
// #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C 
// 
export default HdvI