import { Request, Response } from "express";
import { getPlayerService } from "../services/playerService";

export const getPlayer = async(req: Request, res: Response) => {
    const data = await getPlayerService();
    res.json(data);
}