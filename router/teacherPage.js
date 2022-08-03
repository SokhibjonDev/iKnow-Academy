const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("teacherPage", {
        title: 'iKnow'
    });
});

module.exports = router;