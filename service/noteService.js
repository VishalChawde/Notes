const NoteRepository = require('../repository/repo');

exports.getAllNotes = async (req) => {
  return await NoteRepository.getAllNotes(
    {},{ _id: 1, title: 1, content: 1, createdAt: 1, updatedAt: 1 }
  );
};

exports.getNote = async (req) => {
  const { id } = req.params;

  const note = await NoteRepository.getNoteById(
    { _id: id },
    { _id: 0, title: 1, content: 1, createdAt: 1, updatedAt: 1 }
  );

  if (!note) throw new Error('Note not found');
  return note;
};

exports.createNote = async (req) => {
  const { title, content } = req.body;
  if (!title || title.trim() === '') {
    throw new Error('Title is required');
  }

  return await NoteRepository.createNote({ title, content });
};

exports.createNotes = async (req) => {
  const notes = req.body;

  if (!Array.isArray(notes) || notes.length === 0) {
    throw new Error('Notes array is required');
  }

  return await NoteRepository.createNotes(notes);
};

exports.updateNote = async (req) => {
  const { id } = req.params;
  const updateData = req.body;

  const updatedNote = await NoteRepository.findOneAndUpdate(
    { _id: id },
    updateData,
    { new: true }
  );

  if (!updatedNote) throw new Error('Note not found or already deleted');
  return updatedNote;
};

exports.deleteNote = async (req) => {
  const { id } = req.params;

  const deletedNote = await NoteRepository.findOneAndUpdate(
    { _id: id },
    { isActive: false },
    { new: true }
  );

  if (!deletedNote) throw new Error('Note not found or already deleted');

  return {
    message: 'Note deleted successfully',
    note: deletedNote
  };
};