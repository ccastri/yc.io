import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormContext, FieldErrors, RegisterOptions, ValidationRule } from 'react-hook-form';
import { useFormCurrentStep } from '../context/useFormStepContext';
// import { RegisterForm, User } from './RegisterForm';
interface FileUploaderProps {
  onUpload: (files: File[]) => void;

}


export const FileUploader = ({ onUpload}:FileUploaderProps) => {
// console.log(onUpload)
  const {files, setFiles} = useFormCurrentStep()
  const {register, formState:{errors}} = useFormContext()

  
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
      onUpload([...files, ...acceptedFiles]);
    },
    [files, onUpload,]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className=' bg-[#747a80] relative  h-[50%] flex flex-col items-center opacity-70 rounded-xl cursor-pointer transition-all duration-125 transform hover:ease-in-out hover:scale-105 hover:opacity-100'>
      <div {...getRootProps() }
      className='flex flex-col  justify-center px-8 space-y-6 items-center h-full '
      >
        <input
          {...getInputProps()}
          // {...register('deviceImg',{
          //   // required:'Imagen es requerida',
          //   validate: value => files.length > 0 || 'Seleccione una imagen'
          // })}
          className="h-full border-2 border-red-600"
        />
        <span 
        className=' border-2 border-[#FFFFFF] rounded-full my-0 p-1'
        >
          <CloudUploadIcon sx={{fontSize:'30px'}} 
          className='text-white  items-center rounded-full border-gray-400'
          />
        </span>
        <h2 
        className='font-semibold text-xs text-center text-white opacity-80'
        >
          Presione o arrastre para añadir archivos
        </h2>
      </div>
  </div>
  );
};