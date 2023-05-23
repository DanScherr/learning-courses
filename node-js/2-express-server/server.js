// Instances of vars and objs
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('./config/colors-theme')
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB  database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps')

// Middleware files
// const logger = require('./middleware/logger') // custom

// initiating our express server
const app = express();

// Body parser
app.use(express.json())

// dev logging Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// const logger = (req, res, next) => { // custom
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
// }

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

// Mount logger
// app.use(logger)

// setting port
const PORT = process.env.PORT || 5000;

// starting server code
const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV.env.underline} mode on port ${PORT}`.data.bold)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message.error}`.data.bold);
    // close server and exit proccess
    server.close(() => process.exit(1))
})