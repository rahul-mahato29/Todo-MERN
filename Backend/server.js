const express = require('express');
const app = express();
const port = 3000;
const TodoRoutes = require('./Routes/user');
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:5173"   //means only this frontend can hit the backend, for secure - if we not mention anything then any frontend can hit the backend.
}));

app.use('/todo', TodoRoutes);

app.listen(port, () => {
    console.log(`port is running at ${port}`);
})