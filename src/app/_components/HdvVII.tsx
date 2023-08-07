import React from 'react';
import { useFormContext } from 'react-hook-form';
import HdvButton from './HdvButton';
import { stepSecondToLast } from './HdvII';
import { ClasificacionNivelRiesgo } from '../../../hdv';
import { FieldError } from 'react-hook-form';

type Option = {
  value: keyof ClasificacionNivelRiesgo;
  label: string;
};

const HdvVII: React.FC<stepSecondToLast> = ({ onChange }) => {
  const options: Option[] = [
    { value: 'CLASEI', label: 'CLASE I' },
    { value: 'CLASEIIA', label: 'CLASE IIA' },
    { value: 'CLASEIIB', label: 'CLASE IIB' },
    { value: 'CLASEIII', label: 'CLASE III' },
  ];
  const { register, formState: { errors } } = useFormContext();

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
                  {...register('clasificacion', { required: 'Este campo es requerido.' })}
                >
                  <option value=''>Seleccione</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                 {errors.clasificacion && typeof errors.clasificacion === 'string' && (
                  <span className="text-red-500 font-semibold text-center text-sm">
                    {errors.clasificacion.message}
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
