import React from 'react'
import { stepSecondToLast } from './HdvII'
import { FieldErrors, UseFormRegister, useForm, useFormContext } from 'react-hook-form';

const HdvXI:React.FC<stepSecondToLast> = ({onChange,  }) => {
    const onSubmit = async (data: any) => {
      alert(JSON.stringify(data));
      
    }
  const { register, handleSubmit, formState: { errors } } = useFormContext<AllFormData>();
  return (
    <div>
      
      <form action='' onSubmit={handleSubmit(onSubmit)}>
      <input type="submit" />
      </form>
    </div>
  )
}

export default HdvXI