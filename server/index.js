const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/', userRoutes);

io.on('connection', socket => {
  console.log('New client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Server running on port ' + PORT));
