import { Request, Response } from "express";
import api from "../api/axios";

class RequestRespository{

    async reqRespository(req:Request, res: Response){
        const { user } = req.body;
    
        const gitUser = await api.get(`/${user}/repos`);
        return res.status(200).json(gitUser.data);
    }
}

const requestRespository = new RequestRespository();

export default requestRespository;