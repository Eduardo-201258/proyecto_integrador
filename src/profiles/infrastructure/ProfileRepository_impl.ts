import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";
import { pool } from "../../database/psql"

export class ProfileRepository_impl implements ProfileRepository {

  async getByUser(id_profile: number): Promise<Profile[] |null> {
    const client = await pool.connect();
    try {
      console.log(id_profile)
      const query = "SELECT * FROM profiles WHERE id_user = $1";
      const result = await client.query(query, [id_profile]);
      const profiles = result.rows;
      if(profiles.length > 0){
        return profiles
      }else{
        return null
      }
    } catch (error) {
      console.log(error);
      return null;
    }finally {
      client.release();
    }
  }

  async create(id_user: number, name: string, last_name: string): Promise<Profile | null> {
    const client = await pool.connect();
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
    }finally {
      client.release();
    }
  }

  async delete(id: number): Promise<Profile | null> {
    const client = await pool.connect();

    const query = "SELECT * FROM profiles WHERE id = $1";
      const result = await client.query(query, [id]);
      const profiles = result.rows[0];

    try {
      const deleteQuery = "DELETE FROM profiles WHERE id = $1";
      await pool.query(deleteQuery, [id]);
  
      // Puedes retornar cualquier valor deseado aquí
      return profiles;
    } catch (error) {
      console.log(error);
      return null;
    }finally {
      client.release();
    }
  }

  async update(id: number, id_user: number, name: string, last_name: string): Promise<Profile | null> {
    const client = await pool.connect();
    try {
      const query = "UPDATE profiles SET id_user = $1, name = $2, last_name = $3 WHERE id = $4";
      const result = await client.query(query, [id_user, name, last_name, id]);
      
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
    }finally {
      client.release();
    }
  }
  

}