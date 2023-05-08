const express = require('express');
const {addSneaker, editSneaker, deleteSneaker, getSneakerById, getAllSneaker} = require("../controllers/sneakers");
const {authenticate} = require("../controllers/auth");

const router = express.Router();

router.post('/add', authenticate, addSneaker);
router.put('/edit/:id', authenticate, editSneaker);
router.delete('/delete/:id', authenticate, deleteSneaker);
router.get('/get/:id', authenticate, getSneakerById);
router.get('/all', getAllSneaker);


module.exports = router;
