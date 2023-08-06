'use client'
import HealingIcon from '@mui/icons-material/Healing';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';  
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import TireRepairOutlinedIcon from '@mui/icons-material/TireRepairOutlined';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import BuildIcon from '@mui/icons-material/Build';
import { renderToString } from 'react-dom/server';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalConvenienceStoreOutlinedIcon from '@mui/icons-material/LocalConvenienceStoreOutlined';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, ChangeEventHandler } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import axios from 'axios';
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
interface FormField {
  label: string;
  icon?: any
  name: keyof User;
  type: string;
  placeholder: string;
  validation: {
    required: string;
    pattern?: {
      value: string | RegExp;
      message: string;
    };
  };
  options?: { value: string }[];
}

const userTypes =[
  {value:'Ingeniero'},
  {value:'Profesional en salud'},
  {value:'Tecnico'},

]
const formFields: FormField[] = [
  {
    label: 'Nombre de la empresa',
    icon: <LocationCityOutlinedIcon/>,
    name: 'company',
    type: 'text',
    placeholder: 'Tu empresa S.A.S.',
    validation: {
      required: 'Digite el nombre de la empresa a la que pertenece',
    },
  },
  {
    label: 'Nit',
    icon: <FingerprintOutlinedIcon/>,
    name: 'nit',
    type: 'text',
    placeholder: 'Nit',
    validation: {
      required: 'Digite el NIT de la empresa a la que pertenece',
    },
  },
  {
    label: 'Ciudad',
    name: 'city',
    icon: <PersonPinCircleOutlinedIcon/>,
    type: 'select',
    placeholder: 'Seleccione ciudad',
    validation: {
      required: 'Seleccione la ciudad donde se ubica la empresa',
    },
        options: location[0].options
  },
  {
    label: 'Departamento',
    name: 'department',
    icon: <PersonPinCircleOutlinedIcon/>,
    type: 'select',
    placeholder: 'Seleccione Departamento',
    validation: {
      required: 'Seleccione el departamento donde se ubica la empresa',
    },
    options: location[1].options
  },
  {
    label: 'Correo',
    name: 'email',
    icon: <EmailOutlinedIcon/>,
    type: 'email',
    placeholder: 'Correo',
    validation: {
      required: 'Digite su correo electronico empresarial',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Ingrese un correo electrónico válido',
      },
    },
  },
  {
    label: 'Contraseña',
    name: 'password',
    icon: <PasswordOutlinedIcon/>,
    type: 'password',
    placeholder: 'Contraseña',
    validation: {
      required: 'La contraseña es obligatoria',
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,]).{8,16}$/,
        message: 'Al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial',
      },
    },
  },
  {
    label: 'Confirmar Contraseña',
    name: 'password_confirm',
    icon: <PasswordOutlinedIcon/>,
    type: 'password',
    placeholder: 'Confirmar contraseña',
    validation: {
      required: 'La contraseña es obligatoria',
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,]).{8,16}$/,
        message: 'Al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial',
      },
    },
  },
  {
    label: 'Registrarse como',
    name: 'role',
    icon: <Diversity2OutlinedIcon/>,
    type: 'select',
    placeholder: 'Seleccione su cargo',
    validation: {
      required: 'Seleccione el cargo o función que desempeña en la empresa',
    },
    options: userTypes
  },
  {
    label: 'Aceptar términos y condiciones',
    name: 'tos',
    type: 'checkbox',
    placeholder: '',
    validation: {
      required: 'Debe aceptar las políticas para continuar el proceso',
    },
  },
];
type User={
  'company' : string,
  'nit': string,
  'city': string,
  'department': string,
  'email': string,
  'password': string,
  'password_confirm': string,
  'role': string,
  'tos': boolean,
}
export default function Home() {


  const methods = useForm<User>();

  const { register, handleSubmit, control, formState: { errors  } } = methods

    const onSubmit = async (data: User) => {
      console.log(`data: ${JSON.stringify(data)}`)
      alert(JSON.stringify(data));
      try{
        const response = await axios.post('http://127.0.0.1:8000/auth/register', JSON.stringify(data), {
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true
    })
    const user: User = response.data;
    console.log(user)
      }catch(error){
      console.error('Error al crear el usuario:', error);
      }
      
    }

    const iconToSvg = (icon:any) => {
  const svgString = renderToString(icon);
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};
const svgString = iconToSvg(<SmartToyOutlinedIcon />);

    return (
      // xl:flex clase del primer div

      // #747a80, #00619E,  #C29A95, #E0C4A0, #3B2F3C  #0D202F
      <>
<div className="relative mt-16 w-100  h-screen bg-[#fafafa]   xl:flex-col transition-all duration-200 scrollbar-track-transparent overflow-y-scroll scrollbar-thin scrollbar-thumb-[#747a80] scrollbar-thumb-rounded-md">
{/* <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#123CD0" fill-opacity="1" d="M0,64L13.3,69.3C26.7,75,53,85,80,112C106.7,139,133,181,160,197.3C186.7,213,213,203,240,192C266.7,181,293,171,320,154.7C346.7,139,373,117,400,128C426.7,139,453,181,480,208C506.7,235,533,245,560,256C586.7,267,613,277,640,250.7C666.7,224,693,160,720,154.7C746.7,149,773,203,800,224C826.7,245,853,235,880,202.7C906.7,171,933,117,960,106.7C986.7,96,1013,128,1040,160C1066.7,192,1093,224,1120,202.7C1146.7,181,1173,107,1200,101.3C1226.7,96,1253,160,1280,208C1306.7,256,1333,288,1360,266.7C1386.7,245,1413,171,1427,133.3L1440,96L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path></svg></div> */}
  <div className=" w-full absolute h-screen  bg-[#fafafa] opacity- flex items-center transition-all duration-200 transform -skew-y-12 mb-32 z-40 overflow-y-hidden "  >
    <div className= ' bg-gradient-to-b rounded-t-md from-[#6A6257] to-[#E0C4A0] ml-6 w-[30%] h-full'>

    <h1 className= '  px-4 bg-[#E0C4A0] p-6 mt-20  my-auto text-xl text-center font-bold text-slate-100 '>¡Bienvenido abordo!</h1>
    </div>
    <div className= "grid grid-cols-4 my-0 text-[#fafafa]  py-16  items-center ml-6 border rounded  w-[70%] h-full bg-gradient-to-b from-[#123CD0] to-[#E0C4A0]">
      <div className='flex justify-center  items-center'>
           <LocationOnIcon/>
           </div>
           <div className='flex justify-center items-center '>
           <HealingIcon/>
           </div>
           <div className='flex justify-center items-center'>
         
           
           </div>
           {/* <div className='flex justify-center items-center'>
           <MonitorHeartIcon/>
           </div >
           <div className='flex justify-center items-center'>
           <MedicalInformationIcon/>
           </div> */}
{/*
           <div className='flex justify-center items-center'>
      <BuildIcon/>
      </div>
      <div className='flex justify-center items-center'>
      <HandymanIcon/>
      </div>
      <div className='flex justify-center items-center'>
      <EngineeringIcon/>
      </div>
      <div className='flex justify-center items-center'>
      <LocationCitySharpIcon/>
</div>
<div className='flex justify-center items-center'>
<PrecisionManufacturingOutlinedIcon />
</div>
<div className='flex justify-center items-center'>
<LocalConvenienceStoreOutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
  
<HomeRepairServiceOutlinedIcon />
</div>
<div className='flex justify-center items-center'>
<MedicalServicesOutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
<TireRepairOutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
<Groups2OutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
<BuildOutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
<ManageAccountsOutlinedIcon/>
</div>
<div className='flex  justify-center items-center'>
<SettingsSuggestOutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
<PrivacyTipOutlinedIcon/>
</div>
<div className='flex justify-center items-center'>
<ManageHistoryOutlinedIcon/>
</div> 
*/}

</div>

    <div className=' absolute flex z-10 h-full w-full px-12  transform skew-y-12 my-auto overflow-auto  scrollbar-track-transparent overflow-y-scroll scrollbar-thin scrollbar-thumb-[#747a80] scrollbar-thumb-rounded-md'>

      <div className='shadow-2xl mt-14 flex flex-col w-8/12 xs:w-full overflow-y-auto space-y-4 my-auto py-16  items-center opacity-100 bg-[#FFFF] shadow-slate-900  transition-all duration-300 transform '>
        
        <p className= 'text-[#fafafa] font-bold text-2xl text-center w-full py-6 tracking-wider bg-[#E0C4A0] '>Inicio de sesion <span> <LoginOutlinedIcon/></span></p>
  <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="p-2 text-md text-center flex flex-col transition-all duration-300 transform  md:grid md:grid-cols-2 md:justify-evenly w-auto gap-8 text-[#0D202F] mx-auto"
          >
            {formFields.map((field) => (
              <label key={field.name} className={`text-md font-bold tracking-wide text-left bottom-0 flex flex-col w-full  text-slate-600 mx-auto ${errors[field.name] && 'text-red-500'}`}>
             <span className='mb-2 '>{field.icon} {field.label}</span>
                {field.type === 'select' ? (
                  <select
                    className={`text-center py-4 justify-center focus:border-blue-500 w-full items-center text-slate-400 text-xs text-md focus:outline-none font-semibold border-b ${errors[field.name] && 'border-red-500'}`}
                    {...register(field.name, {
                      required: field.validation.required,
                    })}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options &&
                      field.options.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                  </select>
                ) : field.type === 'checkbox' ? (
                  <label className="text-md underline text-blue-500 cursor-pointer text-center flex flex-col w-auto  mx-auto">
                    {field.label}
                    <input
                      type="checkbox"
                      className="text-center w-10 items-center bg-[#0D202F]  p-2 right-0 rounded-full  text-slate-400 text-xs text-md focus:outline-none font-semibold"
                      {...register(field.name, {
                        required: field.validation.required,
                      })}
                    />
                  </label>
                ) : (
            <input
            type={field.type}
              placeholder="Tu empresa S.A.S."
              className={`focus:border-blue-500 h-12 bottom-0 font-normal  focus:outline-none text-center text-sm pt-2 w-full  text-slate-500 mx-auto border-b border-[#0D202F]`}
                    {...register(field.name, {
                      required: field.validation.required,
                      // pattern: field.validation.pattern,
                    })}
                  />
                )}
                {errors[field.name] && (
                  <span className="items-center text-red-500 font-semibold text-center text-sm w-44 ml-4">{errors[field.name]?.message}</span>
                )}
              </label>
            ))}

            <input
              type="submit"
              className=" text-slate-500 hover:text-[#0D202F] hover:shadow-lg hover:opacity-75 mt-4 py-2 mb-6 md:ml-[25%] hover:rounded-full md:justify-center transform hover:scale-125 hover:border-[#123CD0] focus:outline-none transition-all duration-150 hover:ease-in-out col-span-2 md:w-1/2 text-xl hover:font-semibold  border-b-2 font-bold"
              placeholder="Submit"
            />
          </form>
      </div>
    </div>

    {/* <div className=" h-screen  bg-slate-700 pt-36 clip-triangle -rotate-180   w-full"   /> */}
    </div>
    {/* <div className='absolute  right-0 h-screen  border-black bg-[#0D202F] hidden xl:flex w-[50%]'>
      <h1>Here Immmmm</h1>
    </div> */}
    {/* <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#123CD0" fill-opacity="1" d="M0,64L13.3,69.3C26.7,75,53,85,80,112C106.7,139,133,181,160,197.3C186.7,213,213,203,240,192C266.7,181,293,171,320,154.7C346.7,139,373,117,400,128C426.7,139,453,181,480,208C506.7,235,533,245,560,256C586.7,267,613,277,640,250.7C666.7,224,693,160,720,154.7C746.7,149,773,203,800,224C826.7,245,853,235,880,202.7C906.7,171,933,117,960,106.7C986.7,96,1013,128,1040,160C1066.7,192,1093,224,1120,202.7C1146.7,181,1173,107,1200,101.3C1226.7,96,1253,160,1280,208C1306.7,256,1333,288,1360,266.7C1386.7,245,1413,171,1427,133.3L1440,96L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg></div> */}

    {/* <div className='w-full  fixed h-auto bottom-0  opacity-60 z-50'>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f34bb" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,117.3C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div> */}
</div>
        </>
  )
}
 