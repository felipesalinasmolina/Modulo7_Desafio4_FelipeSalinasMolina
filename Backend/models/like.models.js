import { pool } from "../db.js";

//POST  parte 1

export const createLikesmodels = async (titulo, img, descripcion, likes) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *",
      [titulo, img, descripcion, likes]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Error creating likes: " + error.message);
  }
};

// GET parte 1

export const getAllLikes = async () => {
  try {
    const allLikes = await pool.query("SELECT * FROM posts");

    return allLikes.rows;
  } catch (error) {
    throw new Error("Error getting likes: " + error.message);
  }
};

//PUT parte 2

export const updateLikeModel = async (id, titulo, img, descripcion) => {
  try {
    const result = await pool.query(
      "UPDATE posts SET titulo=$1, img=$2, descripcion=$3 WHERE id=$4 RETURNING *",
      [titulo, img, descripcion,id]
    );
    if (result.rowCount === 0) {
      throw new Error("Post not found");
    }
    return result.rows[0];
  } catch (error) {
    throw new Error("Error updating likes: " + error.message);
  }
};

//DELETE parte 2

export const deletePostModel =async(id)=>{
  try {
    const result=await pool.query("DELETE FROM posts WHERE id=$1", [id])
    if(result.rowCount===0){
      throw new Error("Post not found")
    }
    return result.rowCount
  } catch (error) {
    throw new Error("Error deleting likes: " + error.message);
  }
}