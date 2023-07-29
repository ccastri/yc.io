'use client'
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false)
    const [showCronograma, setShowCronograma] = useState(false);
    const [showDocumentos, setShowDocumentos] = useState(false);
      const [showTecnovigilancia, setShowTecnovigilancia] = useState(false);
      const router = useRouter();

      const SubMenu = ({ parentRoute, options }:any) => {
          const handleOptionClick = (option: string) => {
              // Assuming your routes are in the format '/option' (e.g., '/Mantenimiento', '/Calibracion', etc.)
              router.push(`/${parentRoute}/${option}`);
          };
        return (
            <div 
    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y  divide-gray-100 rounded-md bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-dashed"
    >
      {options.map((option:string, index:number) => (
        <p 
        onClick={()=>handleOptionClick(option)}
        key={index} className="text-white  block px-4 py-2 text-sm cursor-pointer  hover:bg-slate-400" role="menuitem">
          {option}
        </p>
      ))}
    </div>
  );
};

console.log(isToggle)


  return (
    <main className='w-auto'>
    <div 
        className={`group h-16 fixed z-50 w-full items-center px-4 text-slate-100 bg-[#00619E] opacity-20 hover:opacity-100 transition-opacity ${
          isToggle && 'opacity-0 pointer-events-none'}`}>
        <div className='flex h-full items-center justify-between cursor-pointer'>

        <MenuIcon
        // onClick={()=>console.log('click')}
        className='xl:hidden group-hidden'
        onClick={()=>setIsToggle(!isToggle)}
        />
        

<div className="flex group opacity-0 flex-row items-center space-x-4 xl:opacity-100 xl:justify-end w-full">
     
      <div className='flex flex-row space-x-2 my-auto justify-center items-center h-full'>
        {/* <span> */}

      < LanguageIcon
      className='transform rotate-45 items-center '/>
        {/* </span> */}
      <span
      className='text-xl items-center'
      >ES
        </span> 
        </div>
      <p
        className="hover:bg-gradient-to-b hover:from-[#3B2F3C] hover:to-slate-500 text-white px-4 py-2 rounded-full relative"
        onMouseEnter={() => setShowCronograma(true)}
        onMouseLeave={() => setShowCronograma(false)}
      >
        Cronograma
        <span className='ml-2'>
            <KeyboardArrowDownIcon className={`absolute right-0  ${showCronograma ? 'opacity-100' : 'opacity-0'}`} />
        {showCronograma && <SubMenu
                            className='cursor-pointer'
                            parentRoute="cronograma"
                            options={['mantenimiento', 'calibracion', 'capacitacion']} />}
            </span>
      </p>

      <p
        className="hover:bg-gradient-to-b hover:from-[#3B2F3C] hover:to-slate-500 text-white px-4 py-2 rounded-full relative"
        onMouseEnter={() => setShowDocumentos(true)}
        onMouseLeave={() => setShowDocumentos(false)}
        >
        Documentos
        <span className='ml-2'>

        <KeyboardArrowDownIcon className={`absolute right-0 ${showDocumentos ? 'opacity-100' : 'opacity-0'}`} />
        </span>
        {showDocumentos && <SubMenu 
        parentRoute="documentos"
        options={['hojas de vida', 'Informes calibracion', 'Reportes mantenimiento']} />}
      </p>

      <p
        className="bg-white font-semibold text-[#3B2F3C] px-4 py-2 rounded-full relative w-44"
        onMouseEnter={() => setShowTecnovigilancia(true)}
        onMouseLeave={() => setShowTecnovigilancia(false)}
      >
        Tecnovigilancia
        <KeyboardArrowDownIcon className={`absolute right-0  ${showTecnovigilancia ? 'opacity-100' : 'opacity-0'}`} />
        {showTecnovigilancia && <SubMenu options={['Reportes eventos adversos', 'Seguimiento y calibracion']} />}
      </p>
      <p
        className="hover:bg-gradient-to-b hover:from-[#3B2F3C] hover:to-slate-500 text-white px-4 py-2 rounded-full relative"
        onClick={()=>router.push('/auth/login')}
      >
        Iniciar sesion
        {/* <span className='ml-2'>

        <KeyboardArrowDownIcon className={`absolute right-0 ${showDocumentos ? 'opacity-100' : 'opacity-0'}`} />
        </span> */}
        
      </p>
      <p
        className="hover:bg-gradient-to-b hover:from-[#3B2F3C] hover:to-slate-500 text-white px-4 py-2 rounded-full relative"
        onClick={()=>router.push('/auth/regsitrarse')}
      >
        Registrarse
        {/* <span className='ml-2'>

        <KeyboardArrowDownIcon className={`absolute right-0 ${showDocumentos ? 'opacity-100' : 'opacity-0'}`} />
        </span> */}
        
      </p>
    </div>

        </div>
    </div>
       {isToggle && <div className={`h-screen pt-4 px-4 bg-gray-800 duration-200 text-white fixed top-0 left-0 z-10 w-60 transition-transform transform ${
            isToggle ? 'translate-x-0' : '-translate-x-60'
          }`}
        >
        <MenuIcon
        onClick={()=>setIsToggle(!isToggle)}
        />

      <ul className="space-y-2 mt-12 items-center justify-center overflow-y-auto h-3/4 scrollbar-hide">
        <li
         className={`flex justify-between cursor-pointer p-3 ${showCronograma && 'bg-slate-900'}`}
          onClick={() => setShowCronograma(!setShowCronograma)}
           onMouseEnter={() => setShowCronograma(true)}
        // onMouseLeave={() => setShowCronograma(false)}
        >
          <span>Cronograma</span>
          <KeyboardArrowDownIcon
            className={`opacity-0 hover:opacity-100 ${showCronograma ? 'opacity-100' : ''}`}
        //      onMouseEnter={() => setShowCronograma(true)}
        // onMouseLeave={() => setShowCronograma(false)}
          />
        </li>
        {showCronograma && (
        <ul className="pl-4">
         <li  
         className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
         onClick={()=>router.push('/cronograma/mantenimiento')}
         >Mantenimientos</li>
         <li 
         className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
         onClick={()=>router.push('/cronograma/calibracion')}
         >Calibracion</li>
         <li 
         className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
         onClick={()=>router.push('/cronograma/capacitacion')}
         >Reportes de calibracion</li>
       </ul>
        )}

        <li
         className={`flex justify-between cursor-pointer p-3 ${showDocumentos && 'bg-slate-900'}`}
          onClick={() => setShowDocumentos(!showDocumentos)}
           onMouseEnter={() => setShowDocumentos(true)}
        >
          <span>Documentos</span>
          <KeyboardArrowDownIcon
            className={`opacity-0 ${showDocumentos ? 'opacity-100' : ''}`}
          />
        </li>
        {showDocumentos && (
           <ul className="pl-4">
            <li  
            className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
            onClick={()=>router.push('/documentos/hdv')}
            >Hojas de vida</li>
            <li 
            className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
            onClick={()=>router.push('/documentos/mantenimientos')}
            >Informes de mantenimiento</li>
            <li 
            className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
            onClick={()=>router.push('/documentos/calibraciones')}
            >Reportes de calibracion</li>
          </ul>
          )}

        <li
          className={`flex justify-between cursor-pointer p-3 ${showTecnovigilancia && 'bg-slate-900'}`}
          onClick={() => setShowTecnovigilancia(!setShowTecnovigilancia)}
           onMouseEnter={() => setShowTecnovigilancia(true)}
        >
          <span>Tecnovigilancia</span>
          <KeyboardArrowDownIcon
            className={`opacity-0 ${showTecnovigilancia ? 'opacity-100' : ''}`}
          />
        </li>
        {showTecnovigilancia && (
          <ul className="pl-4">
            <li  
            className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
            onClick={()=>router.push('/tecnovigilancia/reportes')}
            >Reportes eventos adversos</li>
            <li 
            className="cursor-pointer hover:bg-gradient-to-b hover:from-[#3B2F3C] divide-y hover:to-slate-500 text-white px-4 py-2 rounded relative"
            onClick={()=>router.push('/tecnovigilancia/seguimiento')}
            >Seguimiento y calibracion</li>
          </ul>
        )}
      </ul>
    </div>
    }
  </main>
  )
}

export default Navbar