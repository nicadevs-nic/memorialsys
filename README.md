# 🏥 Sistema de Administración de Funerarias - Frontend - MemorialSys

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Solución tecnológica completa para la gestión de servicios funerarios**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/tu-usuario/funeraria-admin)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/funeraria-admin)

</div>

## 📋 Tabla de Contenidos
- [🎯 Visión General](#-visión-general)
- [✨ Características Principales](#-características-principales)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Comenzando](#-comenzando)
- [📁 Estructura de Carpetas](#-estructura-de-carpetas)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [🎨 Guía de Estilos](#-guía-de-estilos)
- [🔌 Integración API](#-integración-api)
- [🧪 Testing](#-testing)
- [👥 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

---

## 🎯 Visión General

**MemorialSys** es una aplicación web moderna diseñada específicamente para la gestión integral de servicios funerarios. Desarrollada con las últimas tecnologías web, proporciona una solución completa para administrar clientes, servicios, inventario, facturación y documentación legal en el sector funerario.

### 🔍 Características Clave
- ✅ **Gestión completa de clientes y familiares**
- ✅ **Seguimiento de servicios funerarios end-to-end**
- ✅ **Inventario inteligente de productos funerarios**
- ✅ **Generación automática de documentos legales**
- ✅ **Sistema de facturación y pagos integrado**
- ✅ **Reportes y analíticas en tiempo real**
- ✅ **Interfaz responsiva y accesible**

---

## ✨ Características Principales

### 📋 Módulos del Sistema

| Módulo | Descripción | Estado |
|--------|-------------|--------|
| **👥 Gestión de Clientes** | Registro de clientes, familiares y difuntos | ✅ Completo |
| **⚰️ Servicios Funerarios** | Administración de servicios desde inicio hasta finalización | ✅ Completo |
| **📦 Inventario** | Control de ataúdes, urnas, flores y otros insumos | 🚧 En desarrollo |
| **💰 Facturación** | Sistema de cotizaciones, facturas y pagos | ✅ Completo |
| **📊 Reportes** | Estadísticas, reportes financieros y operativos | ✅ Completo |
| **📄 Documentos** | Generación de certificados y documentos legales | 🚧 En desarrollo |
| **🔐 Seguridad** | Autenticación, roles y permisos | ✅ Completo |

### 🛠️ Tecnologías Utilizadas

- **Frontend:** React 18 
- **Estilos:** Bootstrap 5.8 + ANT Design
- **Estado:** Redux Toolkit + RTK Query
- **Formularios:** React Hook Form + Zod
- **Ruteo:** React Router DOM v6
- **Iconos:** ANT Design Icons
- **Gráficos:** Recharts
- **PDF:** React-PDF
- **Testing:** Jest + React Testing Library

---

## 🏗️ Arquitectura del Proyecto
funeraria-admin/
├── 📂 src/
│ ├── 📂 api/ # Configuración y servicios API
│ ├── 📂 assets/ # Recursos estáticos
│ ├── 📂 components/ # Componentes reutilizables
│ │ ├── ui/ # Componentes de UI puros
│ │ ├── layout/ # Componentes de layout
│ │ └── shared/ # Componentes compartidos
│ ├── 📂 features/ # Funcionalidades por dominio
│ │ ├── auth/ # Autenticación
│ │ ├── clients/ # Gestión de clientes
│ │ ├── services/ # Servicios funerarios
│ │ ├── inventory/ # Inventario
│ │ ├── billing/ # Facturación
│ │ └── reports/ # Reportes
│ ├── 📂 hooks/ # Custom hooks
│ ├── 📂 store/ # Estado global (Redux)
│ ├── 📂 utils/ # Utilidades y helpers
│ ├── 📂 types/ # Tipos TypeScript
│ └── 📂 router/ # Configuración de rutas

### 🎯 Principios de Diseño
- **Arquitectura Feature-Based**: Organización por dominio de negocio
- **Componentes Reutilizables**: UI consistente en toda la aplicación
- **Separación de Responsabilidades**: Lógica de negocio separada de presentación

---

## 🚀 Comenzando

### Prerrequisitos

- Node.js 18.0.0 o superior
- npm 9.0.0 o yarn 1.22.0
- Git

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/nicadevs-nic/memorialsys
cd funeraria-admin

# 2. Instalar dependencias
npm install
# o
yarn install

# 3. Configurar variables de entorno
# cp .env.example .env.local
# Editar .env.local con tus configuraciones

# 4. Iniciar servidor de desarrollo
npm run dev
# o
yarn dev

# La aplicación estará disponible en http://localhost:5173
#Variables de Entorno
#Crea un archivo .env.local en la raíz del proyecto:

#env
#VITE_API_URL=http://localhost:3000/api
#VITE_APP_NAME=Funeraria Admin
#VITE_DEFAULT_LOCALE=es
#VITE_ENABLE_MOCK_API=true
📁 Estructura de Carpetas Detallada
bash
src/
├── api/                    # Configuración de API
│   ├── axiosConfig.ts     # Configuración de Axios
│   ├── endpoints/         # Endpoints organizados
│   └── interceptors.ts    # Interceptores de peticiones
│
├── assets/                # Recursos estáticos
│   ├── fonts/            # Fuentes personalizadas
│   ├── images/           # Imágenes del sistema
│   └── styles/           # Estilos globales
│
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes de UI (Button, Input, etc.)
│   ├── layout/          # Componentes de layout
│   └── shared/          # Componentes compartidos
│
├── features/             # Funcionalidades por dominio (FEATURE-BASED)
│   ├── auth/            # Autenticación y autorización
│   │   ├── components/  # Componentes específicos
│   │   ├── hooks/       # Hooks específicos
│   │   ├── pages/       # Páginas de autenticación
│   │   └── types/       # Tipos específicos
│   │
│   ├── clients/         # Gestión de clientes
│   ├── services/        # Servicios funerarios
│   ├── inventory/       # Gestión de inventario
│   ├── billing/         # Facturación y pagos
│   └── reports/         # Reportes y estadísticas
│
├── hooks/               # Custom hooks globales
├── store/               # Estado global (Redux Toolkit)
├── utils/               # Utilidades y helpers
├── types/               # Tipos TypeScript globales
└── router/              # Configuración de rutas
🔧 Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

Desarrollo
bash
# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev

# Abre http://localhost:5173 en tu navegador
Build y Producción
bash
# Crear build de producción
npm run build
# o
yarn build

# Previsualizar build de producción
npm run preview
# o
yarn preview

# Analizar tamaño del bundle
npm run analyze
Testing
bash
# Ejecutar tests
npm run test
# o
yarn test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests de extremo a extremo
npm run test:e2e
Calidad de Código
bash
# Ejecutar ESLint
npm run lint
# o
yarn lint

# Corregir problemas de ESLint automáticamente
npm run lint:fix

# Ejecutar Prettier
npm run format

# Verificar tipos TypeScript
npm run type-check
🎨 Guía de Estilos
Sistema de Diseño
El proyecto utiliza Tailwind CSS como framework de estilos principal, complementado con CSS Modules para estilos específicos de componentes.

Paleta de Colores
css
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',  // Azul principal
          600: '#0284c7',
          700: '#0369a1',
        },
        secondary: {
          500: '#8b5cf6',  // Violeta
        },
        neutral: {
          800: '#1e293b',  // Gris oscuro
        },
        funeraria: {
          elegy: '#2d3748',    // Color principal funerario
          solace: '#4a5568',   // Color secundario
          memory: '#718096',   // Color terciario
        }
      }
    }
  }
}
Componentes de UI
Ejemplo de uso de componentes:

tsx
import { Button, Card, Input } from '@/components/ui';

function ExampleComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Nuevo Cliente</h2>
      <Input label="Nombre completo" placeholder="Ingrese el nombre" />
      <Button variant="primary" className="mt-4">
        Guardar Cliente
      </Button>
    </Card>
  );
}
🔌 Integración API
Configuración de Axios
typescript
// src/api/axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir token de autenticación
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
Ejemplo de Endpoint
typescript
// src/api/endpoints/clients.ts
import api from '../axiosConfig';

