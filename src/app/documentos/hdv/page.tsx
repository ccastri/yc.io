// 'use client'
// import { DatePicker } from '@mui/x-date-pickers'
// import React from 'react'

// const page = () => {
//   return (
//     // Header
//     <>
//     <div className='flex mt-16  w-full'>
//     <div className='grid h-full grid-cols-10 w-full border-2 border-black'>
//       <div className='col-span-3 h-full border-2 border-black'>
//         <h1>LOGO DE LA EMPRESA</h1>
//       </div>
//       <div className='h-28 col-span-7 border-2 border-black'>
//         <div className='flex flex-col h-full w-full'>
//           <div className='border-2 h-8 w-full border-slate-300'><h1>Hoja de Vida</h1></div>
//           <div className='border-2 h-20 w-full border-slate-300 grid grid-cols-7'>
//             <div className='flex flex-col border-2 col-span-2 border-black h-full w-full'>
//               <p className='text-xs border-b-2 border-black'>F-GRCU-052</p>
//               <p className='text-xs text-center my-auto'>VIGENTE</p>
//             </div>
//             <div className='col-span-3 w-full h-full flex px-2 border-2 border-black'>
//               <h2 className='text-center my-auto'> Gestion de recursos</h2>
//             </div>
//             <div className='flex flex-col border-2 col-span-2 border-black'>
//               <p className='text-xs border border-black'>VERSION 2.0</p>
//               <p className='text-xs pt-8 text-center h-full'>PAG. 1 DE 2</p>
//             </div>
//           </div>
          
//         </div>
//       </div>
//       </div>  
      
//     </div>
//     {/*1. Ubicacion geografica */}
//     <div className='grid grid-cols-10 w-full border-2 border-black h-44'>
//       <div className="border-2 col-span-3 border-x-black">
//         <p className='border-b-2 h-7 border-black text-xs'>DEPARTAMENTO</p>
//         <p className='border-b-2 h-7 border-black text-xs'>MUNICIPIO</p>
//         <p className='border-b-2 h-7 border-black text-xs'>ENTIDAD</p>
//         <p className='border-b-2 h-7 border-black text-xs'>CORREO</p>
//         <p className='border-b-2 h-7 border-black text-xs'>DIRECCION</p>
//         <p className='h-7 text-xs'>TELEFONO</p>
//       </div>
//       <div className="border-2 border-x-black col-span-4 items-center">
//         <input type="text" className='bg-slate-100 w-full h-7 border border-black' />
//         <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
//       </div>
//       <div className="border-2 border-x-black col-span-3">
//         <p>drag and drop para img</p>
//       </div>
//     </div>
//     {/* II. Informcion general y III. Regsitro historico */}
//       <>
//       <div className='px-4 flex flex-row bg-blue-400'>

//       <h2 className ="w-[42%]"> II. INFORMACION GENERAL</h2>
//       <h2 className ="w-[62%]">III. REGISTRO HISTORICO</h2>
//       </div>
//     <div className='grid grid-cols-10 w-full border-2 border-black h-58'>
//       <div className="border-2 col-span-2 border-x-black">
//         <p className='border-b-2 h-11 border-black text-xs'>EQUIPO:</p>
//         <p className='border-b-2 h-11 border-black text-xs'>MARCA:</p>
//         <p className='border-b-2 h-11 border-black text-xs'>MODELO:</p>
//         <p className='border-b-2 h-11 border-black text-xs'>SERIE N°:</p>
//         <p className='border-b-2 h-11 border-black text-xs'>ACTIVO FIJO:</p>
//         <p className='border-b-2 h-11 border-black text-xs'>REGISTRO SANITARIO:</p>
//         <p className='border-b-2 h-11 border-black text-xs'>UBICACION:</p>
//         <p className='h-11 text-xs'>PROVEEDOR:</p>
//       </div>
//       <div className="border-2 border-x-black col-span-2 items-center">
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black' />
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//         <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
//       </div>

