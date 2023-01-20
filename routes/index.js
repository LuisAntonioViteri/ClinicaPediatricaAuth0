const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')

router.get("/",(req,res)=> {
    console.log(req.oidc.isAuthenticated());
    res.render("index",{
        title: "Clinica", isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user,
    });
});

module.exports = router;
