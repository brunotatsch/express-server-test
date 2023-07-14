 import { GetDefaultController } from "@shared/services/getDefaultController";
import { Router } from "express";

const router = Router();

const getDefaultController = new GetDefaultController();

router.post('/callback', getDefaultController.handle);

export { router };
