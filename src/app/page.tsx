'use client'
import HealingIcon from '@mui/icons-material/Healing';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, ChangeEventHandler } from 'react';



type User={
  'empresa' : string,
  'nit': string,
  'ciudad': string,
  'departamento': string,
  'correo': string,
  'contraseña': string,
  'confirmarContraseña': string,
  'role': string,
  'tos': boolean,
}
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
    const userTypes =[
      'Ingeniero',
      'Profesional en salud',
      'Tecnico',

    ]
  const methods = useForm<User>();

  const { register, handleSubmit, control, formState: { errors  } } = methods

  // const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
  //   'const' { name, value } = e.currentTarget
  //   setUser({ ...user, [name]: value })
  // }
  // const onSubmit: SubmitHandler<User> = async (data: User) => {
  const onSubmit = async (data: User) => {
        alert(JSON.stringify(data));

  }
  return (
<div className="relative mt-16 w-100 xl:flex h-screen bg-slate-200 overflow-y-hidden  xl:flex-col transition-all duration-200  mb-32">
  <div className=" w-full h-screen  bg-slate-400 opacity- xl:w-[50%] transition-all duration-200 transform -skew-y-12  overflow-y-hidden "  >
    <h1 className= ' bg-[#E0C4A0] text-xl font-bold text-slate-100'>¿Qué esperas para empezar?</h1>
    <div className= "space-x-6 text-[#0D202F]">

    <HealingIcon/>
    <MonitorHeartIcon/>
    <MedicalInformationIcon/>
    <BuildIcon/>
    <HandymanIcon/>
    <EngineeringIcon/>
    </div>

    <div className=' absolute flex z-10 h-full w-full px-8  transform skew-y-12 my-auto overflow-auto  scrollbar-track-transparent overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-100 scrollbar-thumb-rounded-md'>
      <div className='shadow-2xl mt-14 flex flex-col w-full space-y-4 my-auto py-12 opacity-50 items-center hover:opacity-90 bg-[#FFFF] shadow-slate-900  transition-all duration-300 transform '>
        <h1 className= 'text-slate-500 font-bold text-2xl text-center py-4 tracking-wide w-full bg-[#E0C4A0] '>Login</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="p-2 text-md text-center flex flex-col transition-all duration-300 transform  md:grid md:grid-cols-2 md:justify-evenly w-auto gap-8 text-[#0D202F] mx-auto">
          <label  className=' text-md text-center flex flex-col  w-auto text-slate-600 mx-auto '>
            Nombre de la empresa
            <input 
            placeholder='Tu empresa S.A.S.'
            className=' focus:outline-none text-center text-sm rounded-full py-2 w-40 text-slate-500 mx-auto bg-[#0D202F] '
            // name='nombre de la empresa'
            // defaultValue={field.options?.[0]?.value}
            {...register('empresa' , {
              required: 'Digite el nombre de la empresa a la que pertenece',
              })}

            />
            {errors.empresa && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.empresa?.message}</span>}
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
            Nit
            <input 
            placeholder='Nit'  
            className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto bg-[#0D202F]'
             {...register('nit' , {
              required: 'Digite el NIT de la empresa a la que pertenece',
              })}

            />
            {errors.nit && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.nit?.message}</span>}
          </label>
          <label  className='text-md text-center flex flex-col  w-[90%] text-[#0D202F] mx-auto '>
            Ciudad
            <select
            className="text-center w-full items-center bg-[#0D202F]  p-2 right-0 rounded-full  text-slate-400 text-xs text-md focus:outline-none font-semibold" id=""
             {...register('ciudad' , {
              required: 'Seleccione la ciudad donde se ubica la empresa',
              })}

  >
      <option value="">Seleccione ciudad</option> 
          {location.map((el) =>
            el.name == "city" &&
            el.options.map((city) => (
              <option key={city.value} value={city.value}>
                {city.value}
              </option>
              )))}
            </select>
            {errors.ciudad && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.ciudad?.message}</span>}
            {/* <input placeholder='Ciudad'  className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '/> */}
          </label>
          <label  className='text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
            Departamento
             <select 
             className="text-center w-full items-center bg-[#0D202F] p-2 right-0 rounded-full  text-slate-400 text-xs  text-md focus:outline-none  font-semibold" id=""
             {...register('departamento' , {
               required: 'Seleccione el departamento donde se ubica la empresa',
              })}
              
            >
              <option value="">Seleccione Departamento</option>
              {location.map(el=> el.name== 'department' && el.options.map(department=> (<option key={department.value}>
                {department.value}
              </option>)))}
            </select>
            {errors.departamento && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.departamento?.message}</span>}
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
            Correo
            <input 
            placeholder='Correo' 
            type='email' 
            className=' focus:outline-none text-center text-sm rounded-full py-2 bg-[#0D202F] w-auto text-slate-500 mx-auto '
             {...register('correo' , {
               required: 'Digite su correo electronico empresarial',
              })}
              />
              {errors.correo && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.correo?.message}</span>}
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
            Contraseña
            <input 
            placeholder='Contraseña'
            type='password'
            className=' focus:outline-none text-center bg-[#0D202F] text-sm rounded-full py-2 w-auto text-slate-500 mx-auto '
      {...register('contraseña' , {
        required: 'La contraseña es obligatoria',
              pattern: {
          value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,]).{8,16}$/,
          message: 'Al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial'
        }
              })}
              />
              {errors.contraseña && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.contraseña?.message}</span>}
          </label>
          <label  className=' text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
            Confirmar Contraseña
            <input 
            placeholder='Confirmar contraseña ' 
            type='password'  
            className=' focus:outline-none text-center text-sm rounded-full py-2 w-auto text-slate-500 mx-auto bg-[#0D202F]'
             {...register('confirmarContraseña' , {
            required: 'La contraseña es obligatoria',
              pattern: {
          value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,]).{8,16}$/,
          message: 'Al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial'
        }
              })}
              />
              {errors.confirmarContraseña && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.confirmarContraseña?.message}</span>}
          </label>
 <label  className='text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
  Registrarse como:
    <select
     className="text-center w-full items-center bg-[#0D202F]  p-2 right-0 rounded-full  text-slate-400 text-xs text-md focus:outline-none font-semibold" id=""
      {...register('role', {
        required: 'Seleccione el cargo o función que desempeña en la empresa',
      })}
    >
       <option value=''>
       Selecione su cargo
      </option>
     {userTypes.map(type=>
       <option key={type} value={type}>
        {type}
      </option>
        )}
    </select>
    {errors.role && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.role?.message}</span>}
