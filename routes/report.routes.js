const express = require('express');
const router = express.Router();
const Cost = require('../models/costs.model.js');
const User = require('../models/users.model.js')


router.get('/', async (req, res) => {
  const { user_id, year, month } = req.query;
  try {
      // Check if user exists
      const user = await User.findOne({ id: user_id });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      //Check if valid year entered
      if(!year ||year<0){
        return res.status(400).json({error:'Invalid year entered or missing'});
      }

      //Check if valid month entered
      if(!month || month<1 || month>12){
        return res.status(400).json({error:'Invalid month entered or missing'});
      }

    const costs = await Cost.find({ user_id, year, month });
    const categories = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];
    const report = {};

    // Initialize report object with empty arrays for each category
    categories.forEach(category => {
      report[category] = [];
    });

    // Categorize costs directly into the report object
    costs.forEach(cost => {
      const { category, day, description, sum } = cost;
      report[category].push({ day, description, sum });
    });
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
