import React from 'react'
type IFormButton ={
  
  onSubmit?: ()=>void;
  nextStep?: ()=>void;
  prevStep?: ()=>void;
  title?: string;
  currentStep?: number;
}
const HdvButton:React.FC<IFormButton> = ({onSubmit, currentStep, title, nextStep, prevStep}) => {
  console.log(currentStep)
  return (
    <div className="col-span-5 items-end p-4 h-20">
        <button 
        className='  w-full col-span-5 hover:bg-[#123CD0] bg-[#3B2F3C] hover:opacity-100 opacity-60  transform hover:scale-105 hover:ease-in-out px-4 py-2 rounded-md text-white transition-all duration-200  tracking-widest h-12'
        onClick={onSubmit || nextStep || prevStep}
        >{title? `${ currentStep!+1}` : `siguiente: ${ currentStep!+1}` }</button>
    </div>
  )
}

export default HdvButton