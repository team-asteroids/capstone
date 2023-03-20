// can come from USER or SITTER routes (or just straight admin)
const router = require('express').Router({ mergeParams: true });
const { User, Pet, Sitter, Payment } = require('../../db');

// GET - fetch all bookings (user-specific & admin only)
// /user/:id/bookings/
// /sitter/:id/bookings/
// /bookings/
router.get('/', async (req, res, next) => {});

// GET - fetch a specific booking
// /user/:id/bookings/:id
// /sitter/:id/bookings/:id
// /bookings/:id
router.get('/:id', async (req, res, next) => {});

// POST - add a new booking
router.post('/', async (req, res, next) => {});

// PUT - update a booking
router.put('/:id', async (req, res, next) => {});

// DELETE - delete a booking
router.delete('/:id', async (req, res, next) => {});

module.exports = router;
