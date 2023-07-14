 import { GetDefaultController } from "@shared/services/GetDefaultController";
import { Router } from "express";

const router = Router();

const getDefaultController = new GetDefaultController();

router.post('/callback', getDefaultController.handle);

export { router };
