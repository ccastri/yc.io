'use client'
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const MyComponent = () => {
  

  const itemData = {
    "departamento": "prueba",
  "municipio": "desde el front",
  "entidad": "Next JS",
  "correo": "elcastritupapa@gmail.com",
  "direccion": "el rancho de yan",
  "telefono": "3333333"
  }
const handleDownload = async () => {
  
    try {
      // Realizar una solicitud POST para obtener el archivo Excel desde FastAPI
      const response = await axios.post('http://127.0.0.1:8000/hdv/fill_excel', itemData, {
        responseType: 'blob', // Indicar que se espera una respuesta binaria (archivo)
      });

      // Crear un enlace temporal y simular un clic para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'hoja_De_vida.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  // Resto del código de tu formulario y componentes en Next.js

  return (
    <div className='mt-16 p-4 bg-blue-600'>
      {/* Tu formulario aquí */}
      <span onClick={handleDownload}>Descargar Excel <CloudUploadIcon sx={{fontSize:'150px'}} className='text-white  items-center rounded-full border-gray-400'/></span>
    </div>
  );
};

export default MyComponent;