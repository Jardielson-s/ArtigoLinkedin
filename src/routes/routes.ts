import { Router } from 'express';
import requestRespository from '../Controllers/RequestRepository';
import notification from '../Controllers/Notifications';

const router = Router();
router.post("/api/repository", requestRespository.reqRespository);
router.post("/api/notification", notification.receivedNotification);


export default router;