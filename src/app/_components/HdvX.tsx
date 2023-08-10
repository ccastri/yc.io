import React, { useState } from 'react';
import { stepSecondToLast } from './HdvII';
import { useFormCurrentStep } from '../context/useFormStepContext';

const HdvX: React.FC<stepSecondToLast> = ({ onChange }) => {
  const {inputFields, setInputFields} = useFormCurrentStep() // Initial input fields with an empty string
console.log(inputFields)
  // Function to handle adding a new input field
  const addInputField = () => {
       inputFields.length <= 5 && setInputFields([...inputFields, '']);
  };

  // Function to handle changing the input value for a specific field
  const handleInputChange = (index: number, value: string) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = value;
    setInputFields(newInputFields) ;
  };

  // Function to handle removing an input field
  const removeInputField = (index: number) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <div className='h-full'>
      <h2 className='bg-blue-200 col-span-10'>X. ACCESORIOS</h2>
      <div className='col-span-5 border-2 border-black h-auto'>
        {inputFields.map((value, index) => (
          <div key={index} className="flex">
            <input
              type="text"
              className='bg-slate-100 w-full h-8 border border-black mb-2 mr-2'
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <span
              onClick={() => removeInputField(index)}
              className="bg-red-500 text-white px-4 py-2 mt-2"
            >
              Remove
            </span>
          </div>
        ))}
        <span onClick={addInputField} className={`bg-blue-500 text-white px-4 py-2 mt-2 ${inputFields.length > 5 ?'opacity-0':'opacity-100'}`}>
          Add Input Field
        </span>
      </div>
    </div>
  );
};

export default HdvX;
