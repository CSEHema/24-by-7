const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT=5000;
app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)});


