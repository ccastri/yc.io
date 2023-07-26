'use client'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'

const page = () => {
  return (
    // Header
    <>
    <div className='mt-16 h-28 w-full'>
    <div className='grid h-full grid-cols-10 w-full border-2 border-black'>
      <div className='col-span-3 h-full border-2 border-black'>
        <h1>LOGO DE LA EMPRESA</h1>
      </div>
      <div className='h-28 col-span-7 border-2 border-black'>
        <div className='flex flex-col h-full w-full'>
          <div className='border-2 h-8 w-full border-slate-300'><h1>Hoja de Vida</h1></div>
          <div className='border-2 h-20 w-full border-slate-300 grid grid-cols-7'>
            <div className='flex flex-col border-2 col-span-2 border-black h-full w-full'>
              <p className='text-xs border-b-2 border-black'>F-GRCU-052</p>
              <p className='text-xs text-center my-auto'>VIGENTE</p>
            </div>
            <div className='col-span-3 w-full h-full flex px-2 border-2 border-black'>
              <h2 className='text-center my-auto'> Gestion de recursos</h2>
            </div>
            <div className='flex flex-col border-2 col-span-2 border-black'>
              <p className='text-xs border border-black'>VERSION 2.0</p>
              <p className='text-xs pt-8 text-center h-full'>PAG. 1 DE 2</p>
            </div>
          </div>
          
        </div>
      </div>
      </div>  
      
    </div>
    {/*1. Ubicacion geografica */}
    <div className='grid grid-cols-10 w-full border-2 border-black h-44'>
      <div className="border-2 col-span-3 border-x-black">
        <p className='border-b-2 h-7 border-black text-xs'>DEPARTAMENTO</p>
        <p className='border-b-2 h-7 border-black text-xs'>MUNICIPIO</p>
        <p className='border-b-2 h-7 border-black text-xs'>ENTIDAD</p>
        <p className='border-b-2 h-7 border-black text-xs'>CORREO</p>
        <p className='border-b-2 h-7 border-black text-xs'>DIRECCION</p>
        <p className='h-7 text-xs'>TELEFONO</p>
      </div>
      <div className="border-2 border-x-black col-span-4 items-center">
        <input type="text" className='bg-slate-100 w-full h-7 border border-black' />
        <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-7 border border-black'/>
      </div>
      <div className="border-2 border-x-black col-span-3">
        <p>drag and drop para img</p>
      </div>
    </div>
    {/* II. Informcion general y III. Regsitro historico */}
      <>
      <div className='px-4 flex flex-row bg-blue-400'>

      <h2 className ="w-[42%]"> II. INFORMACION GENERAL</h2>
      <h2 className ="w-[62%]">III. REGISTRO HISTORICO</h2>
      </div>
    <div className='grid grid-cols-10 w-full border-2 border-black h-58'>
      <div className="border-2 col-span-2 border-x-black">
        <p className='border-b-2 h-11 border-black text-xs'>EQUIPO:</p>
        <p className='border-b-2 h-11 border-black text-xs'>MARCA:</p>
        <p className='border-b-2 h-11 border-black text-xs'>MODELO:</p>
        <p className='border-b-2 h-11 border-black text-xs'>SERIE N°:</p>
        <p className='border-b-2 h-11 border-black text-xs'>ACTIVO FIJO:</p>
        <p className='border-b-2 h-11 border-black text-xs'>REGISTRO SANITARIO:</p>
        <p className='border-b-2 h-11 border-black text-xs'>UBICACION:</p>
        <p className='h-11 text-xs'>PROVEEDOR:</p>
      </div>
      <div className="border-2 border-x-black col-span-2 items-center">
        <input type="text" className='bg-slate-100 w-full h-11 border border-black' />
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
        <input type="text" className='bg-slate-100 w-full h-11 border border-black'/>
      </div>

      <div className='grid grid-cols-6 col-span-6'>
        {/* <div className='flex flex-col border-2'>
          <label>Forma de adquisicion</label>
          <select className='w-36 ml-6 h-8' name="" id="">
            <option value="Compra">Compra</option>
            <option value="Donacion">Donacion</option>
            <option value="Incautacion">Incautacion</option>
          </select>
        </div> */}
      <div className="border-2 border-x-black col-span-3 w-full">
        <h3>DOCUMENTO</h3>
        {/* <div className='flex flex-row'> */}
          <h2 className='col-span-2 h-16 border-2 border-black'>Año de fabricacion</h2>
          {/* <input type="text" className='col-span-1' /> */}
        {/* </div> */}
        <h2 className='col-span-2 h-16 border-2 border-black'>FECHA DE COMPRA</h2>
        <h2 className='col-span-2 h-16 border-2 border-black'>FECHA DE INSTALACION</h2>
        <h2 className='col-span-2 h-16 border-2 border-black'>INICIO DE OPERACION</h2>
        <h2 className='col-span-2 h-16 '>VENCIMIENTO DE GARANTIA</h2>
      </div>
      <div className="border-2 border-x-black col-span-3 w-full">
        <h3>FACTURA</h3>
        
        <div className='h-16 border-2 border-black '>
       <DatePicker/>

        </div>
        <div className='h-16 my-0 border-2 border-black'>
       <DatePicker/>

        </div>
        <div className='h-16 my-0 border-2 border-black'>
       <DatePicker/>

        </div>
        <div className='h-16 my-0 border-2 border-black'>
       <DatePicker/>

        </div>
        <div className='h-16'>
       <DatePicker/>

        </div>
        {/* <div className="grid grid-cols-3 gap-2">
          <input type="text" className='bg-slate-100 w-full h-7 border border-black' />
          <input type="text" className='bg-slate-100 w-full h-7 border border-black' />
          <input type="text" className='bg-slate-100 w-full h-7 border border-black' />
        </div> */}
        
      </div>
    </div>
  {/* </div> */}
      </div>
      </>
      {/* IV. Registro tecnico de instalacion */}
      <>
      <h2 className='w-full text-center'>Registo tecnico de instalacion</h2>
      <div className='grid h-32 grid-cols-10'>
        
        <div className='col-span-3 border-2 border-black flex'>
          <div className='col-span-2 w-full'>

          <p className="border-r-2 border-t-2 w-20 border-black text-xs">Tension (V)</p>
          <p className="border-r-2 border-t-2 w-20 border-black text-xs">POTENCIA (W)</p>
          <p className="border-r-2 border-y-2 w-20 border-black text-xs">Presion (mmHg)</p>
          </div>
        <div className='col-span-1 border-2 border-black'>

      <input type="text" className='bg-slate-100 w-16 h-7 border border-black' />
      <input type="text" className='bg-slate-100 w-16 h-7 border border-black' />
      <input type="text" className='bg-slate-100 w-16 h-7 border border-black' />
        </div>
        </div>

        <div className='col-span-7 border-2 border-black flex'>
          <div className='col-span-3 border-2 border-black h-full w-full'>

          <p className="border-r-2 border-t-2 w-28 border-black text-xs">CORRIENTE (A)</p>
          <p className="border-r-2 border-t-2 w-28 border-black text-xs">FRECUENCIA (HZ)</p>
          <p className="border-r-2 border-y-2 w-28 border-black text-xs">RANGO DE TEMPERATURA</p>
          </div>
        <div className='col-span-1 border-2 border-black'>

      <input type="text" className='bg-slate-100 w-24 h-7 border border-black' />
      <input type="text" className='bg-slate-100 w-24 h-7 border border-black' />
      <input type="text" className='bg-slate-100 w-24 h-7 border border-black' />
        </div>
          <div className='col-span-2 border-2 border-black'>

          <p className="border-r-2 border-t-2 w-full border-black text-xs">PESO (kg)</p>
          <p className="border-r-2 border-t-2 w-full border-black text-xs">Velocidad:</p>
          <p className="border-r-2 border-y-2 w-full border-black text-xs">Predominante</p>
          </div>
        <div className='col-span-2 border-2 border-black'>

      <input type="text" className='bg-slate-100 w-16 h-7 border border-black' />
      <input type="text" className='bg-slate-100 w-16 h-7 border border-black' />
      <input type="text" className='bg-slate-100 w-16 h-7 border border-black' />
        </div>
        </div>
      </div>
      </>
    </>
  )
}

export default page
            