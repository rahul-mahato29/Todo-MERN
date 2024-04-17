const express = require('express');
const app = express();
const port = 3000;
const TodoRoutes = require('./Routes/user');

app.use('/todo', TodoRoutes);

app.listen(port, () => {
    console.log(`port is running at ${port}`);
})