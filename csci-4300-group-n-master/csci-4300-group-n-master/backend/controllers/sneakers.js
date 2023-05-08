const Sneaker = require('../models/sneaker.js');

const addSneakers = async (req, res, next) => {
  try {
    const {name, price, type, imageUrl} = req.body;
    const newSneaker = new Sneaker(
      {
        name: name,
        price: price,
        type: type,
        imageUrl: imageUrl
      }
    );
    const addResult = await newSneaker.save();
    res.status(201).json({message: "Sneakers added successfully!"});
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const editSneakers = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({message: "Missing sneaker id"});
    }
    const updatedSneaker = await Sneaker.findByIdAndUpdate(
      id,
      {$set: req.body},
      {new: true}
    );

    if (!updatedSneaker) {
      return res.status(403).json({message: "Sneaker not found!"});
    }
    res.json({message: "Sneakers updated successfully!"});
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deleteSneaker = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({message: "Missing sneaker id"});
    }

    const deletedSneaker = await Sneaker.findByIdAndDelete(id);
    if (!deletedSneaker) {
      return res.status(403).json({message: 'Sneaker not found'});
    }

    res.json({message: 'Sneaker deleted successfully'});
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getSneakerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({message: "Missing sneaker id"});
    }

    const sneaker = await Sneaker.findById(id);
    res.json(sneaker);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

const getAllSneakers = async (req, res, next) => {
  try {
    const allSneakers = await Sneaker.find();
    res.json(allSneakers);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

exports.addSneaker = addSneakers;
exports.editSneaker = editSneakers;
exports.deleteSneaker = deleteSneaker;
exports.getSneakerById = getSneakerById;
exports.getAllSneaker = getAllSneakers;
