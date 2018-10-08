import { IAssistServices } from '../interfaces/assist-services.interface';

export const ASSIST_SERVICES: IAssistServices[] = [
  {
    id: 1,
    name: 'Servicios de Plomería',
    description: 'Plomeria',
    categoryID: 1,
    categoryName: 'Servicios Domesticos',
    items: [
      'Cambio de llave de lavamanos',
      'Cambio de llave de lavaplatos',
      'Cambio de llave jardín',
      'Cambio de llave lavadoras',
      'Reparación de llave de lavamanos',
      'Reparación de llave de lavaplatos',
      'Reparación de llave lavadoras',
      'Reparación de llave jardín',
      'Cambio de flexibles lavaplatos',
      'Cambio de flexibles lavamanos',
      'Cambio manilla de estanque'
    ]
  },
  {
    id: 2,
    name: 'Servicios de Electricidad',
    description: 'Electricidad',
    categoryID: 1,
    categoryName: 'Servicios Domesticos',
    items: ['Cambio de enchufes', 'Cambio de soquetes', 'Cambio de automático', 'Cambio de diferencial']
  },
  {
    id: 3,
    name: 'Servicios de Cerrajería',
    description: 'Cerrajería',
    categoryID: 1,
    categoryName: 'Servicios Domesticos',
    items: ['Cerrajería Hogar', 'Cerrajería Automotriz']
  },
  {
    id: 4,
    name: 'Servicio en Ruta',
    description: 'En Ruta',
    categoryID: 1,
    categoryName: 'Servicios Domesticos',
    items: ['Puente de Batería', 'Remolque y grúas', 'Cambio llanta de repuesto']
  },
  {
    id: 5,
    name: 'Servicio en Viaje',
    description: 'En Viaje',
    categoryID: 1,
    categoryName: 'Servicios Domesticos',
    items: [
      'Asistencia médica',
      'Traslado médico',
      'Medicamentos ambulatorios',
      'Gastos de hotel por accidente',
      'Asistencia dental de urgencia',
      'Asistencia robo de documentos',
      'Asistencia repatriación funeraria',
      'Acompañamiento de menores',
      'Asistencia legal accidente o robo',
      'Reembolso perdida de equipaje'
    ]
  }
];
