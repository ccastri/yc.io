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
import axios from 'axios'
import dayjs from 'dayjs'
import { RegistroHistorico } from '../../../hdv'


// import React, { useRef } from 'react'
export const hdvElementList = [
{name:'Ubicacion Geografica', component:HdvI},
{name:'Informacion general', component:HdvII},
{name:'Registro historico', component:HdvIII},
{name:'Registro tecnico de instalacion', component:HdvIV},
{name:'Registro tecnico de funcionamiento', component:HdvV},
{name:'Clasificacion biomedica', component:HdvVI},
{name:'Clasificacion segun nivel de riesgo', component:HdvVII},
{name:'Periodicidad de mantenimiento', component:HdvVIII},
{name:'Requiere Calibracion', component:HdvIX},
{name:'Accesorios', component:HdvX},
{name:'DocumentosSoportes', component:HdvXI},
// {name:'', component:HdvXII},

]

const FormParent = () => {
    const { register, control, handleSubmit, formState: { errors  } } = useFormContext<AllFormData>();
    const { selectedOptions, files, selectedDate, elementsRefs } = useFormCurrentStep()
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.currentTarget
      // setUser({ ...user, [name]: value })
    }
    const [hdvData, setHdvData] = useState({})
    const onSubmit = async (data: AllFormData, ) => {
      try{
        
        
        const formDataImage = new FormData();
        formDataImage.append("image", files[0]); // Tomar la primera imagen
        
        // Obtener la URL de la imagen cargada
        
        // const imgBlobUrl = URL.createObjectURL(files[0]);
        // const img = imgBlobUrl.replace(/^blob:/, '')
        // console.log(JSON.stringify(selectedOptions))
        // console.log(data)
        console.log(files[0])
        
        const formData = new FormData();
        formData.append("image", files[0]);
        console.log(JSON.stringify(formData))
        const responseImage = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/upload_image`, formData);
        
        const uploadedImageUrl = responseImage.data.url;
        setHdvData((prevVal)=>({
          ...prevVal,
          ...selectedOptions,
          // ...files,
          // formattedData,
           img: uploadedImageUrl,
          ...data
        }))
        // alert(JSON.stringify(hdvData));
        console.log(JSON.stringify(hdvData));
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/hdv/fill_excel`, hdvData, {
        responseType: 'blob', // Indicar que se espera una respuesta binaria (archivo)
      });

      // Crear un enlace temporal y simular un clic para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'hoja_De_vida.xlsx');
      document.body.appendChild(link);
      link.click();
      }catch(error:any){
         console.error('Error al descargar el archivo:', error);
             console.error('Error al descargar el archivo:', error.message);
    console.error('Stack trace:', error.stack);
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
          <button type="submit">Submit</button>
          </form>
      
    </>
  )
}

export default FormParent
