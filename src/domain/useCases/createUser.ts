import type { IUser, ICreateUserData } from "../entities/IUser";
import type { IUserRepository } from "../repositories/IUserRepository";

export class CreateUser {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(userData: ICreateUserData): Promise<IUser> {
    if (!userData.email || !userData.nome) {
      throw new Error("Nome e E-mail são obrigatórios.");
    }

    return await this.userRepository.createUser(userData);
  }
}
