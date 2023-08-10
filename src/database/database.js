import { Sequelize } from "sequelize";

/*conexion a la base de datos*/

const sequelize = new Sequelize(
  "HumanResourcesEnsayo",
  "postgres",
  "Camiloignacio1",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

/*probar conexion*/
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.error("No se puede conectar a la base de datos:", err);
  });

export default sequelize;
