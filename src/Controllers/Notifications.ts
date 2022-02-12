import { Request, Response } from "express";
import User from "../models/User";

class NotificationUser{
    async receivedNotification(req: Request, res: Response): Promise<Response>{
        const user = req.query.user;
        const response = await User.findOne({
            key: user
        })
        return res.status(200).json(response);
    }
}

const notification = new NotificationUser();
export default notification;