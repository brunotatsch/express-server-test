import { Request, Response } from 'express';


class GetDefaultController {
  async handle(request: Request, response: Response): Promise<Response> {

    console.log("BODY=", JSON.stringify(request.body));
    console.log("HEADERS=",JSON.stringify(request.headers));
    console.log("QUERY=",JSON.stringify(request.query));


    return response.status(200).json({"message": "Success"});
  }
}

export { GetDefaultController };
