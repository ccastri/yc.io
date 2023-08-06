import React from 'react'
import { stepSecondToLast } from './HdvII'

const HdvIX:React.FC<stepSecondToLast> = ({onChange}) => {
  return (
    <div>
               <h2 className='bg-blue-200 h-12'> IX. REQUIERE CALIBRACION</h2>
     <div className=' border-2 border-black  bg-slate-100'>
       <label className=''>
           <select name="" id="" className='w-full'>
             <option value="">Seleccione</option>
             <option value="1">SI</option>
             <option value="2">NO</option>
             <option value="3">ANUAL</option>
           </select>
       </label>
    </div>
    </div>
  )
}

export default HdvIX