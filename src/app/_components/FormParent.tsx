import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import HdvI from './HdvI'
import HdvII from './HdvII'
import HdvIII from './HdvIII'
import HdvIV from './HdvIV'
import HdvV from './HdvV'
import HdvVI from './HdvVI'
import HdvVII from './HdvVII'
import HdvVIII from './HdvVIII'
import HdvIX from './HdvIX'
import HdvX from './HdvX'
import { useFormContext } from 'react-hook-form'
import { AllFormData } from './FormProviderWrapper'
import { useFormCurrentStep } from '../context/useFormStepContext'
import HdvXI from './HdvXI'
import axios, { AxiosError } from 'axios'
import dayjs from 'dayjs'
import { RegistroHistorico } from '../../../hdv'

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.DETA_SPACE_URL}/api`
  : `http://127.0.0.1:8000/hdv/fill_excel?seconds=10`;
// import React, { useRef } from 'react'
export const hdvElementList = [
{name:'Ubicacion Geografica', component:HdvI},
// {name:'Informacion general', component:HdvII},
// {name:'Registro historico', component:HdvIII},
// {name:'Registro tecnico de instalacion', component:HdvIV},
// {name:'Registro tecnico de funcionamiento', component:HdvV},
// {name:'Clasificacion biomedica', component:HdvVI},
// {name:'Clasificacion segun nivel de riesgo', component:HdvVII},
// {name:'Periodicidad de mantenimiento', component:HdvVIII},
// {name:'Requiere Calibracion', component:HdvIX},
// {name:'Accesorios', component:HdvX},
// {name:'DocumentosSoportes', component:HdvXI},
// {name:'', component:HdvXII},

]

const FormParent = () => {
    const { register, control, handleSubmit, formState: { errors  } } = useFormContext<AllFormData>();
    const { selectedOptions, files, selectedDate, inputFields, elementsRefs } = useFormCurrentStep()
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.currentTarget
      // setUser({ ...user, [name]: value })
    }
    const [hdvData, setHdvData] = useState({})
    const [loading, setLoading] = useState(false); // Estado de carga
    // const formData = new FormData();
    // formData.append("image", files[0]);
    const onSubmit = async (data: AllFormData, ) => {
      try{
var fullURL = window.location.href;
         setLoading(true); 
        // console.log(files[0])
        // const add
        const formData = new FormData();
    const filteredInputs= inputFields.filter(input=> input !== '')
        formData.append("data", JSON.stringify({
          // ...selectedOptions,
          // formData: formData,
          // filteredInputs,
          // img: formData,

          ...data
        })); // Tomar la primera imagen
        formData.append("img", files[0]); // Tomar la primera imagen
        // console.log(formData.values())
        console.log(Object.fromEntries(formData))
        console.log(formData.get('filteredInputs'))
        
        console.log(URL)
        // const response = await axios.post(`${URL}/hdv/fill_excel`, formData, {
        const response = await axios.post(`http://127.0.0.1:8000/hdv/fill_excel?seconds=10`, formData, {
        // const response = await axios.post(`http://localhost:8000/hdv/fill_excel`, formData, {
        headers:{
          // 'Bearer': 'nHHaCXVK_ANQkN9y9e3N6tAp3ZwW8uTyF5mhSwQF9',
          "Content-Type": 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
      },
        // withCredentials: true,
        responseType: 'blob', // Indicar que se espera una respuesta binaria (archivo)
    });
      console.log(response.data);
     
      // Crear un enlace temporal y simular un clic para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'hoja_De_vida.xlsx');
      document.body.appendChild(link);
      link.click();
       setLoading(false); 
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error:', error);
          console.error('Error message:', error.message);
          console.error('Stack trace:', error.stack);
          setLoading(false); 
  } else {
    console.error('Error:', error);
  }
      }
      }
    
    const mainContainerRef = useRef<(HTMLDivElement | null)>(null);
    console.log(errors)
  return (
    <>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div ref={mainContainerRef} className=' relative z-30 flex flex-col items-center space-y-6 py-4 '>
            {hdvElementList.map((field, index) => {
              const Component = field.component;
              return (
                <div
                  key={index}
                  ref={(el) => (elementsRefs.current[index] = el)}
                  className='z-50'
                >
                  <Component
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          </div>
                  <button type="submit" disabled={loading}>Submit</button>
          </form>
           {loading && <div>Loading...</div>} {/* Mostrar el loader si está cargando */}
      
    </>
  )
}

export default FormParent
