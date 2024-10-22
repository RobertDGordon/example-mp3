"use strict";
const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("userController - getUsers:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const createUser = (req, res) => {
  const data = req.body
  Models.User.create(data)
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("userController - createUser:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  const data = req.body
  const id = req.params.id
  Models.User.update(data, { where: { id: id }, returning: true})
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("userController - updateUser:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id
  Models.User.destroy({ where: { id: id }})
    .then((data) => {
      res.status(200).json({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("userController - deleteUser:", err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers, createUser, updateUser, deleteUser
}