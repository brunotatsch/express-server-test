import { Request, Response } from 'express';
import { GetDefaultService } from './getDefaultService';


class GetDefaultController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {orderNumber } = request.body;

    const getDefaultService = new GetDefaultService();

    const serviceReturn = await getDefaultService.execute(orderNumber);

    return response.status(200).json(serviceReturn);
  }
}

export { GetDefaultController };
