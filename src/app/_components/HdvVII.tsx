import React, { useState } from 'react';
import { stepSecondToLast } from './HdvII';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import HdvButton from './HdvButton';

const HdvVII: React.FC<stepSecondToLast> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState('CLASE I');

  const handleOptionToggle = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex flex-row py-6'>
      <div className='grid grid-cols-10 xl:flex w-auto border-2 border-black'>
        {/* ... (existing code) */}
        <h2 className='bg-blue-200 col-span-10'>VII. CLASIFICACION SEGUN EL NIVEL DE RIESGO</h2>
        <div className='col-span-10 py-12 border-2 px-12'>
          <div className='px-12'>
            {/* Option 1 */}
            <div
              className={`border-2 w-44 items-center bg-slate-100 p-4 flex justify-between ${
                selectedOption === 'CLASE I' ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
              <span>CLASE I</span>
              <button
                onClick={() => handleOptionToggle('CLASE I')}
                className={`p-2 ${selectedOption === 'CLASE I' ? 'text-green-600' : 'text-red-600'}`}
              >
                {selectedOption === 'CLASE I' ? <ToggleOnIcon /> : <ToggleOffIcon />}
              </button>
            </div>

            {/* Option 2 */}
            <div
              className={`border-2 w-44 items-center bg-slate-100 p-4 flex justify-between ${
                selectedOption === 'CLASE II' ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
              <span>CLASE II</span>
              <button
                onClick={() => handleOptionToggle('CLASE II')}
                className={`p-2 ${selectedOption === 'CLASE II' ? 'text-green-600' : 'text-red-600'}`}
              >
                {selectedOption === 'CLASE II' ? <ToggleOnIcon /> : <ToggleOffIcon />}
              </button>
            </div>

            {/* Option 3 */}
            <div
              className={`border-2 w-44 items-center bg-slate-100 p-4 flex justify-between ${
                selectedOption === 'CLASE III' ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
              <span>CLASE III</span>
              <button
                onClick={() => handleOptionToggle('CLASE III')}
                className={`p-2 ${selectedOption === 'CLASE III' ? 'text-green-600' : 'text-red-600'}`}
              >
                {selectedOption === 'CLASE III' ? <ToggleOnIcon /> : <ToggleOffIcon />}
              </button>
            </div>
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
