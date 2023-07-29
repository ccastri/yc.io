import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormContext, FieldErrors, RegisterOptions, ValidationRule } from 'react-hook-form';
// import { RegisterForm, User } from './RegisterForm';
interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  // register: UseFormRegisterReturn;
}
// type ChildComponentProps = {
//   onUpload: (files: File[]) => void;
//   errors: FieldErrors<User> 
//     // name: string[] | undefined  | File[] | 'img'
//   name: 'img'  | keyof User
//     validations: any
//     // user: User
//     // setUser: React.Dispatch<React.SetStateAction<User>>
    

// };

export const FileUploader = ({ onUpload}:FileUploaderProps) => {
// console.log(onUpload)
  const [files, setFiles] = useState<File[]>([]);
  // console.log(files)
  // {user.img?.[0] && console.log(user.img?.[0].name)}

  // const { register } = useFormContext();
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
      onUpload([...files, ...acceptedFiles]);
      // setUser({...user, img:[{...files}]})
    },
    [files, onUpload,]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // const filesPreview = useMemo(
  //   () =>
  //     files.map((file) => (
  //       <li key={file.name}>
  //         {file.name} - {file.size} bytes
  //       </li>
  //     )),
  //   [files]
  // );
    // const filesPreview = files.map((file) => (
    // <li className='bottom-0' key={file.name}>
    //   {file.name} - {file.size} bytes
    // </li>
  // ));
  return (
    <div className=' bg-[#747a80] relative  h-[50%] flex flex-col items-center opacity-70 rounded-xl cursor-pointer transition-all duration-125 transform hover:ease-in-out hover:scale-105 hover:opacity-100'>
      <div {...getRootProps() }
      className='flex flex-col  justify-center px-8 space-y-6 items-center h-full '
      >
        <input
          {...getInputProps()}
          // {...register(name, validations)}
          //  onChange={}
          className="h-full border-2 border-red-600"
        />
        <span className=' border-2 border-[#FFFFFF] rounded-full my-0 p-1'><CloudUploadIcon sx={{fontSize:'30px'}} className='text-white  items-center rounded-full border-gray-400'/>
        </span>
        <h2 className='font-semibold text-xs text-center text-white opacity-80'>Presione o arrastre para añadir archivos</h2>
      </div>
    {/* <ul className='flex flex-col  mx-6 my-auto bottom-0 text-center  h-full rounded-xl flex-wrap'>{filesPreview}</ul> */}
      {/* {files.length === 0 && errors[name] ? <span className="text-red-500 font-bold mx-2 p-2">{errors[name]?.message}</span>: null} */}
  </div>
  );
};