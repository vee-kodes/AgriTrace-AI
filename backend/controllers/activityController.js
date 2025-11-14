const FarmActivity = require('../models/FarmActivity.js');
const Farmer = require('../models/Farmer.js');

// Add a new farm activity
// POST /api/activities
// @access  Private (Admin, FieldOfficer)
const addActivity = async (req, res) => {
  if (req.user.isDemo) {
    return res.status(403).json({ message: 'Demo accounts are read-only' });
  }
  const {
    farmerId,
    type,
    date,
    cost,
    seedVariety,
    seedSource,
    seedQuantity,
    seedLotNumber,
    fertilizerType,
    fertilizerAmount,
    pesticideType,
    pesticideAmount,
    pestControlMethod,
    pestTarget,
    generalDetails,
  } = req.body;

  try {
    // Check if farmer exists
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    // Log farm operation
    const activity = await FarmActivity.create({
      farmer: farmerId,
      recordedBy: req.user._id,
      type,
      date,
      cost: cost ? parseFloat(cost) : 0,
     
      // Fields for all operation types
      seedVariety,
      seedSource,
      seedQuantity,
      seedLotNumber,
      fertilizerType,
      fertilizerAmount,
      pesticideType,
      pesticideAmount,
      pestControlMethod,
      pestTarget,
      generalDetails,
    });

    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to log activity', error: error.message });
  }
};

// Get all activities for a specific farmer
// GET /api/activities/:farmerId
// @access  Private
const getActivitiesByFarmer = async (req, res) => {
  try {
    const activities = await FarmActivity.find({
      farmer: req.params.farmerId,
    })
      .populate('recordedBy', 'name')
      .sort({ date: -1 });

    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addActivity, getActivitiesByFarmer };
