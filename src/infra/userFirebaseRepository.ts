import type { IUser } from "../domain/entities/IUser";
import type { IUserRepository } from "../domain/repositories/IUserRepository";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export class FirebaseUserRepository implements IUserRepository {
  async createUser(
    user: Omit<IUser, "id"> & { password: string },
  ): Promise<void> {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );

    await updateProfile(userCredential.user, {
      displayName: user.nome,
      photoURL: user.imagem || null,
    });

    await setDoc(doc(db, "users", userCredential.user.uid), {
      nome: user.nome,
      email: user.email,
      imagem: user.imagem ?? "",
      createdAt: new Date(),
    });
  }
}
