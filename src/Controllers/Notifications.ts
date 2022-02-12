import { Request, Response } from "express";

class NotificationUser{
    async receivedNotification(req: Request, res: Response): Promise<Response>{
        return res.status(200).json("notification");
    }
}

const notification = new NotificationUser();
export default notification;