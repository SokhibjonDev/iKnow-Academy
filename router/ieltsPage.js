const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("ieltsPage", {
        title: 'iKnow'
    });
});

module.exports = router;