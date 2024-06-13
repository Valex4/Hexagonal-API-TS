import * as mysql from "mysql2/promise";
import signale = require("signale");

const config = {
    host: "localhost",
    user: "root",
    database: "pruebaHexagonal",
    password: "Valiep04", 
    waitForConnections: true,
    connectionLimit: 10,
  };


const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]) {
    try {
      const conn = await pool.getConnection();
      signale.success("Conexión exitosa a la BD");
      const result = await conn.execute(sql, params);
      conn.release();
      return result;
    } catch (error) {
      signale.error(error);
      return null;
    }
  }