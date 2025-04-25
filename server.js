const express = require("express");
const connectDB = require("./m_modules/db");
const notesRoutes = require("./routes/notesRoutes");
const config = require("./config/config.json")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

connectDB();

app.use(`${config.BASEPATH}`, notesRoutes);

const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
