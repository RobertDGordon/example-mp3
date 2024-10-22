"use strict";
const Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("PostController - getPosts:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const getUserPosts = (req, res) => {
  const uid = req.params.uid
  Models.Post.findAll({ where: { userId: uid}, include: Models.User })
    .then((data) => {
      res.status(200).json({result: 200, data: data})
    })
    .catch((err) => {
      console.log("PostController - getUserPosts:", err)
      res.status(500).json({result: 500, error: err.message})
    })
}

const createPost = (req, res) => {
  const data = req.body
  Models.Post.create(data)
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("PostController - createPost:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  const data = req.body
  const id = req.params.id
  Models.Post.update(data, { where: { id: id }, returning: true})
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("PostController - updatePost:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  const id = req.params.id
  Models.Post.destroy({ where: { id: id }})
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("PostController - deletePost:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts, getUserPosts, createPost, updatePost, deletePost
}