//       <div className='grid grid-cols-6 col-span-6'>
//         {/* <div className='flex flex-col border-2'>
//           <label>Forma de adquisicion</label>
//           <select className='w-36 ml-6 h-8' name="" id="">
//             <option value="Compra">Compra</option>
//             <option value="Donacion">Donacion</option>
//             <option value="Incautacion">Incautacion</option>
//           </select>
//         </div> */}
//       <div className="border-2 border-x-black col-span-3 w-full">
//         <h3>DOCUMENTO</h3>
//         {/* <div className='flex flex-row'> */}
//           <h2 className='col-span-2 h-16 border-2 border-black'>Año de fabricacion</h2>
//           {/* <input type="text" className='col-span-1' /> */}
//         {/* </div> */}
//         <h2 className='col-span-2 h-16 border-2 border-black'>FECHA DE COMPRA</h2>
//         <h2 className='col-span-2 h-16 border-2 border-black'>FECHA DE INSTALACION</h2>
//         <h2 className='col-span-2 h-16 border-2 border-black'>INICIO DE OPERACION</h2>
//         <h2 className='col-span-2 h-16 '>VENCIMIENTO DE GARANTIA</h2>
//       </div>
//       <div className="border-2 border-x-black col-span-3 w-full">
//         <h3>FACTURA</h3>
        
//         <div className='h-16 border-2 border-black '>
//        <DatePicker/>

//         </div>
//         <div className='h-16 my-0 border-2 border-black'>
//        <DatePicker/>

//         </div>
//         <div className='h-16 my-0 border-2 border-black'>
//        <DatePicker/>

//         </div>
//         <div className='h-16 my-0 border-2 border-black'>
//        <DatePicker/>

//         </div>
//         <div className='h-16'>
//        <DatePicker/>

//         </div>
//       </div>
//     </div>
//       </div>
//       </>
//       {/* IV. Registro tecnico de instalacion */}
//       <div className='h-32'>
//       <h2 className='w-full text-center bg-blue-200'>IV.REGISTRO TECNICO DE INSTALACION</h2>
//       <div className='grid h-20 grid-cols-10'>
        
//         <div className='col-span-3 border-2 border-black flex'>
//           <div className='col-span-2 w-full'>

//           <p className="border-r-2 border-t-2 w-20 h-8 border-black text-xs">Tension (V)</p>
//           <p className="border-r-2 border-t-2 w-20 h-8 border-black text-xs">POTENCIA (W)</p>
//           <p className="border-r-2 border-y-2 w-20 h-10 border-black text-xs">Presion (mmHg)</p>
//           </div>
//         <div className='col-span-1 border-2 border-black'>

//       <input type="text" className='bg-slate-100 w-16 h-8 border border-black' />
//       <input type="text" className='bg-slate-100 w-16 h-8 border border-black' />
//       <input type="text" className='bg-slate-100 w-16 h-9 border border-black' />
//         </div>
//         </div>

//         <div className='col-span-7 border-2 border-black flex'>
//           <div className='col-span-3 border-2 border-black h-full w-full'>

//           <p className="border-r-2 border-t-2 w-28 h-8 border-black text-xs">CORRIENTE (A)</p>
//           <p className="border-r-2 border-t-2 w-28 h-8 border-black text-xs">FRECUENCIA (HZ)</p>
//           <p className="border-r-2 border-y-2 w-28 border-black text-xs">RANGO DE TEMPERATURA</p>
//           </div>
//         <div className='col-span-1 border-2 border-black'>

//       <input type="text" className='bg-slate-100 w-20 h-8 border border-black' />
//       <input type="text" className='bg-slate-100 w-20 h-8 border border-black' />
//       <input type="text" className='bg-slate-100 w-20 h-9 border border-black' />
//         </div>
//           <div className='col-span-2 border-2 border-black'>

//           <p className="border-r-2 border-t-2 w-[90px] h-8 border-black text-xs">PESO (kg)</p>
//           <p className="border-r-2 border-t-2 w-[90px] h-8 border-black text-xs">Velocidad:</p>
//           <p className="border-r-2 border-y-2 w-[90px] h-9 border-black text-xs">Predominante</p>
//           </div>
//         <div className='col-span-1 border-2 border-black'>

