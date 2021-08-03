const express = require('express');
const router = express.Router();
const db = require('../database');
const {doErrorResponse} = require("../responseUtils");
const {doSuccessResponse} = require("../responseUtils");

router.get('/', (req, res) => {
    db.query(`SELECT name, feedback, rate, serverDateTime FROM feedbacks ORDER BY serverDateTime DESC`,
        (err, rows) => {
            if (err) {
                doErrorResponse(res, err);
                // throw err
            } else {
                doSuccessResponse(res, rows);
            }
        }
    );
});

module.exports = router;
