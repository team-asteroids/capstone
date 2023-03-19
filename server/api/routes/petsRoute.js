const router = require('express').Router();
const { Pet, User, Pet_Detail } = require('../../db');

// Get all pets
router.get('/', async (req, res, next) => {
  try {
    const allPets = await Pet.findAll({
      include: { model: User, attributes: { exclude: ['password'] } },
    });
    res.status(200).json(allPets);
  } catch (err) {
    console.log('Backend issue fetching all pets');
    next(err);
  }
});

// Get single pet basics
router.get('/:id', async (req, res, next) => {
  try {
    const singlePet = await Pet.findByPk(req.params.id, {
      include: { model: User, attributes: { exclude: ['password'] } },
    });
    res.status(200).json(singlePet);
  } catch (err) {
    console.log('Backend issue fetching single pet basics');
    next(err);
  }
});

// Get single pet details
router.get('/:id/details', async (req, res, next) => {
  try {
    const singlePetDetails = await Pet_Detail.findOne({
      where: {
        petId: req.params.id,
      },
      include: Pet,
    });
    res.status(200).json(singlePetDetails);
  } catch (err) {
    console.log('Backend issue fetching single pet details');
    next(err);
  }
});

// Get entire info about single pet
router.get('/:id/everything', async (req, res, next) => {
  try {
    const singlePetEverything = await Pet.findByPk(req.params.id, {
      include: { model: Pet_Detail },
    });
    res.status(200).json(singlePetEverything);
  } catch (err) {
    console.log('Backend issue fetching single pet details');
    next(err);
  }
});

// Add pet
router.post('/', async (req, res, next) => {
  try {
    const [newPet, wasCreated] = await Pet.findOrCreate({
      where: { userId: req.body.userId, name: req.body.name },
      defaults: req.body,
    });
    if (!wasCreated) return res.status(409).send('Pet already exists');
    res.status(201).json(newPet);
  } catch (err) {
    console.error('BACKEND ISSUE ADDING NEW PET');
    next(err);
  }
});

// Edit pet basic
router.put('/:id', async (req, res, next) => {
  try {
    const singlePet = await Pet.findByPk(req.params.id, {
      include: { model: User, attributes: { exclude: ['password'] } },
    });
    if (!singlePet) return res.status(404).send('No pet exists!');
    const updatedPet = await singlePet.update(req.body);
    res.json(updatedPet);
  } catch (e) {
    console.error('BACKEND ISSUE UPDATING PET BASICS');
    next(e);
  }
});

// Edit pet details
router.put('/:id/details', async (req, res, next) => {
  try {
    const singlePetDetails = await Pet_Detail.findOne({
      where: {
        petId: req.params.id,
      },
    });
    if (!singlePetDetails) return res.status(404).send('No pet details exist!');
    const updatedSinglePetDetails = await singlePetDetails.update(req.body);
    res.json(updatedSinglePetDetails);
  } catch (e) {
    console.error('BACKEND ISSUE UPDATING PET DETAILS');
    next(e);
  }
});

// Delete pet
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedPetBasics = await Pet.findByPk(req.params.id);
    const deletedPetDetails = await Pet_Detail.findOne({
      where: {
        petId: req.params.id,
      },
    });
    await deletedPetBasics.destroy();
    await deletedPetDetails.destroy();
    res.json({ deletedPetBasics, deletedPetDetails });
  } catch (err) {
    next(err);
  }
});

// Get all pets of a single user ??

module.exports = router;
