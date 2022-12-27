const express = require('express');

const db = require('../../db/models');

const router = express.Router();

router.route('/signup').post((req, res, next) => {
  db.createUser(req.body).then(() => {
    res.send();
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
