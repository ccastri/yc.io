import { Dayjs } from "dayjs";

export interface UbicacionGeograficaData {
  departamento: string;
  municipio: string;
  entidad: string;
  correo: string;
  direccion: string;
  telefono: string;
}

export interface InformacionGeneralData {
  equipo: string;
  marca: string;
  modelo: string;
  serie: string;
  activoFijo: string;
  registroSanitario: string;
  ubicacion: string;
  proveedor: string;
  // Add other fields relevant to this subset
}
export interface RegistroHistorico {
  AdquisitionWay: "1. Compra" | "2. Donación" | "3. Incautación" | null;
  yearOfFabrication: string | Dayjs | null;
  boughtDate: string | Dayjs | null;
  installationDate: string | Dayjs | null;
  startingOppDate: string | Dayjs | null;
  warrantyEnd: string | Dayjs | null;
  fabricante: string | null;
}
export interface RegistroTecnicoInstalacion {
  tension: string;
  corriente: string;
  peso: string;
  potencia: string;
  frecuencia: string;
  velocidad: string;
  presion: string;
  rangoTemperatura: string;
  tecnologiaPredominante: string;
}
export interface RegistroTecnicoFuncionamiento {
  rangoVoltaje: string;
  rangoPresion: string;
  rangoHumedad: string;
  rangoCorriente: string;
  rangoFrecuencia: string;
  diagnostico: string;
  rehabilitacion: string;
  prevencion: string;
  tratamientoVida: string;
  analisisLaboratorio: string;
}
export interface ClasificacionBiomedica {
  rangoVoltaje: string;
  diagnostico: string;
  rehabilitacion: string;
  prevencion: string;
  tratamientoVida: string;
  analisisLaboratorio: string;
}
export interface ClasificacionNivelRiesgo {
  claseI: boolean;
  claseIA: boolean;
  claseIIB: boolean;
  claseIII: boolean;
}
export interface PeriodicidadMantenimiento {
  cadaTresMeses: boolean;
  anual: boolean;
}
export interface RequiereCalibracion {
  si: boolean;
  no: boolean;
}
export interface Accesorios {
  accesorio1: string;
  accesorio2: string;
  accesorio3: string;
  accesorio4: string;
  accesorio5: string;
  accesorio6: string;
}
export interface Observaciones {
  observacion1: string;
  observacion2: string;
  observacion3: string;
  observacion4: string;
  observacion5: string;
}
export type DocumentOption = "NR" | "NT" | "AX" | "NAX" | "NA" | null;

export interface DocumentosSoportes {
  copiaRegistroSanitario: DocumentOption;
  copiaRegistroImportacion: DocumentOption;
  copiaFactura: DocumentOption;
  copiaIngresoAlmacen: DocumentOption;
  copiaActaReciboSatisfaccion: DocumentOption;
  guiaRapidaOperacion: DocumentOption;
  recomendacionUsoAccesorios: DocumentOption;
  recomendacionAseguramientoMetrologico: DocumentOption;
  estimativoCostoAccesorios: DocumentOption;
  recomendacionesLimpiezaDesinfeccion: DocumentOption;
  registroCapacitacion: DocumentOption;
}
