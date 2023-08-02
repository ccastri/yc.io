import React, { useState } from 'react';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { DocumentOption, DocumentosSoportes } from '../../../hdv';
import { stepSecondToLast } from './HdvII';
import { useFormCurrentStep } from '../context/useFormStepContext';

const HdvXI: React.FC<stepSecondToLast> = ({}) => {
  const { selectedOptions, setSelectedOptions } = useFormCurrentStep()
// const { control, handleSubmit } = useFormContext<DocumentosSoportes>()
  const handleOptionToggle = (field: keyof DocumentosSoportes, option: DocumentOption) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [field]: prevOptions[field] === option ? null : option,
    }));
  };

  const options = Object.keys(selectedOptions);

  return (
    <div className='w-full px-12 py-6 xl:flex'>
     <div className='  bg-[#E0C4A0] p-6'>
      <h2 className='text-xl w-28 font-semibold'>XII. Lista de chequeo de documentos soportes anexos a la hoja de vida</h2>
     </div>
    <table className="border-collapse border border-black">
      <thead>
        <tr>
          <th className="border border-black p-2">Item</th>
          <th className="border border-black p-2 text-center">AX</th>
          <th className="border border-black p-2 text-center">NAX</th>
          <th className="border border-black p-2 text-center">NA</th>
          <th className="border border-black p-2 text-center">NT</th>
          <th className="border border-black p-2 text-center">NR</th>
        </tr>
      </thead>
      <tbody>
        {options.map((fieldName) => (
          <tr key={fieldName}>
            <td className="border border-black p-2">{fieldName}</td>
            <td
            className={`p-2 ${selectedOptions[fieldName as keyof DocumentosSoportes] === 'AX' ? 'text-green-600 bg-green-400' : 'text-red-600 bg-red-400'}`}>

                  <span className='p-2'
                   onClick={() => handleOptionToggle(fieldName as keyof DocumentosSoportes, 'AX')}>

                {selectedOptions[fieldName as keyof DocumentosSoportes] === 'AX' ? <ToggleOnIcon /> : <ToggleOffIcon />}
                  </span>
              
            </td>
            <td
            className={`p-2 ${selectedOptions[fieldName as keyof DocumentosSoportes] === 'NT' ? 'text-green-600 bg-green-400' : 'text-red-600 bg-red-400'}`}>

                  <span className='p-2'
                   onClick={() => handleOptionToggle(fieldName as keyof DocumentosSoportes, 'NT')}>

                {selectedOptions[fieldName as keyof DocumentosSoportes] === 'NT' ? <ToggleOnIcon /> : <ToggleOffIcon />}
                  </span>
            </td>
        <td
            className={`p-2 ${selectedOptions[fieldName as keyof DocumentosSoportes] === 'NAX' ? 'text-green-600 bg-green-400' : 'text-red-600 bg-red-400'}`}>

                  <span className='p-2'
                   onClick={() => handleOptionToggle(fieldName as keyof DocumentosSoportes, 'NAX')}>

                {selectedOptions[fieldName as keyof DocumentosSoportes] === 'NAX' ? <ToggleOnIcon /> : <ToggleOffIcon />}
                  </span>
            </td>
             <td
            className={`p-2 ${selectedOptions[fieldName as keyof DocumentosSoportes] === 'NA' ? 'text-green-600 bg-green-400' : 'text-red-600 bg-red-400'}`}>

                  <span className='p-2'
                   onClick={() => handleOptionToggle(fieldName as keyof DocumentosSoportes, 'NA')}>

                {selectedOptions[fieldName as keyof DocumentosSoportes] === 'NA' ? <ToggleOnIcon /> : <ToggleOffIcon />}
                  </span>
            </td>
            <td
            className={`p-2 ${selectedOptions[fieldName as keyof DocumentosSoportes] === 'NR' ? 'text-green-600 bg-green-400' : 'text-red-600 bg-red-400'}`}>

                  <span className='p-2'
                   onClick={() => handleOptionToggle(fieldName as keyof DocumentosSoportes, 'NR')}>

                {selectedOptions[fieldName as keyof DocumentosSoportes] === 'NR' ? <ToggleOnIcon /> : <ToggleOffIcon />}
                  </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
                </div>
  );
};

export default HdvXI;
  