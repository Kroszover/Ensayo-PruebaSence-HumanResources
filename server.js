import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { sequelize, probarConexion } from "./src/database/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar rutas estáticas para archivos públicos
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

probarConexion();
