const router = require('express').Router({ mergeParams: true });
const { Pet, User, Pet_Detail } = require('../../db');
const { requireToken } = require('../authMiddleware');

// Get all pets
router.get('/', async (req, res, next) => {
  try {
    if (req.params.id) {
      const userPets = await Pet.findAll({
        where: {
          userId: +req.params.id,
        },
      });
      if (!userPets) return res.status(404).send('user has no pets!');
      return res.status(200).send(userPets);
    }
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
router.get('/:petId', async (req, res, next) => {
  try {
    const singlePet = await Pet.findByPk(req.params.petId, {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
        Pet_Detail,
      ],
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
router.post('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin' || req.user.id === id) {
      const [newPet, wasCreated] = await Pet.findOrCreate({
        where: { userId: id, name: req.body.name },
        defaults: req.body,
      });
      if (!wasCreated) return res.status(409).send('Pet already exists');
      res.status(201).send(newPet);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.error('BACKEND ISSUE ADDING NEW PET');
    next(err);
  }
});

router.post('/:petId/details', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin' || req.user.id === id) {
      const [newPetDetails, wasCreated] = await Pet_Detail.findOrCreate({
        where: { petId: req.params.petId },
        defaults: req.body,
      });
      if (!wasCreated)
        return res.status(409).send('Pet Details already exists');
      res.status(201).send(newPetDetails);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.error('BACKEND ISSUE ADDING NEW PET');
    next(err);
  }
});

// Edit pet basic
router.put('/:petId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin' || req.user.id === id) {
      const singlePet = await Pet.findByPk(req.params.petId, {
        include: { model: User, attributes: { exclude: ['password'] } },
      });
      if (!singlePet) return res.status(404).send('No pet exists!');
      const updatedPet = await singlePet.update(req.body);
      console.log(updatedPet);
      res.status(200).send(updatedPet);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (e) {
    console.error('BACKEND ISSUE UPDATING PET BASICS');
    next(e);
  }
});

// Edit pet details
router.put(
  '/:petId/details/:detailsId',
  requireToken,
  async (req, res, next) => {
    try {
      const id = +req.params.id;
      if (req.user.role === 'admin' || req.user.id === id) {
        const singlePetDetails = await Pet_Detail.findOne({
          where: {
            id: req.params.detailsId,
          },
        });
        if (!singlePetDetails)
          return res.status(404).send('No pet details exist!');
        const updatedSinglePetDetails = await singlePetDetails.update(req.body);
        res.status(200).send(updatedSinglePetDetails);
      } else {
        res
          .status(403)
          .send(
            'Inadequate access rights / Requested user does not match logged-in user'
          );
      }
    } catch (e) {
      console.error('BACKEND ISSUE UPDATING PET DETAILS');
      next(e);
    }
  }
);

// Delete pet
router.delete('/:petId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin' || req.user.id === id) {
      const deletedPetBasics = await Pet.findByPk(req.params.petId);
      const deletedPetDetails = await Pet_Detail.findOne({
        where: {
          petId: req.params.id,
        },
      });
      await deletedPetDetails.destroy();
      await deletedPetBasics.destroy();
      res.send(200).send({ deletedPetBasics, deletedPetDetails });
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    next(err);
  }
});

// Get all pets of a single user ??

module.exports = router;