//       <input type="text" className='bg-slate-100 w-12 h-8 border border-black' />
//       <input type="text" className='bg-slate-100 w-12 h-8 border border-black' />
//       <input type="text" className='bg-slate-100 w-12 h-9 border border-black' />
//         </div>
//         </div>
//       </div>
//       </div>
//       {/* V.REGISTRO TECNICO DE FUNCIONAMIENTO Y VI. CLASIFICACION BIOMEDICA */}
//       <div className=' flex flex-row'>
//           <div className=' grid grid-cols-10  border-2  border-black'>
//             <h2 className='bg-blue-200 h- col-span-10'>V. REGISTRO TECNICO DE FUNCIONAMIENTO</h2>
//             <div className='col-span-5 border-2 border-black'>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">RANGO DE VOLTAJE  </p>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">RANGO DE CORRIENTE  </p>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">RANGO DE HUMEDAD  </p>
//               <p className="border-r-2 border-t-2 h-8 border-black text-xs">RANGO DE CORRIENTE  </p>
//               <p className="border-r-2 border-y-2 h-8 border-black text-xs">RANGO DE  FRECUENCIA   </p>
//             </div>
//             <div className='col-span-5 border-2 border-black'>
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             </div>
//               {/* VI. CLASIFICACION BIOMEDICA */}
//               {/*Puse margen pq interrumpia el footer pero queda melo, creo */}

//               <div className='grid col-span-5 h-8 w-full border-2 border-black'>
//                 <h2 className=' bg-blue-200 h-12  border-2 border-black'>VI. CLASIFICACION BIOMEDICA</h2>
//                 <div className=' border-2 border-black  bg-slate-100'>

//                 <label className=' border-2 border-black'>
//                   <select name="" id="" className='w-full'>
//                     <option value="">DIAGNOSTICO</option>
//                     <option value="">REHABILITACION</option>
//                     <option value="">PREVENCION</option>
//                     <option value="">TRATAMIENTO Y/O MNTO DE VIDA</option>
//                     <option value="">ANALISIS DE LABORATORIO</option>
//                   </select>
//                 </label>
//               </div>
//                 </div>
//           <div className='grid col-span-5  w-full border-2 border-black'>
//           {/* <div className=' col-span-5 border-2  border-black'> */}
//             <h2 className='bg-blue-200 '> VII. CLASIFICACION SEGUN EL NIVEL DE RIESGO</h2>
//               <div className=' border-2 border-black  bg-slate-100'>
//                 <label className=''>
//                     <select name="" id="" className='w-full'>
//                       <option value="">CLASE I</option>
//                       <option value="">CLASE II</option>
//                       <option value="">CLASE III</option>
//                     </select>
//                 </label>
//               </div>
//           </div>
//           </div>
//           <div>
//              </div>
//       </div>


      
//       {/* VIII. PERIODICIDAD DEL MANTENIMIENTO Y IX. REQUIERE CALIBRACION */}
//       <div className=' flex flex-row'>
//           <div className=' grid grid-cols-10  border-2 h- border-black'>
         
//               {/* VII. PERIODICIDAD DEL MANTENIMIENTO */}
              

//               <div className='grid col-span-5  w-full border-2 border-black'>
//                 <h2 className=' bg-blue-200 h-12'>VII. PERIODICIDAD DEL MANTENIMIENTO</h2>
//                 <div className=' border-2 border-black  bg-slate-100'>

                
//                  <input type="text" />
                
//               </div>
//                 </div>
//           <div className='grid col-span-5  w-full border-2 border-black'>
//           {/*  IX. REQUIERE CALIBRACION */}
//             <h2 className='bg-blue-200 h-12'> IX. REQUIERE CALIBRACION</h2>
//               <div className=' border-2 border-black  bg-slate-100'>
//                 <label className=''>
//                     <select name="" id="" className='w-full'>
//                       <option value="">SI</option>
//                       <option value="">NO</option>
//                       <option value="">ANUAL</option>
//                     </select>
//                 </label>
//               </div>
//           </div>
//             <h2 className='bg-blue-200  col-span-10'>X. ACCESORIOS</h2>
//              <div className='col-span-5 border-2 border-black h-40'>
//                <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
              
              
              
              
//             </div>
//             <div className='col-span-5 border-2 border-black'>
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             </div>
//             <h2 className='bg-blue-200  col-span-10'>XI. OBSERVACIONES</h2>
//              <div className='col-span-5 border-2 border-black h-40'>
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
           
           
           
           
//             </div>
//             <div className='col-span-5 border-2 border-black'>
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             </div>
            
//           </div>
//           <div>

//              </div>
//       </div>

