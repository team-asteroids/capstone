const router = require('express').Router();
const { Event, User } = require('../../db');
const { requireToken, isAdmin } = require('../authMiddleware');

// AS A GUEST:
// GET /api/events
router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Event.findAll({});
    res.status(200).json(allEvents);
  } catch (error) {
    console.log('backend issue fetching all events');
    next(error);
  }
});

// AS A LOGGED IN USER
// GET /api/user/:id/events
// events I created include Users who have RSVP'd to event
router.get('/my-events', requireToken, async (req, res, next) => {
  try {
    const createdEvents = await Event.findAll({
      where: {
        creatorId: req.user.id,
      },
      include: {
        model: User,
        attributes: {
          exclude: ['password'],
        },
      },
    });
    res.status(200).json(createdEvents);
  } catch (error) {
    console.log("backend issue fetching user's created events");
    next(error);
  }
});

//GET /api/events/attending
router.get('/attending', requireToken, async (req, res, next) => {
  try {
    const allEvents = await User.findByPk(req.user.id, {
      include: [
        {
          model: Event,
          include: {
            model: User,
          },
        },
      ],
    });

    res.status(200).json(allEvents);
  } catch (error) {
    console.log("backend issue fetching user's rsvp'd events");
    next(error);
  }
});

router.get('/:id', requireToken, async (req, res, next) => {
  try {
    const singleEvent = await Event.findByPk(req.params.id, {
      include: User,
      attributes: {
        exclude: ['password'],
      },
    });

    res.status(200).json(singleEvent);
  } catch (error) {
    console.log('Backend issue fetching single event');
    next(error);
  }
});

// Post an event
router.post('/', requireToken, async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.log('Backend issue adding event');
    next(error);
  }
});

// Update an event I created
router.put('/:id', requireToken, async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    console.log(event);
    if (!event) return res.status(404).send('Event does not exist');
    if (event.creatorId === req.user.id) {
      res.json(await event.update(req.body));
    } else {
      res.json('You dont not have permission to edit this event');
    }
  } catch (error) {
    console.log('Backend issue updating event');
    next(error);
  }
});

// Delete any event as admin
router.delete('/:id', requireToken, async (req, res, next) => {
  try {
    const deletedEvent = await Event.findByPk(req.params.id);
    if (!deletedEvent)
      return res.status(404).send('That event does not exist!');
    if (req.user.id === deletedEvent.creatorId || req.user.role === 'admin') {
      return res.json(await deletedEvent.destroy());
    } else {
      res.send('inadequate access rights / cannot delete event');
    }
  } catch (error) {
    console.log('backend issue deleting event');
    next(error);
  }
});

module.exports = router;
