README.md
markdown
Copiar código
# Crossmint Megaverse

Crossmint Megaverse es un proyecto que interactúa con el servicio de API de Crossmint para crear, manipular y administrar objetos astrales como **Polyanets**, **Soloons** y **Comeths** dentro de una cuadrícula en el **Megaverse**.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [API](#api)
- [Licencia](#licencia)

## Instalación

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

### 1. Clona el repositorio:

```bash
git clone https://github.com/Letdablo/crossmint-megaverse.git
2. Instala las dependencias:
bash
Copiar código
cd crossmint-megaverse
npm install
3. Configura el proyecto
Es importante tener un candidateId válido para interactuar con la API del Megaverse. Debes configurar las variables de entorno en un archivo .env:

bash
Copiar código
REACT_APP_CANDIDATE_ID=<TU_CANDIDATE_ID>
4. Ejecuta el proyecto:
bash
Copiar código
npm start
El proyecto debería estar disponible en http://localhost:3000.

Uso
Este proyecto utiliza la API del Megaverse para crear objetos astrales en una cuadrícula basada en una plantilla dada. Puedes crear diferentes tipos de objetos astrales como:

Polyanets
Soloons (azul, rojo, púrpura, blanco)
Comeths (dirección: arriba, abajo, izquierda, derecha)
Ejemplo de cómo se utiliza
El componente GridComponent obtiene los datos del estado de la cuadrícula desde la API y los procesa para generar los objetos astrales en la cuadrícula correspondiente.

typescript
Copiar código
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
Estructura del Proyecto
bash
Copiar código
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
Scripts Disponibles
En este proyecto, puedes ejecutar los siguientes comandos:

npm start
Inicia la aplicación en modo de desarrollo.

npm run build
Construye el proyecto para producción en la carpeta build.

npm run lint
Ejecuta ESLint para encontrar y corregir problemas de estilo y errores en el código.

npm test
Ejecuta las pruebas usando Jest y React Testing Library.

API
Este proyecto interactúa con la API de Crossmint Megaverse. Los objetos astrales se crean con las siguientes rutas:

Crear un Polyanet
http
Copiar código
POST /api/polyanets
Parámetros:

row (número): La fila en la cuadrícula.
column (número): La columna en la cuadrícula.
candidateId (string): Tu ID de candidato.
Crear un Soloon
http
Copiar código
POST /api/soloons
Parámetros:

row (número): La fila en la cuadrícula.
column (número): La columna en la cuadrícula.
color (string): El color del Soloon ("blue", "red", "purple", "white").
candidateId (string): Tu ID de candidato.
Crear un Cometh
http
Copiar código
POST /api/comeths
Parámetros:

row (número): La fila en la cuadrícula.
column (número): La columna en la cuadrícula.
direction (string): La dirección del Cometh ("up", "down", "left", "right").
candidateId (string): Tu ID de candidato.
