import express, { Request, Response } from 'express';

// Crea una instancia de la aplicación Express
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Definir una ruta de prueba
app.get('/', (req: Request, res: Response) => {
    res.send('¡Servidor de Node.js y TypeScript funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});