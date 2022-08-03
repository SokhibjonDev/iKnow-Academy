const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("fillialsPage", {
        title: 'iKnow'
    });
});

module.exports = router;