'use client'
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FileUploader } from './DragAndDrop';
import HdvButton from './HdvButton';
import { UbicacionGeograficaData } from '../../../hdv';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
interface HdvIProps {
  onChange?:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>void;
  onSubmit?: ()=>void;
  handleClick?:(index:number)=>void
}
export type FormFieldConfig = {
  label: string;
  name: keyof UbicacionGeograficaData 
  type: string;
  validation?: string | null;
}

const HdvI:React.FC<HdvIProps> = ({onChange}) => {
  const formFields: FormFieldConfig[] = [
    { label: 'DEPARTAMENTO', name: 'departamento', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'MUNICIPIO', name: 'municipio', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'ENTIDAD', name: 'entidad', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'CORREO', name: 'correo', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'DIRECCION', name: 'direccion', type: 'text', validation:'Este campo es obligatorio'  },
    { label: 'TELEFONO', name: 'telefono', type: 'text', validation:'Este campo es obligatorio'  },
  ];

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { register, handleSubmit, formState: { errors } } = useFormContext<UbicacionGeograficaData>();

  const handleUpload = (files: File[]) => {
    setSelectedFiles(files);
  };

  return (
    <div className= 'mb-20 border-4 rounded-md'>
    <div className='w-full xl:flex   transition-all duration-150 h-full  bg-[#FFF] border-b-4'>
      <div className='p-6 space-x-6 xl:space-y-6 items-center rounded-t-md flex  flex-row xl:flex-col bg-[#3B2F3C]'>
        <span className='p-4 h-28 w-28 bg-[#C29A95]  rounded-full border-slate-600 border-5 text-[#fafafa'><LocationCityOutlinedIcon style={{ color: '#FFFFFF', justifyContent:'center', textAlign:'center'}} sx= {{fontSize:'80px'}}/></span>
        <h2 className='w-full h-auto text-3xl pl-6 flex-row text-[#FAFAFA] font-semibold mt-2 tracking-wider'>I. UBICACION GEOGRÁFICA </h2>
      </div>
      <div  className='grid grid-cols-10 w-full border-2 rounded-md pb-8 h-auto'>
        <div className='flex flex-col col-span-5 space-y-4 py-2  px-6 '>
          {formFields.map((field) => (
             <label key={field.name} className={`text-md font-bold tracking-wide  bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${errors[field.name] && 'text-red-500'}`}>
            {field.label}
            <input
              placeholder="Tu empresa S.A.S."
              className={`focus:border-blue-500 bottom-0 font-normal h-full focus:outline-none text-center text-sm pt-2 w-full  text-slate-500 mx-auto border-b border-[#0D202F]`}
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
            <div key={file.name} className='border-2 w-full '>
              <Image 
              // onClick={()=>handleUpload}
              className='w-64 h-44 ' src={URL.createObjectURL(file)} alt={file.name} width={256} height={256} />
              <ul className='flex flex-col text-xs my-auto text-center h-full rounded-xl flex-wrap'>
                {file.name}-{file.size / 1000}kb{' '}
              </ul>
            </div>
          ))}
          {errors['deviceImg'] && (
           <span className="text-red-500 font-semibold text-center text-sm">
             {errors['deviceImg']?.message}
           </span>
         )}
        </div>
        {/* <div className='col-span-5' /> */}
      </div>
    </div>
      <div className='w-full justify-end flex flex-row bg-[#fafafa]'>


        <HdvButton />

      </div>
      </div>
  )
}
// #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C 
// 
export default HdvI