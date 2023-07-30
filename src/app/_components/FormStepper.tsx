'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
type IFormStep = {
  stepNames: string[];
  setCurrentStep: Dispatch<SetStateAction<number>>;
  scrollToForm: (index: number) => void;
};

const FormStepper: React.FC<IFormStep> = ({ setCurrentStep, stepNames, scrollToForm }) => {
  const [showAllSteps, setShowAllSteps] = useState(false);

  const handleClick = (index: number) => {
    setCurrentStep(index);
    scrollToForm(index);
  };

  const toggleShowAllSteps = () => {
    setShowAllSteps((prevShowAllSteps) => !prevShowAllSteps);
  };

  return (
    <div className='w-[95%] mt-16 h-28 py-2 bg-[#FAFAFA] rounded-md border-2'>
      <ol className="flex h-28  items-center w-full px-4 space-x-2 text-sm font-medium text-center text-gray-500  border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 overflow-x-auto">
        {stepNames.map((step: string, index: number) => (
          <div key={index} onClick={() => handleClick(index)} className={`${!showAllSteps && index > 2 ? 'hidden' : ''}`}>
            <li className="flex items-center text-blue-600 dark:text-blue-500">
              <span className="bg-[#fafafa] flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                {index + 1}
              </span>
              {step} <span className="hidden sm:inline-flex sm:ml-2">geog.</span>
              <svg
                className="w-3 h-3 ml-2 sm:ml-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
          </div>
        ))}
        {!showAllSteps ? stepNames.length > 4 && (
          <div onClick={toggleShowAllSteps} className="group h-full items-center flex cursor-pointer">
            <li className="flex items-center  text-blue-600 dark:text-blue-500">
              More
              <MoreHorizOutlinedIcon className="group-hover:hidden" />
              <svg
                className="w-3 h-3 py-4 ml-2 sm:ml-4 transition-opacity duration-200 group-hover:opacity-100 opacity-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
          </div>
        ):
        (
          <div onClick={toggleShowAllSteps} className="transition-all duration-150 group cursor-pointer">
            <li className="flex items-center text-slate-600 dark:text-blue-500">
              Resumir
              <MoreHorizOutlinedIcon className="group-hover:hidden" />
              <svg
                className={`w-3 h-3 ml-2 sm:ml-4 transition-opacity duration-200 transform ${showAllSteps && 'rotate-180'} group-hover:opacity-100 opacity-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
          </div>
        )
        }
      </ol>
    </div>
  );
};

export default FormStepper;




//  {/* Second Item */}
//       {/* <li className="flex items-center"
//       onClick={setCurrent}
//       >
//         <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
//           {number}
//         </span>
//         {name} <span className="hidden sm:inline-flex sm:ml-2">{longName}</span>
//         <svg
//           className="w-3 h-3 ml-2 sm:ml-4"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 12 10"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m7 9 4-4-4-4M1 9l4-4-4-4"
//           />
//         </svg>
//       </li> */}

//       {/* Third Item */}
//       <li className="flex items-center">
//         <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
//           3
//         </span>
//         Review
//       </li>
//       <li className="flex items-center">
//         <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          
//           <MoreHorizOutlinedIcon/>
//         </span>
//         Review
//       </li>
//     </ol>