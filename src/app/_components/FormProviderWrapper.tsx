// FormProviderWrapper.tsx
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { InformacionGeneralData, UbicacionGeograficaData, RegistroHistorico, RegistroTecnicoInstalacion, RegistroTecnicoFuncionamiento, ClasificacionBiomedica, ClasificacionNivelRiesgo, PeriodicidadMantenimiento, DocumentosSoportes } from '../../../hdv';

export type AllFormData = UbicacionGeograficaData | InformacionGeneralData | RegistroTecnicoInstalacion |RegistroHistorico | RegistroTecnicoFuncionamiento | ClasificacionBiomedica |ClasificacionNivelRiesgo| PeriodicidadMantenimiento | DocumentosSoportes;
interface FormProviderWrapperProps {
  children: React.ReactNode;
}

const FormProviderWrapper: React.FC<FormProviderWrapperProps> = ({ children }) => {
  // Use a union type for all form data types used in the child components

  // Create your form instance here with the union type
  const methods = useForm<AllFormData>();

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormProviderWrapper;