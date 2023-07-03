import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_USER,
  port: 5432,
});

async function checkDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log("Conexión a la base de datos establecida correctamente");
    client.release(); // Liberar el cliente después de la validación
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

checkDatabaseConnection();