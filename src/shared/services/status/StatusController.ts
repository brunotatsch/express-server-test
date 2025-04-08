import { Request, Response } from 'express';


class StatusController {
  async handle(request: Request, response: Response): Promise<Response> {

    return response.status(200).json({"message": "Alive"});
  }
}

export { StatusController };
