import React from 'react'
import { stepSecondToLast } from './HdvII'
import { useFormContext } from 'react-hook-form'
import { RequiereCalibracion } from '../../../hdv'

const HdvIX:React.FC<stepSecondToLast> = ({onChange}) => {
  const {register, formState:{errors}} = useFormContext<RequiereCalibracion>()
  return (
    <div>
               <h2 className='bg-blue-200 h-12'> IX. REQUIERE CALIBRACION</h2>
     <div className=' border-2 border-black  bg-slate-100'>
       <label className=''>
           <select 
           id=""
           {...register('calibracion',{
            required: 'Este campo es obligatorio'
           })}
           className='w-full'>
             <option value="">Seleccione</option>
             <option value="1">SI</option>
             <option value="2">NO</option>
             <option value="3">ANUAL</option>
           </select>
           {errors.calibracion && (
           <span 
           className="text-red-500 font-semibold text-center text-sm"
           >
            {errors.calibracion.message}
           </span> )}
       </label>
    </div>
    </div>
  )
}

export default HdvIX