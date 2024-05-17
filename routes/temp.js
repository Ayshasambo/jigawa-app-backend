const express = require('express')
const router = express.Router()
const Temp = require('../models/Temp.js')

// POST a temp
router.post('/', async (req, res) => {
    try {
      const {name, january, february, march, april, may} = req.body;
      const newTemp = new Temp({ 
        name, january, february, march, april, may
       });
      await newTemp.save();
      res.status(201).json(newTemp);
    }catch (error) {
       res.status(500).json({ message: 'Error posting Temp', error: error.message });
    }
});

// GET a temp
router.get('/:id', async (req, res) => {
    try {
      const getTemp = await Temp.findById(req.params.id);
      if (!getTemp) {
        return res.status(404).json({ message: 'Temp not found' });
      }
      res.status(200).json(getTemp);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Temp', error: error.message });
    }
});

//GET temps
router.get('/', async (req, res) => {
    try{
       const getTemp = await Temp.find();
        res.json(getTemp)
    }
    catch(err){
      res.json({message:err});
    }
});

//DELETE temp
router.delete('/:id', async (req, res) => {
    try {
      const deleteTemp = await Temp.findByIdAndDelete(req.params.id);
      if (!deleteTemp) {
        return res.status(404).json({ message: 'Temp not found' });
      }
      res.json({ message: 'Temp deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

  

module.exports = router