const express = require("express");
const cors = require("cors");

const { router } = require("./router");

const app = express();
const port = 4000;

app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// for later
// app.use(express.json());
//parse incoming request with all types
// app.use(express.urlencoded({ extended: true }));
