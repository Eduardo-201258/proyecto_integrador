import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";
import { pool } from "../../database/psql"

export class ProfileRepository_impl implements ProfileRepository {

  async getByUser(id_user: number): Promise<Profile[] |null> {
    try {
      console.log(id_user)
      const query = "SELECT * FROM profiles WHERE id_user = $1";
      const result = await pool.query(query, [id_user]);
      const profiles = result.rows;
      return profiles;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async create(id_user: number, name: string, last_name: string): Promise<Profile | null> {
    try {
      const query = "INSERT INTO profiles (id_user, name, last_name) VALUES ($1, $2, $3) RETURNING *";
      const result = await pool.query(query, [id_user, name, last_name]);
      const createdProfiles = result.rows[0];
      
      if (createdProfiles) {
        return createdProfiles;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delete(id: number): Promise<Profile | null> {
    try {
      const query = "SELECT * FROM profiles WHERE id = $1";
      const result = await pool.query(query, [id]);
      const profileToDelete = result.rows[0];
  
      if (profileToDelete) {
        const deleteQuery = "DELETE FROM profiles WHERE id = $1";
        await pool.query(deleteQuery, [id]);
        return profileToDelete;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async update(id: number, id_user: number, name: string, last_name: string): Promise<Profile | null> {
    try {
      const query = "UPDATE profiles SET id_user = $1, name = $2, last_name = $3 WHERE id = $4";
      const result = await pool.query(query, [id_user, name, last_name, id]);
      
      if (result.rowCount > 0) {
        const updatedProfileQuery = "SELECT * FROM profiles WHERE id = $1";
        const updatedProfileResult = await pool.query(updatedProfileQuery, [id]);
        const updatedProfile = updatedProfileResult.rows[0];
        return updatedProfile || null;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  

}