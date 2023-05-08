const express = require('express');
const {signUp, signIn, autoSignIn} = require("../controllers/auth");
const router = express.Router();


router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.get('/auto-sign-in', autoSignIn);

module.exports = router;