//       <div className='flex mb-32 w-full'>
//     <div className='grid h-full grid-cols-10 w-full border-2 border-black'>
//       <div className='col-span-3 h-full border-2 border-black'>
//         <h1>LOGO DE LA EMPRESA</h1>
//       </div>
//       <div className='h-28 col-span-7 border-2 border-black'>
//         <div className='flex flex-col h-full w-full'>
//           <div className='border-2 h-8 w-full border-slate-300'><h1>Hoja de Vida</h1></div>
//           <div className='border-2 h-20 w-full border-slate-300 grid grid-cols-7'>
//             <div className='flex flex-col border-2 col-span-2 border-black h-full w-full'>
//               <p className='text-xs border-b-2 border-black'>F-GRCU-052</p>
//               <p className='text-xs text-center my-auto'>VIGENTE</p>
//             </div>
//             <div className='col-span-3 w-full h-full flex px-2 border-2 border-black'>
//               <h2 className='text-center my-auto'> Gestion de recursos</h2>
//             </div>
//             <div className='flex flex-col border-2 col-span-2 border-black'>
//               <p className='text-xs border border-black'>VERSION 2.0</p>
//               <p className='text-xs pt-8 text-center h-full'>PAG. 1 DE 2</p>
//             </div>
//           </div>
          
//         </div>
//       </div>
//             <h2 className='bg-blue-200  col-span-10'>LISTA DE CHEQUEO DE DOCUMENTOS SOPORTES ANEXOS A LA HOJA DE VIDA</h2>
//              <div className='col-span-5 border-2 border-black h-40'>
//             <p  className='bg-slate-100 w-full h-auto border border-black' >COPIA REGISTRO SANITARIO O PERMISO DE COMERCIALIZACIÓN</p>
//             <p  className='bg-slate-100 w-full h-auto border border-black' >COPIA REGISTRO DE IMPORTACIÓN (SOLO IMPORTADOS)						</p>
//             <p  className='bg-slate-100 w-full h-8 border border-black' >COPIA FACTURA						</p>
//             <p  className='bg-slate-100 w-full h-8 border border-black' >COPIA DE INGRESO AL ALMÁCEN</p>
//             <p  className='bg-slate-100 w-full h-auto border border-black' >COPIA DE ACTA DE RECIBO A SATISFACCIÓN		</p>
//             <p  className='bg-slate-100 w-full h-8 border border-black' >GUÍA RAPIDA DE OPERACIÓN</p>
//             <p  className='bg-slate-100 w-full h-auto border border-black' >RECOMENDACIÓN DEL FABRICANTE PARA USO DE ACCESORIOS Y CONSUMIBLES</p>
//             <p  className='bg-slate-100 w-full h-auto border border-black' > RECOMENDACIÓN DEL FABRICANTE PARA ASEGURAMIENTO METROLÓGICO</p>
//             <p  className='bg-slate-100 w-full h-auto border border-black' >ESTIMATIVO DE COSTO DE ACCESORIOS Y CONSUMIBLES</p>
//             <p  className='bg-slate-100 w-full h-auto border border-black' >RECOMENDACIONES DE LIMPIEZA Y DESINFECCIÓN</p>
//             <p  className='bg-slate-100 w-full h-8 border border-black' >REGISTRO DE CAPACITACIÓN	</p>

//             </div>
//             <div className='col-span-5 border-2 border-black'>
              
//             <select name="" id="" className='bg-slate-100 w-full h-16 mb-2  border border-black' >
//               <option value="">AX</option>
//               <option value="">NAX</option>
//               <option value="">NA</option>
//               <option value="">NR</option>
//               <option value="">NT</option></select>
//             <input type="text" className='bg-slate-100 w-full h-8 p-9 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 p-6 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 p-3 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 p-9 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-24 p-12 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-12 p-6 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-12 p-6 border border-black' />
//             <input type="text" className='bg-slate-100 w-full h-8 border border-black' />
//             </div>
//       </div>  
      
//     </div>
//     </>
//   )
// }


// export default page
            

'use client'
import FormProviderWrapper, { AllFormData } from '../../_components/FormProviderWrapper'
// import HdvXII from '../../_components/HdvXII'
import useObserver from '../../hooks/useObserver'
 
import FormStepper from '@/app/_components/FormStepper'
import { useForm, useFormContext } from 'react-hook-form'
import {useFormCurrentStep } from '../../context/useFormStepContext'
import { InformacionGeneralData, UbicacionGeograficaData } from '../../../../hdv'
import FormParent, { hdvElementList } from '@/app/_components/FormParent'


const validation: string[]= [
  'este campo es obligatorio'
]
const stepNames: any = hdvElementList.map(field=> ( field.name))
console.log(stepNames)
export type FormFieldConfig = {
  label: string;
  name: keyof UbicacionGeograficaData | keyof InformacionGeneralData
  type: string;
  validation?: string | null;
  // onChange:() => void;
  // You can add more properties like placeholder, required, etc. as needed
}
const getVisibleElementIndex = (entries:any) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      return parseInt(entry.target.getAttribute('data-index'), 10);
    }
  }
  return -1;
};


