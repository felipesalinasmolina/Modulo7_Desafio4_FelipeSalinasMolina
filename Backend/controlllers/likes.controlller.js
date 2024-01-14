import {
  createLikesmodels,
  getAllLikes,
  updateLikeModel,
  deletePostModel,
} from "../models/like.models.js";

//post parte 1

export const createLikes = async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;

  try {
    const result = await createLikesmodels(titulo, img, descripcion, likes);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//GET parte 1

export const getLike = async (req, res) => {
  try {
    const result = await getAllLikes();
    console.log("Geting posts");

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT parte 2

export const updateLike = async (req, res, next) => {
  const { id } = req.params;
  const { titulo, img, descripcion } = req.body;
  try {
    await updateLikeModel(id, titulo, img, descripcion);
    res.status(200).json({ message: "post update successfully" });
  } catch (error) {
    next(error);
  }
};

//DELETE parte 2

export const deleteLike = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deletePostModel(id);
    res.status(200).json({ message: "post delete successfully" });
  } catch (error) {
    next(error);
  }
};
