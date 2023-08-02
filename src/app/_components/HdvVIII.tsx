import React, { useState } from 'react';
import { stepSecondToLast } from './HdvII';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import HdvButton from './HdvButton';
import { Controller, useFormContext } from 'react-hook-form';
import { ClasificacionNivelRiesgo, PeriodicidadMantenimiento } from '../../../hdv';

const HdvVII: React.FC<stepSecondToLast> = ({ onChange }) => {
const { control } = useFormContext<ClasificacionNivelRiesgo>();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({
    claseI: false,
    claseIA: false,
    claseIIB: false,
    claseIII: false,
  });
  

  const handleOptionToggle = (key: keyof ClasificacionNivelRiesgo) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
 <div className='flex flex-row py-6'>
      <div className='grid grid-cols-10 xl:flex w-auto border-2 border-black'>
        {/* ... (existing code) */}
        <h2 className='bg-blue-200 col-span-10'>VIII. CLASIFICACION SEGUN EL NIVEL DE RIESGO</h2>
        <div className='col-span-10 py-12 border-2 px-12'>
          <div className='px-12'>
             {/* {toggleButtonOptions.map((option) => ( */}
 <Controller
              name="claseI" // Set the name to "claseI" from ClasificacionNivelRiesgo
              control={control}
              defaultValue={selectedOptions.claseI} // Use the value from selectedOptions for defaultValue
              render={({ field }) => (
                <div
                  className={`border-2 w-44 items-center bg-slate-100 p-4 flex justify-between ${
                    field.value ? 'bg-green-200' : 'bg-red-200'
                  }`}
                >
                  <span>CLASE I</span>
                  <label htmlFor="">
                    <span
                      onClick={() => {
                        handleOptionToggle('claseI'); // Pass the key corresponding to "claseI"
                        field.onChange(!field.value); // Manually update the form value
                      }}
                      className={`p-2 ${field.value ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {field.value ? <ToggleOnIcon /> : <ToggleOffIcon />}
                    </span>
                  </label>
                </div>
              )}
            />
          </div>
        </div>
        <div className='w-full right-4'>
          <HdvButton />
        </div>
      </div>
    </div>
  );
};

export default HdvVII;
