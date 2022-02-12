import { Request, Response } from "express";
import search from "../api/axios";

class RequestRespository{

    async reqRespository(req:Request, res: Response){
        const { user } = req.body;
        search(user);
        return res.status(200).json("Your request will be process");
    }
}

const requestRespository = new RequestRespository();

export default requestRespository;