import { Dispatch, MutableRefObject, SetStateAction, createContext, useContext, useRef, useState } from "react";
import { DocumentosSoportes, RegistroHistorico } from "../../../hdv";
import dayjs from "dayjs";

type IFormStepsType = {
  prevFormStep: ()=>void
  nextFormStep: ()=>void
  formStep: number
  setFormStep: Dispatch<SetStateAction<number>>;
  elementsRefs: MutableRefObject<(HTMLDivElement | null)[]>
  scrollToForm: (index:number)=>void
  files: File[]
  setFiles:Dispatch<SetStateAction<File[]>>
  selectedFiles: File[]
  setSelectedFiles:Dispatch<SetStateAction<File[]>>
  selectedOptions: DocumentosSoportes,
  setSelectedOptions: Dispatch<SetStateAction<DocumentosSoportes>>
  selectedDate: RegistroHistorico,
  setSelectedDate: Dispatch<SetStateAction<RegistroHistorico>>
  inputFields: string[]
   setInputFields: Dispatch<SetStateAction<string[]>>

}

const CurrentFormStepContext = createContext<IFormStepsType | null>(null);

export const CurrentStepProvider:React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [formStep, setFormStep] = useState(0);
    const elementsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const nextFormStep = () => {
    setFormStep((currentStep) => {
        const nextStep = currentStep + 1;
        scrollToForm(nextStep); // Scroll to the next step
    localStorage.setItem('formStep', nextStep.toString()); // Store the previous step in localStorage
        return nextStep; // Return the updated value of currentStep
    });
    };
    const prevFormStep = () => {
    setFormStep((currentStep) => {
        const prevStep = currentStep - 1;
        scrollToForm(prevStep); // Scroll to the next step
        localStorage.setItem('formStep', prevStep.toString()); // Store the previous step in localStorage
        return prevStep; // Return the updated value of currentStep
    });
    };
    const scrollToForm = (index: number) => {
        if (elementsRefs.current[index]) {
        elementsRefs.current[index]?.scrollIntoView({ behavior: 'smooth' }); // Step 3: Scroll to the form
        }
    };
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [files, setFiles] = useState<File[]>([]);
const [selectedDate, setSelectedDate] = useState<RegistroHistorico>({
  AdquisitionWay: null,
  yearOfFabrication:  dayjs(),
  boughtDate: dayjs(),
  installationDate: dayjs(),
  startingOppDate: dayjs(),
  warrantyEnd: dayjs(),
  fabricante: null,
  });
  const [inputFields, setInputFields] = useState<string[]>(['']);
const [selectedOptions, setSelectedOptions] = useState<DocumentosSoportes>({
    copiaRegistroSanitario: null,
    copiaRegistroImportacion: null,
    copiaFactura: null,
    copiaIngresoAlmacen: null,
    copiaActaReciboSatisfaccion: null,
    guiaRapidaOperacion: null,
    recomendacionUsoAccesorios: null,
    recomendacionAseguramientoMetrologico: null,
    estimativoCostoAccesorios: null,
    recomendacionesLimpiezaDesinfeccion: null,
    registroCapacitacion: null,
  });
const [classOptions, setClassOptions] = useState<string[]>([
    'clase I',
    'clase II',
    'clase III'
]);

    const contextValue: IFormStepsType = {
        prevFormStep,
        nextFormStep,
        scrollToForm,
        elementsRefs,
        formStep,
        setFormStep,
        selectedFiles,
        setSelectedFiles,
        files,
        setFiles,
        selectedOptions,
        setSelectedOptions,
        selectedDate,
        setSelectedDate,
        inputFields, 
        setInputFields,
    
  };

  return (
    <CurrentFormStepContext.Provider
      value={contextValue}
    >
      {children}
    </CurrentFormStepContext.Provider>
  );
};

export const useFormCurrentStep = (): IFormStepsType => {
  const context = useContext(CurrentFormStepContext);
  if (!context) {
    throw new Error("useCustomization must be used within a CurrentFormStepContext");
  }
  return context;
};