import { IAssistServices } from '../interfaces/assist-services.interface';

export const ASSIST_SERVICES: IAssistServices[] = [
    { 
        id: 1, 
        name: 'Plomería', 
        description: 'Contenido acordion',
        categoryID: 1,
        categoryName: 'Servicios Domesticos'
    },
    { 
        id: 2, 
        name: 'Instalación Azulejos', 
        description: 'Azulejos - Cod. 123',
        categoryID: 1,
        categoryName: 'Servicios Domesticos'
    },
    { 
        id: 3, 
        name: 'Instalación Cortinas', 
        description: 'Cortinas - Cod. 456',
        categoryID: 1,
        categoryName: 'Servicios Domesticos'
    },
    { 
        id: 4, 
        name: 'Armado Cama Elástica', 
        description: 'Cama Elástica - Cod. 456',
        categoryID: 1,
        categoryName: 'Servicios Domesticos'
    }
]
