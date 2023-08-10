import { Sequelize } from "sequelize";

/* conexión a la base de datos */

export const sequelize = new Sequelize(
  "HumanResourcesEnsayo",
  "postgres",
  "Camiloignacio1",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

/* probar conexión */
export const probarConexion = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Conectado a la base de datos");
    })
    .catch((err) => {
      console.error("No se puede conectar a la base de datos:", err);
    });
};
