const Note = require('../models/Note');

exports.getAllNotes = async (filter, projection = {}) => {
  filter.isActive = true;
  return await Note.find(filter,projection);
};

exports.getNoteById = async (filter, projection = {}) => {
  filter.isActive = true;
  return await Note.findOne(filter, projection);  
};

exports.createNotes = async (data) => {
  return await Note.insertMany(data);
};

exports.createNote = async (data) => {
  return await Note.create(data); 
};

exports.findOneAndUpdate = async (filter, update, options = {}) => {
  filter.isActive = true;
  return await Note.findOneAndUpdate(filter, update, options);
};








// exports.updateNoteById = async (id, data) => {
//   return await Note.findByIdAndUpdate(id, data, { new: true });
// };

// exports.deleteNoteById = async (id) => {
//   return await Note.findByIdAndUpdate(id, { isActive: true }, { new: true });
// };






// exports.deleteNoteById = async (id) => {
//   return await Note.findByIdAndDelete(id);
// };


// exports.getAllNotes = async () => {
//   return await Note.find();
//   // return await Note.find({ isActive: false }, { isActive: 0, __v: 0 });

// };


// exports.getNoteById = async (id) => {
//   return await Note.findOne({ _id: id });
//   // return await Note.findOne({ _id: id }, { isActive: 0, __v: 0 });
// };
