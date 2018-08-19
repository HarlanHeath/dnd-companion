const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const restCtrl = require("./controllers/restCtrl");

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/monsters", restCtrl.getMonsters);

//Methods setup for future use
/*
app.post
app.delete
app.put
*/

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