export const clientsApi = {
  // Obtener todos los clientes
  getAll: (params?: PaginationParams) => 
    api.get<Client[]>('/clients', { params }),
  
  // Crear nuevo cliente
  create: (clientData: CreateClientDto) => 
    api.post<Client>('/clients', clientData),
  
  // Actualizar cliente
  update: (id: string, clientData: UpdateClientDto) => 
    api.put<Client>(`/clients/${id}`, clientData),
  
  // Eliminar cliente
  delete: (id: string) => 
    api.delete(`/clients/${id}`),
};
RTK Query (Recomendado)
typescript
// src/store/api/clientsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Client'],
  endpoints: (builder) => ({
    getClients: builder.query<Client[], PaginationParams>({
      query: (params) => ({ url: 'clients', params }),
      providesTags: ['Client'],
    }),
    createClient: builder.mutation<Client, CreateClientDto>({
      query: (clientData) => ({
        url: 'clients',
        method: 'POST',
        body: clientData,
      }),
      invalidatesTags: ['Client'],
    }),
  }),
});
🧪 Testing
Estrategia de Testing
Unit Tests: Componentes individuales y hooks

Integration Tests: Interacción entre componentes

E2E Tests: Flujos completos de usuario

Ejemplo de Test de Componente
typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renderiza correctamente', () => {
    render(<Button>Hola Mundo</Button>);
    expect(screen.getByText('Hola Mundo')).toBeInTheDocument();
  });

  it('maneja el evento click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
Configuración de Jest
javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/**/index.ts',
  ],
};
👥 Contribución
¡Las contribuciones son bienvenidas! Para contribuir al proyecto:

