const router = require('express').Router();
const { Event } = require('../../db');

// Get all events
router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Event.findAll({});
    console.log('allEvents', allEvents);
    res.status(200).json(allEvents);
  } catch (error) {
    console.log('backend issue fetching all events');
    next(error);
  }
});
// Get single event
router.get('/:id', async (req, res, next) => {
  try {
    const singleEvent = await Event.findByPk(+req.params.id);
    console.log('singleEvent', singleEvent);
    res.status(200).json(singleEvent);
  } catch (error) {
    console.log('Backend issue fetching single event');
    next(error);
  }
});

// Post an event
router.post('/', async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.log('Backend issue adding event');
    next(error);
  }
});

// Update an event
router.put('/', async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    console.log(event);
    if (!event) return res.status(404).send('Event does not exist');
    res.json(await event.update(req.body));
  } catch (error) {
    console.log('Backend issue updating event');
    next(error);
  }
});

// Delete event
router.delete('/', async (req, res, next) => {
  try {
    const deletedEvent = await Event.findByPk(req.params.id);
    res.json(await deletedEvent.destroy());
  } catch (error) {
    console.log('backend issue deleting event');
    next(error);
  }
});

// get all RSVPs for single event

module.exports = router;
