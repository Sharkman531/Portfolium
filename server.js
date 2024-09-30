import express from "express";
import multer from 'multer';
import proyectosRoute from "./routes/proyectos.routes.js";
import clientesRoute from "./routes/clientes.routes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3333;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de depuración
app.use((req, res, next) => {
    console.log(`Método: ${req.method}, URL: ${req.url}`);
    next();
  });


// Configuración para manejo de archivos
const upload = multer({ dest: 'uploads/' });


connectDB().then(() => {

    app.use(proyectosRoute);
    app.use(clientesRoute);

    app.use((req, res, next) => {
        res.status(404).json({ message: "Ruta no encontrada" });
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ message: "Error en el servidor" });
    });

    app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`));
}).catch(err => {
    console.error("Error al conectar a la base de datos:", err);
});
