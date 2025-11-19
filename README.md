# 🚀 Node.js TypeScript Express Template

Plantilla inicial (Starter) para la creación rápida de APIs REST en Node.js, usando el framework Express y totalmente tipado con TypeScript.

### ✨ Características

* **Framework:** Express.js
* **Lenguaje:** TypeScript (con configuración estricta)
* **Desarrollo Rápido:** Uso de `ts-node` y `nodemon` para reinicio automático.
* **Compilación:** Configurado para compilar a JavaScript en la carpeta `dist`.
* **Estructura:** Separación clara entre código fuente (`src/`) y archivos compilados (`dist/`).

### 💡 Comandos de Inicio Rápido

Sigue estos pasos para tener tu servidor corriendo en minutos:

1.  **Clonar y Descargar Dependencias:**
    (Asume que el usuario ya usó el botón "Use this template" de GitHub)
    ```bash
    git clone
    cd mi-nuevo-proyecto
    npm install
    ```

2.  **Modo Desarrollo (Recomendado):**
    Ejecuta el servidor con `nodemon`. Se reiniciará automáticamente con cada cambio que hagas en los archivos `.ts`.
    ```bash
    npm run dev
    ```
    El servidor estará disponible en `http://localhost:3000`.

3.  **Compilar para Producción:**
    Genera el código JavaScript final en la carpeta `dist`.
    ```bash
    npm run build
    ```

4.  **Modo Producción (Ejecutar Código Compilado):**
    Ejecuta el código JS compilado para el entorno de producción.
    ```bash
    npm start
    ```

    ### ⚙️ Configuración de TypeScript

El archivo `tsconfig.json` está optimizado para Node.js:

* `"target": "es2020"` y `"module": "commonjs"`.
* `"rootDir": "./src"` y `"outDir": "./dist"`.
* `"esModuleInterop": true` para imports de Express.
* `"strict": true` activado para máxima seguridad de tipos.
