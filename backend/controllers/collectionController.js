const Collection = require('../models/Collection.js');
const Farmer = require('../models/Farmer.js');

// Record a new farm produce collection
// POST /api/collections
// @access  Private (Admin, FieldOfficer)
const recordCollection = async (req, res) => {
  const {
    farmerId,
    crop,
    harvestDate,
    collectionDate,
    weight,
    qualityGrade,
    paymentRate,
  } = req.body;

  try {
    // Check if farmer exists
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }
    // Calculate total payment
    const totalPayment = parseFloat(weight) * parseFloat(paymentRate);

    const collection = await Collection.create({
      farmer: farmerId,
      crop,
      harvestDate,
      collectionDate,
      weight,
      qualityGrade,
      paymentRate,
      totalPayment,
      recordedBy: req.user._id,
      paymentStatus: 'Pending', // Default
    });

    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: 'Invalid collection data', error: error.message });
  }
};


// Update collection payment status
// PUT /api/collections/:id/pay
// @access  Private (Admin)
const updatePaymentStatus = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (!collection) {
      return res.status(404).json({ message: 'Collection record not found' });
    }
    collection.paymentStatus = 'Paid';
    collection.paymentDate = Date.now();

    const updatedCollection = await collection.save();
    res.status(200).json(updatedCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all collections
// GET /api/collections
// @access  Private (Admin)
const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find({})
      .populate('farmer', 'name location')
      .sort({ collectionDate: -1 });
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {recordCollection, updatePaymentStatus, getAllCollections};
