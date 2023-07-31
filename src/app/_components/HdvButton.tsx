import React from 'react';
import { useFormCurrentStep } from '../context/useFormStepContext';

type IFormButton = {
  title?: string;
};

const HdvButton: React.FC<IFormButton> = ({ title }) => {
  const { formStep, nextFormStep, scrollToForm, prevFormStep } = useFormCurrentStep();

  const handleNextClick = () => {
    nextFormStep();
  };

  const handlePrevClick = () => {
    prevFormStep();
  };

  return (
    <div className="col-span-5 items-end p-4 h-20">
      <button
        className="w-full col-span-5 hover:bg-[#123CD0] bg-[#3B2F3C] hover:opacity-100 opacity-60  transform hover:scale-105 hover:ease-in-out px-4 py-2 rounded-md text-white transition-all duration-200  tracking-widest h-12"
        onClick={title && title.includes('Anterior') ? handlePrevClick : handleNextClick}
      >
        {title || (title && title.includes('Anterior') ? 'Anterior' : 'Siguiente')}
      </button>
    </div>
  );
};

export default HdvButton;