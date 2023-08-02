// import React from 'react';
// import { useForm, Controller, useFormContext } from 'react-hook-form';
// import { Observaciones } from '../../../hdv';
// import { stepSecondToLast } from './HdvII';

// type FormFieldXIConfig = {
//   label: string;
//   name: keyof Observaciones;
//   type: string;
//   validation?: string | null;
// };

// // Define your form fields as an array of objects adhering to FormFieldXIConfig
// const formFields: FormFieldXIConfig[] = [
//   {
//     label: 'Field 1',
//     name: 'observacion1',
//     type: 'text',
//     validation: 'Field 1 is required',
//   },
//   {
//     label: 'Field 2',
//     name: 'observacion2',
//     type: 'text',
//     validation: 'Field 2 is required',
//   },
//   {
//     label: 'Field 3',
//     name: 'observacion3',
//     type: 'text',
//     validation: 'Field 3 is required',
//   },
//   {
//     label: 'Field 4',
//     name: 'observacion4',
//     type: 'text',
//     validation: 'Field 4 is required',
//   },
//   {
//     label: 'Field 5',
//     name: 'observacion5',
//     type: 'text',
//     validation: 'Field 5 is required',
//   },
//   // {
//   //   label: 'Field 6',
//   //   name: 'observacion6',
//   //   type: 'text',
//   //   validation: 'Field 6 is required',
//   // },
//   // Add more fields as needed
// ];

// // type FormValues: FormFieldXIConfig[] = {
// //   observacion1: string;
// //   observacion2: string;
// //   observacion3: string;
// //   observacion4: string;
// //   observacion5: string;
//   // observacion6: string;
//   // Add more fields as needed
// // };

// type FormValues = {
//   [K in keyof Observaciones]: string;
// };

// const HdvXI: React.FC<stepSecondToLast> = ({onSubmit}) => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     register, // Add the register function here
//   } = useForm<FormValues>(); // Use FormValues type here

//   const onSubmit = (data: FormValues) => {
//     console.log(data);
//     // Add your form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="grid grid-cols-5 gap-4">
//         {formFields.map((field, index) => (
//           <div key={index} className="h-full bottom-0 border-">
//             <label
//               className={`text-md font-bold tracking-wide text-center bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${
//                 errors[field.name] && 'text-red-500'
//               }`}
//             >
//               {field.label}
//               <input
//                 placeholder="Tu empresa S.A.S."
//                 className={`focus:border-blue-500 bottom-0 font-normal h-full focus:outline-none text-center text-sm pt-2 w-full  text-slate-500 mx-auto border-b border-[#0D202F]`}
//                 {...register(field.name, {
//                   required: `${field.validation}`,
//                 })}
//                 onChange={() => {}}
//               />
//               {errors[field.name] && (
//                 <span className="text-red-500 font-semibold text-center text-sm">
//                   {errors[field.name]?.message}
//                 </span>
//               )}
//             </label>
//           </div>
//         ))}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default HdvXI;
