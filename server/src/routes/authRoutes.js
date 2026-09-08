const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.get("/me", protect, (req, res) => {
  res.json({
    user: req.user,
  });
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;