import { Router } from "express";
import { GetDefaultController } from "@shared/services/callback/GetDefaultController";
import { StatusController } from "@shared/services/status/StatusController";

const router = Router();

const getDefaultController = new GetDefaultController();
const statusController = new StatusController();

router.get('/', statusController.handle);
router.post('/callback', getDefaultController.handle);

export { router };
