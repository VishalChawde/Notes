// const mongoose = require('mongoose');
// const config = require('../config/config.json')

// const connectDB = async () => {
//   try {
//     await mongoose.connect(config.MONGO_URI);
//     console.log('MongoDB Connected');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');
const config = require('../config/config.json');

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected to Atlas');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
