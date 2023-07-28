'use client'
import React, { useState } from 'react'
import {FileUploader} from './DragAndDrop'
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
const HdvI = () => {
   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // const { register } = useFormContext();

    const handleUpload = (files: File[]) => {
    setSelectedFiles(files);
  };

    const handleSubmit = (data: FormData) => {
    // Handle form submission here
    console.log('data submited')
  };
    return (
        <div className='w-full h-full overflow-y-auto mb-20 bg-[#FFF]'>
            <form action=""
            className='grid grid-cols-10 w-full border-2  rounded-md h-auto'
            >

      <div className=" col-span-5 space-y-8 py-4 px-6 ">
        <label className='font-semibold tracking-widest h-7 text-center text-xs'>DEPARTAMENTO
        
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full h-7 border rounded-md' />
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>MUNICIPIO
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full h-7 border rounded-md'/>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>ENTIDAD
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full h-7 border rounded-md'/>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>CORREO
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full h-7 border rounded-md'/>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>DIRECCION
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full h-7 border rounded-md'/>
        
        </label>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>TELEFONO
        <input type="text" className='mt-1 mb-3 bg-slate-100 focus:outline-none focus:border-blue-500 w-full h-7 border rounded-md'/>
        
        </label>
      </div>
      <div className="col-span-5 h-full p-4 space-y-2  ">
        <FileUploader onUpload={handleUpload}/>
        {selectedFiles.map((file) => (
          <div key={file.name} className=' border-2'>
        <Image className=' h-auto w-full' src={URL.createObjectURL(file)} alt={file.name} width={100} height={30} />
        <ul className='flex flex-col  text-xs my-auto text-center  h-full rounded-xl flex-wrap'>{file.name}-{file.size/1000}kb </ul>
          </div>
        )
        )}
      </div>
        <div className='col-span-5'/>
    <div className="col-span-5 items-end p-4 h-20">
        <button className='w-full col-span-5  bg-[#00619E] hover:bg-[#747a80] hover:opacity-100 opacity-60  transform hover:scale-105 hover:ease-in-out px-2 py-2 rounded-md text-white transition-all duration-200  h-12'>Siguiente</button>
            </div>
        </form>
    </div>
  )
}
// #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C 
// 
export default HdvI