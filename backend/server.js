const express = require("express");
const cors = require('cors')
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

let dbConnect = require('./dbConnect')

app.use(express.json());

let userRoutes = require('./routes/userRoutes')
let postRoutes = require('./routes/postRoutes')
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my MySQL application!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
