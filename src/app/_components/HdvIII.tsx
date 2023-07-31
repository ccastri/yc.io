'use client'

import React from 'react'
import HdvButton from './HdvButton'
import {stepSecondToLast} from './HdvII'
import { DatePicker } from '@mui/x-date-pickers'
import { useField } from '@mui/x-date-pickers/internals'
type IDateConfig ={
   label: string,
   name: string,
   validation:string,
}
const HdvIII:React.FC<stepSecondToLast> = ({onChange}) => {
   // console.log(currentStep)
   const formFields: IDateConfig[] = [
    { label: 'AÑO DE FABRICACION', name: 'equipo', validation:'Este campo es obligatorio', },
    { label: 'FECHA DE COMPRA', name: 'marca', validation:'Este campo es obligatorio', },
   //  { label: 'MODELO', name: 'modelo', validation:'Este campo es obligatorio', },
    { label: 'FECHA DE INSTALACION N°', name: 'serie', validation:'Este campo es obligatorio', },
    { label: 'INICIO DE OPERACION', name: 'activo-fijo', validation:'Este campo es obligatorio', },
    { label: 'DIRECCION', name: 'registro-sanitario', validation:'Este campo es obligatorio', },
    { label: 'VENCIMIENTO DE GARANTIA', name: 'ubicacion', validation:'Este campo es obligatorio', },
  ];
  

  return (
    <div className='w-full md:flex h-full overflow-y-auto mb-20 bg-[#FFF]'>
    <div className='px-4 py-2 rounded-t-md flex flex-row bg-blue-400'>
      <h2 className ="w-full font-semibold tracking-wider text-[#fff] "> III. REGISTRO HISTORICO</h2>
      </div>
            <form action=""
            
            className='grid grid-cols-10 w-full border-2  rounded-md h-auto'
            >

      <div className=" col-span-10 space-y-8 py-4 px-6 ">
        <div className=' flex flex-wrap'  >
{formFields.map(field=>(
         <label 
         key={field.name}
         className='font-semibold tracking-widest h-7 text-center text-xs' 
         id={field.name}
         htmlFor=''
         >{field.label} 

        </label>
   ))}
        </div>
        </div>
        <HdvButton />   
          </form>
        
         </div>
    )
  }
  
  export default HdvIII
        {/* </div>
           {/* <div className=' flex flex-wrap'  >
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>

        <DatePicker 
        label= 'FECHA DE COMPRA     '
        key="datePicker2" onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex flex-wrap'>
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>

        <DatePicker  key="datePicker3" onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex w-full' >
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>

        <DatePicker  key="datePicker4" onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex flex-wrap' >
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>

        <DatePicker  key="datePicker5" onChange={()=>{onChange}}/>
        
        </label>
        </div>
           <div className=' flex flex-wrap'  >
        <label className='font-semibold tracking-widest h-7 text-center pt-2 text-xs'>

        
        <DatePicker key="datePicker6" onChange={()=>{onChange}}/>
        </label>
        </div> */}

      //   <DatePicker 
      //   //  label={field.label}
           
      //       // Use the 'name' field as the unique key
      //      // name={field.name} // Pass the 'name' field as the 'name' prop
      //      // value={field.name} // You may want to set a value or leave it empty based on your needs
      //   //   defaultValue={dayjs('2022-04-17')} 
      //   onChange={()=>{onChange}}/>