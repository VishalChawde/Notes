const NoteService = require('../service/noteService');

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await NoteService.getAllNotes();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get a single note
exports.getNote = async (req, res) => {
  try {
    const note = await NoteService.getNote(req);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a single note
exports.createNote = async (req, res) => {
  try {
    const note = await NoteService.createNote(req);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create one or many notes
exports.createNotes = async (req, res) => {
  try {
    const notes = await NoteService.createNotes(req);
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await NoteService.updateNote(req);
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


// Delete a note
exports.softDeleteNote = async (req, res) => {
  try {
    const deletedNote = await NoteService.deleteNote(req);
    res.status(200).json(deletedNote);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
