'use client'
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false)
    const [showCronograma, setShowCronograma] = useState(false);
    const [showDocumentos, setShowDocumentos] = useState(false);
      const [showTecnovigilancia, setShowTecnovigilancia] = useState(false);

      const SubMenu = ({ parentRoute, options }:any) => {
          const router = useRouter();
          const handleOptionClick = (option: string) => {
              // Assuming your routes are in the format '/option' (e.g., '/Mantenimiento', '/Calibracion', etc.)
              router.push(`/${parentRoute}/${option}`);
          };
        return (
            <div 
    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y  divide-gray-100 rounded-md bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      {options.map((option:string, index:number) => (
        <p 
        onClick={()=>handleOptionClick(option)}
        key={index} className="text-white  block px-4 py-2 text-sm cursor-pointer hover:bg-slate-400" role="menuitem">
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
        className={`h-12 fixed z-50 w-full items-center px-4 text-slate-100 bg-slate-500 opacity-20 hover:opacity-100 transition-opacity ${
          isToggle && 'opacity-0 pointer-events-none'}`}>
        <div className='flex h-full items-center justify-between cursor-pointer'>

        <MenuIcon
        // onClick={()=>console.log('click')}
        className='xl:hidden'
        onClick={()=>setIsToggle(!isToggle)}
        />

<div className="flex group opacity-0 flex-row items-center space-x-4 xl:opacity-100 xl:justify-end w-full">
      <p
        className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg relative"
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
        className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg relative"
        onMouseEnter={() => setShowDocumentos(true)}
        onMouseLeave={() => setShowDocumentos(false)}
      >
        Documentos
        <KeyboardArrowDownIcon className={`absolute right-4 ${showDocumentos ? 'opacity-100' : 'opacity-0'}`} />
        {showDocumentos && <SubMenu options={['Hojas de vida', 'Informes calibracion', 'Reportes mantenimiento']} />}
      </p>

      <p
        className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg relative"
        onMouseEnter={() => setShowTecnovigilancia(true)}
        onMouseLeave={() => setShowTecnovigilancia(false)}
      >
        Tecnovigilancia
        <KeyboardArrowDownIcon className={`absolute right-4 ${showTecnovigilancia ? 'opacity-100' : 'opacity-0'}`} />
        {showTecnovigilancia && <SubMenu options={['Reportes eventos adversos', 'Seguimiento y calibracion']} />}
      </p>
    </div>

        </div>
    </div>
       {isToggle && <div className={`h-screen pt-4 px-4 bg-gray-800 duration-200 text-white fixed top-0 left-0 z-10 w-60 transition-transform transform ${
            isToggle ? 'translate-x-0' : '-translate-x-60'
          }`}
        >
        <MenuIcon
        // onClick={()=>console.log('click')}
        
        onClick={()=>setIsToggle(!isToggle)}
        />

      <ul className="space-y-2">
        <li
          className="flex justify-between cursor-pointer"
          onClick={() => setShowCronograma(!showCronograma)}
        >
          <span>Cronograma</span>
          <KeyboardArrowDownIcon
            className={`opacity-0 ${showCronograma ? 'opacity-100' : ''}`}
          />
        </li>
        {showCronograma && (
          <ul className="pl-4">
            <li className="cursor-pointer">Mantenimiento</li>
            <li className="cursor-pointer">Calibracion</li>
            <li className="cursor-pointer">Capacitacion</li>
          </ul>
        )}

        <li
          className="flex justify-between cursor-pointer"
          onClick={() => setShowDocumentos(!showDocumentos)}
        >
          <span>Documentos</span>
          <KeyboardArrowDownIcon
            className={`opacity-0 ${showDocumentos ? 'opacity-100' : ''}`}
          />
        </li>
        {showDocumentos && (
          <ul className="pl-4">
            <li className="cursor-pointer">Hojas de vida</li>
            <li className="cursor-pointer">Informes calibracion</li>
            <li className="cursor-pointer">Reportes mantenimiento</li>
          </ul>
        )}

        <li
          className="flex justify-between cursor-pointer"
          onClick={() => setShowTecnovigilancia(!showTecnovigilancia)}
        >
          <span>Tecnovigilancia</span>
          <KeyboardArrowDownIcon
            className={`opacity-0 ${showTecnovigilancia ? 'opacity-100' : ''}`}
          />
        </li>
        {showTecnovigilancia && (
          <ul className="pl-4">
            <li className="cursor-pointer">Reportes eventos adversos</li>
            <li className="cursor-pointer">Seguimiento y calibracion</li>
          </ul>
        )}
      </ul>
    </div>
    }
  </main>
  )
}

export default Navbar