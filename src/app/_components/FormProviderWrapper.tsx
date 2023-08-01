// FormProviderWrapper.tsx
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { InformacionGeneralData, UbicacionGeograficaData, RegistroHistorico, RegistroTecnicoInstalacion } from './path/to/interfaces';

interface FormProviderWrapperProps {
  children: React.ReactNode;
}

const FormProviderWrapper: React.FC<FormProviderWrapperProps> = ({ children }) => {
  // Use a union type for all form data types used in the child components
  type AllFormData = UbicacionGeograficaData | InformacionGeneralData | RegistroTecnicoInstalacion;

  // Create your form instance here with the union type
  const methods = useForm<AllFormData>();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormProviderWrapper;