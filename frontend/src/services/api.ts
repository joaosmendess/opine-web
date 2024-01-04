import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;
    const id = await createItem(data);
    res.status(200).json({ id });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

async function createItem(data: any): Promise<number> {
  try {
    const response: AxiosResponse = await axios.post("http://localhost:8080/api/clientes", data);
    // Assumindo que a resposta da API contém um ID
    return response.data.id;
  } catch (error) {
    console.error("Erro ao criar o item:", error);
    throw new Error("Erro ao criar o item");
  }
}
