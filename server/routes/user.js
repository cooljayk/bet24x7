const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    return res.json({ success: true, balance: 1000 });
  }
  res.status(401).json({ success: false });
});

module.exports = router;