const Page = () => {

  
  //! Multi step form:

//  useEffect(() => {
//     const storedFormStep = localStorage.getItem('formStep');
//     if (storedFormStep) {
//       setFormStep(parseInt(storedFormStep, 10));
//     }
//   }, []);

  // const methods = useForm<User>();

  // const methods = useForm<AllFormData>();
  // const {handleSubmit} = useFormContext<AllFormData>()
  // const { register, control, handleSubmit, formState: { errors  } } = methods

  // const { register, handleSubmit, control, formState: { errors  } } = methods
  
  // !HandleCHangeForm

  
  // const scrollToForm = (index: number) => {
  //   if (elementsRefs.current[index]) {
  //     elementsRefs.current[index]?.scrollIntoView({ behavior: 'smooth' }); // Step 3: Scroll to the form
  //   }
  // };
//! UseObserveHook

  // const elementIds = hdvElementList.map((_, index) => `${index}`);
//  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//     const visibleIndex = getVisibleElementIndex(entries);
//     if (visibleIndex !== -1) {
//       setFormStep(visibleIndex);
//     }
//   };

  const { setElements, entries } = useObserver({
    threshold: 0.2,
    root: null,
    // callback: handleIntersection, // Pass the handleIntersection function as the callback
  });
  // const elementsRefs = useRef<(HTMLDivElement | null)[]>([]);
  

  // useEffect(() => {
  //   // When the component mounts, populate elementsRefs with refs to each element
  //   elementsRefs.current = elementsRefs.current.slice(0, hdvElementList.length).map((_, index) => elementsRefs.current[index] || null);
  // }, []);

  // useEffect(() => {
  //   // When the observer entries change, update the visibility of components
  //   entries.forEach((entry, index) => {
  //     if (entry.intersectionRatio > 0.05) {
  //       elementsRefs.current[index]?.classList.remove('hidden');
  //     } else {
  //       elementsRefs.current[index]?.classList.add('hidden');
  //     }
  //   });
  // }, [entries]);
  // const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L21.8,234.7C43.6,213,87,171,131,149.3C174.5,128,218,128,262,154.7C305.5,181,349,235,393,229.3C436.4,224,480,160,524,165.3C567.3,171,611,245,655,277.3C698.2,309,742,299,785,288C829.1,277,873,267,916,234.7C960,203,1004,149,1047,149.3C1090.9,149,1135,203,1178,197.3C1221.8,192,1265,128,1309,112C1352.7,96,1396,128,1418,144L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>`;
  const { nextFormStep, prevFormStep, elementsRefs, scrollToForm, setFormStep } = useFormCurrentStep()
  return (
    <div>
    <div className='px-4 sticky top-16 z-40'>
    <FormStepper 
    scrollToForm={scrollToForm}
    setCurrentStep={setFormStep}
    stepNames={stepNames}
    />

    </div>
    
<div className='fixed top-28 pl-12 left-12'>
  <div className='border-2 rounded-full w-28 blur-sm shadow-xl p-4 border-[#3B2F3C]'>
    <div className='rounded-full bg-[#123CD0] w-20 h-20 blur-sm '/>
  </div>
  </div>
<div className=' fixed top-64 ml-[70%] blur-sm'>
  <div className='border-4 rounded-full w-28  shadow-xl p-4 border-[#3B2F3C]'>
    <div className='rounded-full bg-[#123CD0] w-20 h-20  '/>
  </div>
  </div>
  <div className=''>

  <FormProviderWrapper>
            <FormParent/>
  </FormProviderWrapper>
  </div>
      <div className='sticky  rounded bottom-0 w-full z-10'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#123CD0" fillOpacity="1" d="M0,256L21.8,234.7C43.6,213,87,171,131,149.3C174.5,128,218,128,262,154.7C305.5,181,349,235,393,229.3C436.4,224,480,160,524,165.3C567.3,171,611,245,655,277.3C698.2,309,742,299,785,288C829.1,277,873,267,916,234.7C960,203,1004,149,1047,149.3C1090.9,149,1135,203,1178,197.3C1221.8,192,1265,128,1309,112C1352.7,96,1396,128,1418,144L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
      </div>
  </div>
  )
}

export default Page 