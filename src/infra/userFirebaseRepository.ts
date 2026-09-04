import { createUserWithEmailAndPassword } from "firebase/auth";
import { IUser } from "../domain/entities/IUser";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { auth } from "./firebase";

export class UserFirebaseRepository implements IUserRepository {
  async createUser(user: Omit<IUser, "id">): Promise<void> {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
    } catch (error) {
      throw error;
    }
  }
}
