const express = require('express')
const router = express.Router()
const Crop = require('../models/Crop.js')

// POST a contactUs
router.post('/', async (req, res) => {
    try {
      const {lga, crop} = req.body;
      const newCrop = new Crop({ 
         lga, crop
       });
      await newCrop.save();
      res.status(201).json(newCrop);
    }catch (error) {
       res.status(500).json({ message: 'Error posting Crop', error: error.message });
    }
});

// GET a contactUs
router.get('/:id', async (req, res) => {
    try {
      const getCrop = await Crop.findById(req.params.id);
      if (!getCrop) {
        return res.status(404).json({ message: 'Crop not found' });
      }
      res.status(200).json(getCrop);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Crop', error: error.message });
    }
});

//GET contactUs
router.get('/', async (req, res) => {
    try{
       const getCrop = await Crop.find();
        res.json(getCrop)
    }
    catch(err){
      res.json({message:err});
    }
});

//DELETE contactUs
router.delete('/:id', async (req, res) => {
    try {
      const deleteCrop = await Crop.findByIdAndDelete(req.params.id);
      if (!deleteCrop) {
        return res.status(404).json({ message: 'Crop not found' });
      }
      res.json({ message: 'Crop deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  

module.exports = router