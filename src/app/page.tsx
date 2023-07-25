// import Image from 'next/image'
import HealingIcon from '@mui/icons-material/Healing';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
export default function Home() {


const location=[

  
  {
      name: "city",
      type: 'select',
      label: 'Ciudad',
      validation: `Seleccione su departamento`,
      options: [
        { value: "Select ciudad" },
        { value: "Arauca" },
        { value: "Armenia" },
        { value: "Barranquilla" },
        { value: "Bogotá" },
        { value: "Bucaramanga" },
        { value: "Cali" },
        { value: "Cartagena" },
        { value: "Cúcuta" },
        { value: "Florencia" },
        { value: "Ibagué" },
        { value: "Leticia" },
        { value: "Manizales" },
        { value: "Medellín" },
        { value: "Mitú" },
        { value: "Mocoa" },
        { value: "Montería" },
        { value: "Neiva" },
        { value: "Pasto" },
        { value: "Pereira" },
        { value: "Popayán" },
        { value: "Puerto Carreño" },
        { value: "Puerto Inírida" },
        { value: "Quibdó" },
        { value: "Riohacha" },
        { value: "San Andrés" },
        { value: "San José del Guaviare" },
        { value: "Santa Marta" },
        { value: "Sincelejo" },
        { value: "Tunja" },
        { value: "Valledupar" },
        { value: "Villavicencio" },
        { value: "Yopal" },
      ],
    }, {
      name: 'department',
      type: 'select',
      label: 'department',
      validation: `Seleccione su departamento`,
      options: [
        { value: "Seleccione departmento", },
        { value: "Antioquia" },
        { value: "Arauca" },
        { value: "Atlántico" },
        { value: "Bolívar" },
        { value: "Boyacá" },
        { value: "Caldas" },
        { value: "Caquetá" },
        { value: "Casanare" },
        { value: "Cauca" },
        { value: "Cesar" },
        { value: "Chocó" },
        { value: "Córdoba" },
        { value: "Cundinamarca" },
        { value: "Guainía" },
        { value: "Guaviare" },
        { value: "Huila" },
        { value: "La Guajira" },
        { value: "Magdalena" },
        { value: "Meta" },
        { value: "Nariño" },
        { value: "Norte de Santander" },
        { value: "Putumayo" },
        { value: "Quindío" },
        { value: "Risaralda" },
        { value: "San Andrés y Providencia" },
        { value: "Santander" },
        { value: "Sucre" },
        { value: "Tolima" },
        { value: "Valle del Cauca" },
        { value: "Vaupés" },
        { value: "Vichada" },
      ],

    },
  ]


  return (
<div className="relative w-100 xl:flex h-screen bg-slate-200 overflow-y-hidden  xl:flex-col transition-all duration-200  ">
  <div className=" w-full h-screen  bg-slate-400 opacity- xl:w-[50%] transition-all duration-200 transform -skew-y-12  overflow-y-hidden"  >
    <h1 className= ' text-xl font-bold text-slate-300'>¿Qué esperas para empezar?</h1>
    <div className= "space-x-6 text-slate-100">

    <HealingIcon/>
    <MonitorHeartIcon/>
    <MedicalInformationIcon/>
    <BuildIcon/>
    <HandymanIcon/>
    <EngineeringIcon/>
    </div>

    <div className=' absolute flex z-10 h-full w-full px-4 transform skew-y-12 my-auto overflow-auto  scrollbar-track-transparent overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-100 scrollbar-thumb-rounded-md'>
      <div className='shadow-2xl mt-14 flex flex-col w-full space-y-4 my-auto py-10 opacity-50 items-center hover:opacity-90 bg-orange-200 shadow-slate-900 px-4 transition-all duration-300 transform '>
        <h1 className= 'text-slate-500 font-bold text-2xl '>Login</h1>
        <form action="" className="p-2 text-md text-center flex flex-col transition-all duration-300 transform  md:grid md:grid-cols-2 md:justify-evenly w-auto gap-8 text-slate-100 mx-auto">
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-100 mx-auto '>
            Nombre de la empresa
            <input placeholder='Tu empresa S.A.S.' className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/>
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-100 mx-auto '>
            Nit
            <input placeholder='Nit'  className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/>
          </label>
          <label  className='text-md text-center flex flex-col  w-[90%] text-slate-100 mx-auto '>
            Ciudad
            <select name="" className="w-full items-center  p-2 right-0 rounded-full  text-gray-700 text-xs text-md focus:outline-none font-semibold" id="">
              {location.map(el=> el.name== 'city' && el.options.map(city=> (<option key={el.name}>
                {city.value}
              </option>)))}
            </select>
            {/* <input placeholder='Ciudad'  className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/> */}
          </label>
          <label  className='text-md text-center flex flex-col  w-auto text-slate-100 mx-auto '>
            Departamento
             <select name="" className="w-full items-center  p-2 right-0 rounded-full  text-gray-700 text-xs  text-md focus:outline-none  font-semibold" id="">
              {location.map(el=> el.name== 'department' && el.options.map(department=> (<option key={el.name}>
                {department.value}
              </option>)))}
            </select>
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-100 mx-auto '>
            Correo
            <input placeholder='Correo' type='email' className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/>
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-100 mx-auto '>
            Contraseña
            <input placeholder='Contraseña' type='password' className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/>
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-100 mx-auto '>
            Confirmar Contraseña
            <input placeholder='Confirmar contraseña ' type='password'  className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/>
          </label>
          <label className='flex flex-col text-md text-center items-center px-2'>
            Registrarse como:
          
          <select
            // id={field.name}
            className="w-full items-center  p-2 right-0 rounded-full  text-gray-700 text-xs  pl-2 text-md focus:outline-dotted hover:decoration-sky-600 font-semibold"
            // defaultValue=
            // defaultValue={field.options?.[0]?.value}
            // {...register(field.name , {
              // required: `Seleccione su ${field.name}`,
              // })}
              >
          {/* // {field.options?.map((option) => ( */}
            {/* <option key={option.value} value={option.value}> */}
            <option key='' value= '0'>
              Seleccione rol
            </option>
            <option key='' value= '1'>
              Especialista en salud
            </option>
            <option key='' value= '2'>
              Ingeniero
            </option>
            <option key='' value= '3'>
              Tecnico
            </option>
  
          </select>
          </label>
          <label className='flex flex-col text-md text-center items-center'>
            Aceptar <br/> terminos y condiciones
          
          <select
            // id={field.name}
            className="w-full items-center  p-2 right-0 rounded-full md:mb-0  text-gray-700 text-xs  pl-2 hover:underline text-md focus:outline-dotted hover:decoration-sky-600 font-semibold"
            // defaultValue=
            // defaultValue={field.options?.[0]?.value}
            // {...register(field.name , {
              // required: `Seleccione su ${field.name}`,
              // })}
              >
          {/* // {field.options?.map((option) => ( */}
            {/* <option key={option.value} value={option.value}> */}
            <option key='' value= '1'>
              Si
            </option>
            <option key='' value= '0'>
              No
            </option>
  
          </select>
            </label>
          <input type='submit' className='bg-slate-700 mt-4 py-2 mb-6 md:ml-[25%] rounded-full md:justify-center transform hover:scale-125 hover:bg-slate-500 focus:outline-none transition-all duration-150 hover:ease-in-out col-span-2 md:w-1/2' placeholder='Submit'/>
        </form>
      </div>
    </div>

    <div className=" h-screen  bg-slate-700 pt-36 clip-triangle -rotate-180   w-full"   />
    </div>
    <div className='absolute  right-0 h-screen  border-black bg-slate-600 hidden xl:flex w-[50%]'>
      <h1>Here Immmmm</h1>
    </div>
</div>
  )
}
