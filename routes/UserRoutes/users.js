var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', function (req, res, next) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url).then(response => response.json())
  .then(response => {
    console.log(response);
    return res.json(response)
  });
})

module.exports = router;
