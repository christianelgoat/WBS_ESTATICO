import { BusinessObjective } from './types';

export const wbsData: BusinessObjective[] = [
  {
    title: "Reducir el desperdicio de alimentos en un 15%",
    items: [
      {
        id: "1.0",
        name: "OE1: Diseño y Desarrollo del MVP",
        responsible: "Jorge Cruz (PM)",
        tools: "ClickUp, Figma, GitHub",
        children: [
          {
            id: "1.1",
            name: "Análisis y Definición",
            responsible: "Jorge Cruz (UX/UI)",
            tools: "Documento del Proyecto, Formularios",
            children: [
              {
                id: "1.1.1",
                name: "Documento de Requerimientos del MVP.",
                responsible: "Christian Flores",
                tools: "Google Docs",
                isDeliverable: true,
              },
            ],
          },
          {
            id: "1.2",
            name: "Diseño de Experiencia e Interfaz (UX/UI)",
            responsible: "Jorge Cruz (UX/UI)",
            tools: "Figma",
            children: [
              {
                id: "1.2.1",
                name: "Mapa de Flujo de Usuario y Wireframes.",
                responsible: "Jorge Cruz",
                tools: "Figma (FigJam)",
                isDeliverable: true,
              },
              {
                id: "1.2.2",
                name: "Prototipo de Alta Fidelidad Interactivo.",
                responsible: "Jorge Cruz",
                tools: "Figma",
                isDeliverable: true,
              },
            ],
          },
          {
            id: "1.3",
            name: "Desarrollo del Frontend (Cliente)",
            responsible: "Anthony Huaman (Frontend)",
            tools: "Visual Studio Code, GitHub",
            children: [
              {
                id: "1.3.1",
                name: "Interfaz de Usuario programada y funcional.",
                responsible: "Anthony Huaman",
                tools: "Vercel",
                isDeliverable: true,
              },
            ],
          },
          {
            id: "1.4",
            name: "Desarrollo del Backend (Servidor)",
            responsible: "Mauricio Galindo (Backend)",
            tools: "Visual Studio Code, GitHub",
            children: [
              {
                id: "1.4.1",
                name: "Base de Datos configurada.",
                responsible: "Mauricio Galindo",
                tools: "Railway",
                isDeliverable: true,
              },
              {
                id: "1.4.2",
                name: "API para la gestión de productos y stock.",
                responsible: "Mauricio Galindo",
                tools: "Railway",
                isDeliverable: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Reducir el tiempo de gestión manual en un 25%",
    items: [
      {
        id: "2.0",
        name: "OE2: Implementación y Pruebas Piloto",
        responsible: "Jorge Cruz (PM)",
        tools: "ClickUp, MVP Funcional",
        children: [
          {
            id: "2.1",
            name: "Despliegue y Selección de Piloto",
            responsible: "Jorge Cruz (PM)",
            tools: "Excel, Correo Electrónico",
            children: [
              {
                id: "2.1.1",
                name: "MVP desplegado en un entorno online.",
                responsible: "Mauricio Galindo",
                tools: "Vercel, Railway",
                isDeliverable: true,
              },
              {
                id: "2.1.2",
                name: "Lista de 5 MYPES confirmadas para el piloto.",
                responsible: "Jorge Cruz",
                tools: "Google Sheets",
                isDeliverable: true,
              },
            ],
          },
          {
            id: "2.2",
            name: "Ejecución del Programa Piloto",
            responsible: "Todo el Equipo",
            tools: "MVP Funcional, WhatsApp",
            children: [
              {
                id: "2.2.1",
                name: "Sesión de Onboarding y capacitación inicial.",
                responsible: "Jorge Cruz",
                tools: "Google Meet",
                isDeliverable: true,
              },
            ],
          },
        ],
      },
      {
        id: "3.0",
        name: "OE3: Medición de Impacto",
        responsible: "Jorge Cruz (PM)",
        tools: "Formularios, Excel",
        children: [
          {
            id: "3.1",
            name: "Análisis de Resultados",
            responsible: "Jorge Cruz (PM)",
            tools: "Google Forms, Excel",
            children: [
              {
                id: "3.1.1",
                name: "Informe de métricas pre y post piloto.",
                responsible: "Christian Flores",
                tools: "Google Docs",
                isDeliverable: true,
              },
              {
                id: "3.1.2",
                name: "Reporte final con el % de reducción logrado.",
                responsible: "Christian Flores",
                tools: "Google Docs / Slides",
                isDeliverable: true,
              },
            ],
          },
        ],
      },
      {
        id: "4.0",
        name: "OE4: Adopción y Formación",
        responsible: "Jorge Cruz (UX/UI)",
        tools: "Loom, Canva",
        children: [
          {
            id: "4.1",
            name: "Creación de Material de Soporte",
            responsible: "Jorge Cruz (UX/UI)",
            tools: "Loom, Canva",
            children: [
              {
                id: "4.1.1",
                name: "Guía Rápida de Usuario en PDF.",
                responsible: "Christian Flores",
                tools: "Canva / Google Docs",
                isDeliverable: true,
              },
              {
                id: "4.1.2",
                name: "Video Tutorial (2-3 min) del sistema.",
                responsible: "Jorge Cruz",
                tools: "Loom / Screen Recorder",
                isDeliverable: true,
              },
            ],
          },
           {
            id: "4.2",
            name: "Pruebas de Calidad (QA)",
            responsible: "Mauricio Galindo (QA)",
            tools: "MVP Funcional",
            children: [
              {
                id: "4.2.1",
                name: "Documento de reporte de bugs y mejoras.",
                responsible: "Mauricio Galindo",
                tools: "ClickUp / Google Sheets",
                isDeliverable: true,
              },
            ],
          },
        ],
      },
    ],
  },
];