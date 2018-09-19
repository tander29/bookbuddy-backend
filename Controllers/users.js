const express = require("express")
const Sequelize = require("sequelize")
const router = express.Router()
const { User } = require("../models")

const { authMiddleware } = require("./auth")

// get a specific user by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, {
      include: [
        {
          model: Message,
          include: [Like]
        }
      ]
    }).then(user => res.json({ user }));
  });
  
  // get list of users
  router.get("/", (req, res) => {
    User.findAll({
      limit: req.query.limit || 100,
      offset: req.query.offset || 0,
      order: [["createdAt", "DESC"]]
    }).then(users => {
      res.json({ users });
    });
  });
  
  module.exports = router;