const express = require('express')
const router = express.Router()
const Srp = require('../models/Srp.js')
const Lga = require('../models/Lga.js')

// POST a srp
router.post('/', async (req, res) => {
  const {lga, onset, seasonend, seasonlength, annualrainfall} = req.body;
    try {
      const populatedLga = await Lga.findById(lga);
      const newSrp = new Srp({ 
        onset, seasonend, seasonlength, annualrainfall, lga:populatedLga
      });
      await newSrp.save();
      res.status(201).json(newSrp);
    }catch (error) {
       res.status(500).json({ message: 'Error posting Srp', error: error.message });
    }
});

// GET a srp
router.get('/:id', async (req, res) => {
    try {
      const getSrp = await Srp.findById(req.params.id);
      if (!getSrp) {
        return res.status(404).json({ message: 'Srp not found' });
      }
      res.status(200).json(getSrp);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Srp', error: error.message });
    }
});

//GET Srp
router.get('/', async (req, res) => {
    try{
       const getSrp = await Srp.find();
        res.json(getSrp)
    }
    catch(err){
      res.json({message:err});
    }
});

//DELETE contactUs
router.delete('/:id', async (req, res) => {
    try {
      const deleteSrp = await Srp.findByIdAndDelete(req.params.id);
      if (!deleteSrp) {
        return res.status(404).json({ message: 'Srp not found' });
      }
      res.json({ message: 'Srp deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

module.exports = router