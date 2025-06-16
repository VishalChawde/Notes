const express = require("express");
const connectDB = require("./m_modules/db");
const notesRoutes = require("./routes/notesRoutes");
const config = require("./config/config.json")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express();

const whitelist = [
  'http://localhost:3001',           // local frontend
  'https://viishalroxx.netlify.app',          // production frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

connectDB();

app.use(`${config.BASEPATH}`, notesRoutes);

const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
