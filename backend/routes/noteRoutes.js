const express = require('express');
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require('../controllers/noteController');

const { protect } = require('../middleware/authMiddleware');

//Re-route into note router
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.route('/').get(protect, getNotes).post(protect, addNote);

module.exports = router;
