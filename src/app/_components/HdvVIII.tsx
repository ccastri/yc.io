import React, { useState } from 'react';
import { stepSecondToLast } from './HdvII';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import HdvButton from './HdvButton';
import { Controller, useFormContext } from 'react-hook-form';
import { ClasificacionNivelRiesgo, PeriodicidadMantenimiento } from '../../../hdv';

const HdvVII: React.FC<stepSecondToLast> = ({ onChange }) => {
const { register, formState:{errors} } = useFormContext<PeriodicidadMantenimiento>();



  return (
    <div className='xl:flex flex-row py-6'>
      <div className='w-full xl:flex border-4 '>
        {/* ... (existing code) */}
        <h2 className='bg-blue-200 w-64 text-center p-6 text-3xl text-[#fafafa] col-span-10'>VII. CLASIFICACION SEGUN EL NIVEL DE RIESGO</h2>
        <div className='py-12 border-2 space-y-6 px-8'>
          <div className='px-12 space-y-8'>
            <div  className={`border-2 w-44 h-full items-center bg-slate-100 p-4 flex justify-between`}>
              {/* <span>Clasificación</span> */}
              <label className='p-2 h-20'>
                <select
                  {...register('periodicidad', { required: 'Este campo es requerido.' })}
                >
                  <option value=''>Seleccione</option>
                  <option value='TRIMESTRAL'>TRIMESTRAL</option>
                  <option value='CUATRIMESTRAL'>CUATRIMESTRAL</option>
                  <option value='SEMESTRAL'>SEMESTRAL</option>
                  <option value='ANUAL'>ANUAL</option>
                  {/* <option value=''>Seleccione</option> */}
                  
                </select>
                 {errors.periodicidad &&(
                  <span className="text-red-500 font-semibold text-center text-sm">
                    {errors.periodicidad.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className='w-full right-4'>
            <HdvButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HdvVII;
