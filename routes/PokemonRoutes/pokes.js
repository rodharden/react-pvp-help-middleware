var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET pokes listing. */
router.get('/', function (req, res, next) {
  const url = 'https://pogoapi.net/api/v1/pokemon_names.json';
  fetch(url).then(response => response.json())
    .then(response => {

      let JSONResult = "["
      Object.keys(response).map((key) => (
        JSONResult += "{\"id\":\"" + key + "\",\"name\":\"" + response[key].name + "\"},"
      ))
      JSONResult = JSONResult.substring(0, JSONResult.length - 1)
      JSONResult += "]"
      response = JSON.parse(JSONResult)
      return res.json(response)
    });
})

router.get('/stats/:type', function (req, res, next) {
  const type = req.params.type
  const url = 'https://pogoapi.net/api/v1/pokemon_stats.json';
  fetch(url).then(response => response.json())
    .then(response => {

      let JSONResult = "["
      Object.keys(response).map((key) => (
        JSONResult += "{\"id\":\"" + key + 
                       "\",\"base_attack\":\"" + response[key].base_attack + 
                       "\",\"base_defense\":\"" + response[key].base_defense + 
                       "\",\"base_stamina\":\"" + response[key].base_stamina + 
                       "\",\"form\":\"" + response[key].form + 
                       "\",\"pokemon_id\":\"" + response[key].pokemon_id + 
                       "\"},"
      ))
      JSONResult = JSONResult.substring(0, JSONResult.length - 1)
      JSONResult += "]"
      response = JSON.parse(JSONResult)
      return res.json(response)
    });
})

router.get('/stats/:type/:id', function (req, res, next) {
  const id = req.params.id
  const type = req.params.type
  const url = 'https://pogoapi.net/api/v1/pokemon_stats.json';
  fetch(url).then(response => response.json())
    .then(response => {

      let JSONResult = "["
      Object.keys(response).map((key) => (
        JSONResult += "{\"id\":\"" + key + 
                       "\",\"base_attack\":\"" + response[key].base_attack + 
                       "\",\"base_defense\":\"" + response[key].base_defense + 
                       "\",\"base_stamina\":\"" + response[key].base_stamina + 
                       "\",\"form\":\"" + response[key].form + 
                       "\",\"pokemon_id\":\"" + response[key].pokemon_id + 
                       "\"},"
      ))
      JSONResult = JSONResult.substring(0, JSONResult.length - 1)
      JSONResult += "]"
      response = JSON.parse(JSONResult)
      const filtered = response.filter(pokes => pokes.pokemon_id === id &&
          pokes.form.toLowerCase() === type.toLowerCase())
      return res.json(filtered)
    });
})

module.exports = router;