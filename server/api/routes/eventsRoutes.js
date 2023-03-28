const router = require('express').Router();
const { Event, User, Event_RSVP } = require('../../db');
const { requireToken } = require('../authMiddleware');
const sequelize = require('sequelize');

// this sends back a list of all events
router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Event.findAll({});
    res.status(200).json(allEvents);
  } catch (error) {
    console.log('backend issue fetching all events');
    next(error);
  }
});

// this sends back a list of events a logged in user created
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

// this sends back all events a logged in user has RSVP'd to
router.get('/attending', requireToken, async (req, res, next) => {
  try {
    const myEvents = await Event_RSVP.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.json(myEvents);
  } catch (error) {
    console.log("backend issue fetching user's rsvp'd events");
    next(error);
  }
});

// this allows a logged in user to rsvp to an event
router.post('/attending', requireToken, async (req, res, next) => {
  try {
    console.log(req.body);
    const [newEventRsvp, wasCreated] = await Event_RSVP.findOrCreate({
      where: {
        userId: req.user.id,
        eventId: req.body.eventId,
      },
      defaults: {
        userId: req.user.id,
        eventId: req.body.eventId,
      },
    });
    console.log('newEventRSVP', newEventRsvp);
    if (!wasCreated) return res.status(409).send('RSVP already exists');
    res.status(201).json(newEventRsvp);
  } catch (error) {
    console.log('backend issue adding rsvp to event');
    next(error);
  }
});

// this allows a logged in user to remove an rsvp
router.delete('/attending/:id', requireToken, async (req, res, next) => {
  try {
    const event = await Event_RSVP.findOne({
      where: {
        eventId: req.params.id,
        userId: req.user.id,
      },
    });
    console.log('event', event);
    if (!event) return res.status(404).send('That event-rsvp does not exist');

    if (req.user.id === event.userId) {
      const toDelete = await event.destroy();
      res.json(toDelete);
    }
  } catch (error) {
    console.log('backend issue updating users rsvp');
    next(error);
  }
});

// this sends back event details including users' rsvps
router.get('/:id', async (req, res, next) => {
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

// this allows logged in user to create a event
router.post('/', requireToken, async (req, res, next) => {
  try {
    console.log(req.body);
    const { event_start, event_end, zip_code, topic, description } = req.body;
    const newEvent = await Event.create({
      event_start,
      event_end,
      zip_code,
      topic,
      description,
      creatorId: req.user.id,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    console.log('Backend issue adding event');
    next(error);
  }
});

// this allows a event creator to edit said event
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

// this allows either event creator or admin to delete said event
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

router.post('/name', async (req, res, next) => {
  try {
    topic = req.body.params.topic;
    const searchedEvents = await Event.findAll({
      where: {
        topic: {
          [sequelize.Op.iLike]: `%${topic}%`,
        },
      },
    });
    res.status(200).json(searchedEvents);
  } catch (error) {
    console.log('backend issue fetching searched events');
    next(error);
  }
});

module.exports = router;
