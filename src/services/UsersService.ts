import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
interface IUuserRequest {
  name: string,
  email: string,
  senha: string,
}
class UsersService {
  async execute({ name, email, senha }: IUuserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new Error("Email incorreto");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("usuario já existe");
    }

    const user = usersRepository.create({
      name,
      email,
      senha,

    })

    await usersRepository.save(user);
    return user;

  }
}

export { UsersService };