Flujo de Trabajo
Fork el repositorio

Crea una rama para tu funcionalidad (git checkout -b feature/AmazingFeature)

Commit tus cambios (git commit -m 'Add: AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abre un Pull Request

Convenciones de Commits
Usamos Conventional Commits:

bash
# Estructura:
<type>(<scope>): <description>

# Ejemplos:
feat(auth): add login with social media
fix(services): correct date calculation in service timeline
docs(readme): update installation instructions
style(ui): format button component
refactor(api): simplify axios configuration
test(clients): add unit tests for client form
Tipos de Commits
feat: Nueva funcionalidad

fix: Corrección de errores

docs: Documentación

style: Cambios de formato

refactor: Refactorización de código

test: Pruebas

chore: Tareas de mantenimiento

📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Atribuciones
Iconos: Lucide React

UI Components: Diseño personalizado con Tailwind CSS

Imágenes: Recursos propios con licencia comercial

Aviso Legal
Este software es para fines de gestión administrativa. El desarrollador no se hace responsable por el uso indebido de la aplicación.

🤝 Soporte y Contacto
Para reportar bugs, solicitar características o hacer preguntas:

📧 Email: soporte@nicadevs.com

🐛 Issues: GitHub Issues

💬 Discusión: GitHub Discussions

Desarrollado por
<div align="center">
Nicadevs - Soluciones Tecnológicas para Empresas Nicaragüenses
🌐 Website | 🐦 Twitter | 💼 LinkedIn

</div>
📊 Estado del Proyecto
Módulo	Progreso	Notas
Core Infrastructure	100%	Base del proyecto establecida
Authentication	100%	Login, registro, recuperación
Client Management	85%	CRUD completo, falta búsqueda avanzada
Service Management	70%	Creación y seguimiento básico
Inventory	40%	Estructura base implementada
Billing	60%	Facturación básica, falta integración pagos
Reports	30%	Gráficos básicos implementados
Última actualización: Enero 2024

<div align="center">