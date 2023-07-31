'use client'
import React, { ChangeEvent, useState } from 'react'
import {FileUploader} from './DragAndDrop'
import { FieldErrors, UseFormRegister, useFormContext } from 'react-hook-form';
import Image from 'next/image';
import HdvButton from './HdvButton';
import { FormFieldConfig } from '../documentos/hdv/page';
// export type FormFieldConfig = {
//   label: string;
//   name: string;
//   type: string;
//   // You can add more properties like placeholder, required, etc. as needed
// }

type stepOne = {
  // nextStep: ()=>void;
  onChange:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>void;
  onSubmit: ()=>void;
 register: UseFormRegister<any> // Use your actual form data type here
  errors: any
  validation: string | string[]
    handleClick:(index:number)=>void
}

const HdvI:React.FC<stepOne> = ({onChange, errors}) => {
  // Define the form fields configuration
  const formFields: FormFieldConfig[] = [
    { label: 'DEPARTAMENTO', name: 'departamento', type: 'text' },
    { label: 'MUNICIPIO', name: 'municipio', type: 'text' },
    { label: 'ENTIDAD', name: 'entidad', type: 'text' },
    { label: 'CORREO', name: 'correo', type: 'text' },
    { label: 'DIRECCION', name: 'direccion', type: 'text' },
    { label: 'TELEFONO', name: 'telefono', type: 'text' },
  ];

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // const { register } = useFormContext();

  const handleUpload = (files: File[]) => {
    setSelectedFiles(files);
  };

  const handleSubmit = (data: FormData) => {
    // Handle form submission here
    
    console.log('data submitted');
  };
  return (
    <div className='w-full xl:flex flex-col transition-all duration-150 h-full mb-20 bg-[#FFF] border-4'>
      <div className='px-4 py-2 rounded-t-md flex flex-row bg-[#3B2F3C]'>
      {/* <>{console.log(currentStep)}</> */}
        <h2 className='w-full text-[#FAFAFA] font-semibold tracking-wider'>I. UBICACION GEOGRÁFICA</h2>
      </div>
      <form action='' className='grid grid-cols-10 w-full border-2 rounded-md h-auto'>
        <div className='flex flex-col col-span-5 space-y-8 py-4 px-6 '>
          {formFields.map((field) => (
            <label key={field.name} className='font-semibold tracking-widest h-7 text-center text-xs'>
              {field.label}
              <input
                type={field.type}
                name={field.name}
                onChange={()=>{}}
                className='mb-3 focus:outline-none focus:border-b-blue-500 w-full h-7 border-b'
              />
              {errors[field.name] && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors[field.name]?.message}</span>}
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
      <div className='col-span-5'>

        <HdvButton />
      </div>
    </div>
  )
}
// #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C 
// 
export default HdvI