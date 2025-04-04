const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const { authenticateToken } = require("../middleware/roleMiddleware");
const { checkAdmin } = require("../utils/validator");

const router = express.Router();

router.get("/", authenticateToken, getUsers)
router.get("/:id", authenticateToken, getUserById)
router.post("/", validateUser, createUser)
router.put("/:id", authenticateToken, validateUser, updateUser)
router.delete("/:id", authenticateToken, checkAdmin, deleteUser)

module.exports = router;