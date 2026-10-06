import type { IUser, ICreateUserData } from "../entities/IUser";

export interface IUserRepository {
  createUser(userData: ICreateUserData): Promise<IUser>;
}
