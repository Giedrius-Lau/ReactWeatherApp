//pasiimam express API
var express = require('express');

//Sukuriam aplikacija
var app = express();

//nurodome kuriame folderyje ji veiktu
//app.use - prideda funkcionalumo express aplikacijai
//express.static - nustato folderio pavadinima kuri norime nurodyt serveryje PUBLIC
app.use(express.static('public'));

//Serverio uzkurimas
app.listen(3000, function () {
  console.log('Express serveris veikia! PORTAS : 3000')
})
