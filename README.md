
# Crossmint Megaverse

Crossmint Megaverse es un proyecto que interactúa con la API de Crossmint para gestionar la creación de objetos astrales como **Polyanets**, **Soloons** y **Comeths** en una cuadrícula en el **Megaverse**.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Licencia](#licencia)

## Instalación

Sigue los pasos a continuación para ejecutar este proyecto en tu máquina local.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Letdablo/crossmint-megaverse.git
```

### 2. Instalar dependencias

Entra en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### 3. Configurar variables de entorno

Necesitarás un `candidateId` válido para interactuar con la API. Crea un archivo `.env` con el siguiente contenido:

```bash
REACT_APP_CANDIDATE_ID=<TU_CANDIDATE_ID>
```

### 4. Ejecutar la aplicación

Ejecuta el proyecto localmente con el comando:

```bash
npm start
```

Esto levantará la aplicación en `http://localhost:3000`.


## Estructura del Proyecto

```bash
crossmint-megaverse/
│
├── public/                # Archivos estáticos
├── src/app/                   # Código fuente del proyecto
│     ├── api/               # Lógica de la API
│     ├── components/        # Componentes de React
│     ├── content/           # texto
│     ├── interfaces/        # interfaces y enums
│     ├── models/            # clases 
│     └── services/          # logica que se ejecuta en server side
├── .env                   # Variables de entorno
├── package.json           # Configuración de dependencias
├── README.md              # Documentación del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## Scripts Disponibles

### `npm run dev`
Inicia la aplicación en modo de desarrollo.

### `npm run build`
Construye el proyecto para producción en la carpeta `build`.

### `npm run lint`
Ejecuta ESLint para analizar problemas de estilo o errores en el código.

## Licencia

Este proyecto está bajo la Licencia MIT.
