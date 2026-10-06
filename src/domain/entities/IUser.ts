export interface IUser {
  id: string;
  nome: string;
  email: string;
  password?: string;
  fotoUrl?: string | null;
}

export type ICreateUserData = Omit<IUser, "id">;
