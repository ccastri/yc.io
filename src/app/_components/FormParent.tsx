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
// import HdvXI from '../../_components/HdvXI'


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
// {name:'Observaciones', component:HdvXI},
// {name:'', component:HdvXII},

]

const FormParent = () => {
    const { register, control, handleSubmit, formState: { errors  } } = useFormContext<AllFormData>();
    const { nextFormStep, prevFormStep, elementsRefs, scrollToForm, setFormStep } = useFormCurrentStep()
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.currentTarget
      // setUser({ ...user, [name]: value })
    }
    const onSubmit = async (data: AllFormData) => {
        alert(JSON.stringify(data));
        
    }
    const mainContainerRef = useRef<(HTMLDivElement | null)>(null);
    console.log(errors)
  return (
    <>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div ref={mainContainerRef} className=' relative z-30 mt-16 flex flex-col items-center space-y-6 p-12 '>
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