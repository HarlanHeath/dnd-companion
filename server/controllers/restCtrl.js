const axios = require("axios");

let monsters = [];

axios
  .get("http://www.dnd5eapi.co/api/monsters/")
  .then(res => {
    monsters = res.data.results;
  })
  .catch(err => {
    res.status(500).send(err);
    console.log("Something has gone wrong!");
  });

const getMonsters = (req, res) => {
  res.status(200).json(monsters);
};

module.exports = {
  getMonsters
};
