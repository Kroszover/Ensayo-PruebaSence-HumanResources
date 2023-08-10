import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, "tu_secreto_aqui", {
    expiresIn: "1h",
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Simulamos la búsqueda del usuario en la base de datos
    const user = {
      id: 1,
      username: "usuario",
      password: "$2b$10$8bfjYGUmcUIgMcvu5H1se.OTGtwStB7ABESWMul8e2EKCNSoGMhWW",
    };

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }

    const token = generateToken(user);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};