</label>
 <label  className='text-md text-center flex flex-col  w-auto text-[#0D202F] mx-auto '>
  Aceptar <br /> términos y condiciones
  {/* <div className="relative"> */}
    <input
      type="checkbox"
      className="text-center w-full items-center bg-[#0D202F]  p-2 right-0 rounded-full  text-slate-400 text-xs text-md focus:outline-none font-semibold" id=""
      {...register('tos', {
        required: 'Debe aceptar las políticas para continuar el proceso',
      })}
    />
    {errors.tos && <span className="text-red-500 font-semibold text-center text-sm w-36">{errors.tos?.message}</span>}
  {/* </div> */}
</label>
          <input type='submit' className='text-slate-300 hover:opacity-75 mt-4 py-2 mb-6 md:ml-[25%] rounded-full md:justify-center transform hover:scale-125 hover:bg-slate-500 hover:text-slate-100 focus:outline-none transition-all duration-150 hover:ease-in-out col-span-2 md:w-1/2 bg-[#00619E]' placeholder='Submit'/>
        </form>
      </div>
    </div>

    <div className=" h-screen  bg-slate-700 pt-36 clip-triangle -rotate-180   w-full"   />
    </div>
    <div className='absolute  right-0 h-screen  border-black bg-[#0D202F] hidden xl:flex w-[50%]'>
      <h1>Here Immmmm</h1>
    </div>
</div>
  )
}
