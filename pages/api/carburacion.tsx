import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "pg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT || "5432"),
  });

  try {
    await client.connect();

    const result = await client.query(
      "SELECT * FROM productos WHERE categoria = 'carburacion'"
    );
    const productos = result.rows;

    res.status(200).json(productos);
  } catch (error: unknown) {
    const details = error as Error;
    console.error(details);
    res.status(500).json({
      error: "Error al obtener los productos",
      details: details?.message,
    });
  } finally {
    await client.end();
  }
}
