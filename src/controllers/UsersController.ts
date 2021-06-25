import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
  async handle(req: Request, res: Response) {
    const { name,email,senha } = req.body;

    const usersService = new UsersService();

    const user = await usersService.execute({name,email,senha});


    return res.json(user);
  }
}

export { UsersController};
