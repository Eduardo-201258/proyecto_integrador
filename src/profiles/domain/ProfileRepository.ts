import { Profile } from "./Profile";

export interface ProfileRepository {
  create(id_user: number, name: string, last_name: string): Promise<Profile | null>;
  delete(id:number): Promise<Profile | null>;
  getByUser(id_user: number): Promise<Profile[] | null>;
  update(id: number, id_user: number, name: string, last_name: string ): Promise<Profile | null>;
}
