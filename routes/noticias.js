var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia');

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.render('noticias/index', { title: "" });
// });

router.get('/', async function(req, res, next) {
  dados = await Noticia.find();
  res.json(dados);
});

router.get('/visualizar', async function(req, res, next) {
  visualizar = await Noticia.findById(req.query.id);
  res.json(visualizar);
});

router.get('/contador', async function(req, res, next) {
  dados = await Noticia.count();
  res.json({quantidade:dados});
});

module.exports = router;

