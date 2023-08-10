/*import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, "tu_secreto_aqui", {
    expiresIn: "1h",
  });
};

export const login = async (req, res) => {
  console.log("Intentando realizar el inicio de sesión"); // Mensaje de depuración
  const { username, password } = req.body;

  try {
    // Simulamos la búsqueda del usuario en la base de datos
    const user = {
      id: 1,
      username: "usuario",
      password: "123456",
    };

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Credenciales incorrectas"); // Mensaje de depuración
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }

    const token = generateToken(user);

    console.log("Inicio de sesión exitoso"); // Mensaje de depuración
    res.json({ token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error); // Mensaje de depuración
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};*/
