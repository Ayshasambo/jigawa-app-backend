const express = require('express')
const router = express.Router()
const Lga = require('../models/Lga.js')

// POST a Lga
router.post('/', async (req, res) => {
    try {
      const {lga, latitude, longitude} = req.body;
      const newLga = new Lga({ 
        lga, latitude, longitude
       });
      await newLga.save();
      res.status(201).json(newLga);
    }catch (error) {
       res.status(500).json({ message: 'Error posting Lga', error: error.message });
    }
});

// GET a Lga
router.get('/:id', async (req, res) => {
    try {
      const getLga = await Lga.findById(req.params.id);
      if (!getLga) {
        return res.status(404).json({ message: 'Lga not found' });
      }
      res.status(200).json(getLga);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Lga', error: error.message });
    }
});

//GET Lga
router.get('/', async (req, res) => {
    try{
       const getLga = await Lga.find();
        res.json(getLga)
    }
    catch(err){
      res.json({message:err});
    }
});

//DELETE lga
router.delete('/:id', async (req, res) => {
    try {
      const deleteLga = await Lga.findByIdAndDelete(req.params.id);
      if (!deleteLga) {
        return res.status(404).json({ message: 'Lga not found' });
      }
      res.json({ message: 'Lga deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router