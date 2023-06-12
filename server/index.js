const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { router } = require("./router");

const app = express();
const port = 4000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// for later
// app.use(express.json());
//parse incoming request with all types
// app.use(express.urlencoded({ extended: true }));
