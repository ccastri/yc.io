'use client'
import React, { useState } from 'react'
import HdvButton from './HdvButton'
import { stepSecondToLast } from './HdvII'
import { ValidationRule, useFormContext } from 'react-hook-form'
import { RegistroTecnicoFuncionamiento } from '../../../hdv'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

{/* V.REGISTRO TECNICO DE FUNCIONAMIENTO Y VI. CLASIFICACION BIOMEDICA */}
const HdvV :React.FC<stepSecondToLast> = ({onChange}) => {
  const [corriente, setCorriente] = useState(0);
  const [frecuencia, setFrecuencia] = useState(60);
  const [humedad, setHumedad] = useState(22);
  const [presion, setPresion] = useState(100);
  const [tension, setTension] = useState(12);
  const minVal = '0'
  const maxVal = '360'
  const validateRange = (value: string): true | string => {
  if (value === '0') {
    return 'Este campo es requerido'; // Return the error message as a string
  }
  return true; // Validation passed
};
  const { register, handleSubmit, formState: { errors } } = useFormContext<RegistroTecnicoFuncionamiento>();
  console.log(errors.rangoVoltaje)
  return (

    <div className=' xl:flex py-6'>

          <div className='bg-blue-200 w-full'>
            <h2 className=' w-44 col-span-10'>V. REGISTRO TECNICO DE FUNCIONAMIENTO</h2>
        </div>
            <div className='p-6 border-2 px-12 border-black'>
        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          RANGO DE CORRIENTE
          <input
            type="range"
            value={corriente}
            {...register(`rangoCorriente`, {
              validate: validateRange,
            })}
            onChange={(e) => setCorriente(parseInt(e.target.value))}
            min={minVal}
            max={maxVal}
            className={`w-full h-2 bg-gray-200 rounded-lg ${errors.rangoCorriente && 'border-red rounded-sm'} appearance-none cursor-pointer dark:bg-gray-700`}
          />
          <div className="flex justify-between">
            {/* ... (existing code) */}
          </div>
          {/* Display error message */}
          {errors.rangoCorriente && (
            <span className='text-red-500 font-semibold text-center text-sm'>
              {errors.rangoCorriente.message} {/* Access the error message */}
            </span>
          )}
        </label>
      <label htmlFor="default-range"   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {/* Default range</label> */}
RANGO DE FRECUENCIA
<input  
type="range" 
value={frecuencia} 
 {...register(`rangoFrecuencia`, {
                validate: validateRange ,
              })}
onChange={(e) => setFrecuencia(parseInt(e.target.value))} 
min={minVal} // Replace 'minValue' with the minimum value you want to set
max={maxVal} // Replace 'maxValue' with the maximum value you want to set
className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
<div className="flex justify-between">
  <span>Min: {minVal}</span>
  <span>frecuencia Value: {frecuencia}</span> {/* This will display the current value */}
  <span>Max: {maxVal}</span>
</div>
              {errors.rangoFrecuencia && (
                <span className='text-red-500 font-semibold text-center text-sm'>
                  {errors.rangoFrecuencia?.message}
                </span>
              )}
        </label>
      <label htmlFor="default-range"   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {/* Default range</label> */}
RANGO DE HUMEDAD
<input  
type="range" 
value={humedad} 
 {...register(`rangoHumedad`, {
                validate: validateRange ,
              })}
onChange={(e) => setHumedad(parseInt(e.target.value))} 
min={minVal} // Replace 'minValue' with the minimum value you want to set
max={maxVal} // Replace 'maxValue' with the maximum value you want to set
className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
<div className="flex justify-between">
  <span>Min: {minVal}</span>
  <span>Valor de Humedad: {humedad}</span> {/* This will display the current value */}
  <span>Max: {maxVal}</span>
</div>
              {errors.rangoHumedad && (
                <span className='text-red-500 font-semibold text-center text-sm'>
                  {errors.rangoHumedad?.message}
                </span>
              )}
        </label>
      <label htmlFor="default-range"   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {/* Default range</label> */}
RANGO DE TENSION
<input  
type="range" 
value={tension} 
 {...register(`rangoVoltaje`, {
              validate: validateRange ,
              })}
onChange={(e) => setTension(parseInt(e.target.value))} 
min={minVal} // Replace 'minValue' with the minimum value you want to set
max={maxVal} // Replace 'maxValue' with the maximum value you want to set
className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
<div className="flex justify-between">
  <span>Min: {minVal}</span>
  <span>Current Value: {tension}</span> {/* This will display the current value */}
  <span>Max: {maxVal}</span>
</div>
              {errors.rangoVoltaje && (
                <span className='text-red-500 font-semibold text-center text-sm'>
                  {errors.rangoVoltaje?.message}
                </span>
              )}
        </label>
      <label htmlFor="default-range"   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {/* Default range</label> */}
RANGO DE PRESION
<input  
type="range" 
value={presion} 
 {...register(`rangoPresion`, {
                validate: validateRange ,
              })}
onChange={(e) => setPresion(parseInt(e.target.value))} 
min={minVal} // Replace 'minValue' with the minimum value you want to set
max={maxVal} // Replace 'maxValue' with the maximum value you want to set
className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
<div className="flex justify-between">
  <span>Min: {minVal}</span>
  <span>Valor de presion: {presion}</span> {/* This will display the current value */}
  <span>Max: {maxVal}</span>
</div>
              {errors.rangoPresion && (
                <span className='text-red-500 font-semibold text-center text-sm'>
                  {errors.rangoPresion?.message}
                </span>
              )}
        </label>
            <div className='w-full flex right-4'>

          <HdvButton title='Anterior'/>
          <HdvButton/>
            </div>
            </div>
          </div>

)
}
export default HdvV