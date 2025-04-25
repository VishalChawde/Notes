const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.get('/:id', notesController.getNote);
router.get('/get/allData', notesController.getAllNotes);
router.post('/create/multiple', notesController.createNotes);
router.post('/create', notesController.createNote);
router.post('/update/:id', notesController.updateNote);
router.post('/delete/:id', notesController.softDeleteNote);

module.exports = router;























// const express = require('express');
// const router = express.Router();
// const notesController = require('../controllers/notesController');

// router.get('/:id', notesController.getNote);
// router.get('/get/allData', notesController.getAllNotes);
// router.put('/:id', notesController.updateNote);
// router.delete('/:id', notesController.deleteNote);
// router.post('/create', notesController.createNotes);
// router.post('/create/single', notesController.createNote);

// module.exports = router;
