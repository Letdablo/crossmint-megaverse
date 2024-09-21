
# Crossmint Megaverse

Crossmint Megaverse es un proyecto que interactúa con la API de Crossmint para gestionar la creación de objetos astrales como **Polyanets**, **Soloons** y **Comeths** en una cuadrícula en el **Megaverse**.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [API](#api)
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

## Uso

El proyecto carga el estado de una cuadrícula desde la API del Megaverse y permite crear objetos astrales como **Polyanets**, **Soloons** y **Comeths**. Estos objetos se pueden agregar en posiciones específicas de la cuadrícula.

### Ejemplo de uso en React

Este proyecto cuenta con un componente `GridComponent` que obtiene el estado de la cuadrícula y utiliza el hook `usePolyanetCross` para gestionar la creación de objetos astrales en las coordenadas diagonales:

```typescript
useEffect(() => {
  const createAstralObjectsInGrid = async () => {
    if (goal.length > 0) {
      for (let x = 0; x < goal.length; x++) {
        for (let y = 0; y < goal[x].length; y++) {
          const astralObject = goal[x][y];
          await createAstralObjects(astralObject, x, y);
        }
      }
    }
  };
  createAstralObjectsInGrid();
}, [goal]);
```

## Estructura del Proyecto

```bash
crossmint-megaverse/
│
├── public/                # Archivos estáticos
├── src/                   # Código fuente del proyecto
│   ├── api/               # Lógica de la API
│   ├── components/        # Componentes de React
│   ├── hooks/             # Custom hooks
│   ├── styles/            # Estilos del proyecto
│   └── utils/             # Funciones y helpers
├── .env                   # Variables de entorno
├── package.json           # Configuración de dependencias
├── README.md              # Documentación del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## Scripts Disponibles

### `npm start`
Inicia la aplicación en modo de desarrollo.

### `npm run build`
Construye el proyecto para producción en la carpeta `build`.

### `npm run lint`
Ejecuta ESLint para analizar problemas de estilo o errores en el código.

### `npm test`
Ejecuta las pruebas con Jest y React Testing Library.

## API

Este proyecto interactúa con la API de Crossmint Megaverse, utilizando los siguientes endpoints:

### Crear un Polyanet
```http
POST /api/polyanets
```

**Parámetros**:
- `row` (número): Fila en la cuadrícula.
- `column` (número): Columna en la cuadrícula.
- `candidateId` (string): ID del candidato.

### Crear un Soloon
```http
POST /api/soloons
```

**Parámetros**:
- `row` (número): Fila en la cuadrícula.
- `column` (número): Columna en la cuadrícula.
- `color` (string): Color del Soloon (puede ser "blue", "red", "purple", o "white").
- `candidateId` (string): ID del candidato.

### Crear un Cometh
```http
POST /api/comeths
```

**Parámetros**:
- `row` (número): Fila en la cuadrícula.
- `column` (número): Columna en la cuadrícula.
- `direction` (string): Dirección del Cometh (puede ser "up", "down", "left", o "right").
- `candidateId` (string): ID del candidato.

## Licencia

Este proyecto está bajo la Licencia MIT.
