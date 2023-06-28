import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "eduardo",
  host: "localhost",
  database: "db_integrador",
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
