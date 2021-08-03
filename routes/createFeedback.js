const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const db = require('../database')
const {doSuccessResponse} = require("../responseUtils");
const {doErrorResponse} = require("../responseUtils");

router.post('/', upload.none(), function(req, res) {
  db.query(`INSERT INTO feedbacks (name, feedback, rate, serverDateTime, user) values ("${req.body.name}", "${req.body.comment}", "${req.body.rate}", ${db.escape(new Date())}, "${req.body.employerName}");`,
      (err) => {
        if (err) {
            doErrorResponse(res, err);
            // throw err;
        } else {
            doSuccessResponse(res);
        }
      }
  );
});

module.exports = router;
