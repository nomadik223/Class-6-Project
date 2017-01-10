'use strict';

//Hours array
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

//Pike Place object
var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

//Pike Place customer generator
pike.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(oneHour + ' Pike sales/hour');
    pike.hourlyCust.push(oneHour);
  };
};
pike.generateRandomNum(pike.min,pike.max);

//Pike Place hourly sales
pike.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    pike.hourlySales.push(saleHour);
    pike.total += saleHour;
  };
};
pike.calculateHourlySales(pike.hourlyCust, pike.avg);

//Pike Place write in document
pike.listHours = function () {
  var pikeInfo = document.getElementById('pikeInfo');
  for (var i = 0; i < pike.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + pike.hourlySales[i];
    pikeInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + pike.total;
  pikeInfo.appendChild(total);
};
pike.listHours();

//Seatac Airport object
var seatac = {
  min: 3,
  max: 24,
  avg: 1.2,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

//Seatac Customer generator
seatac.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(oneHour + ' Seatac sales/hour');
    seatac.hourlyCust.push(oneHour);
  };
};
seatac.generateRandomNum(seatac.min,seatac.max);

//Seatac Hourly sales
seatac.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    seatac.hourlySales.push(saleHour);
    seatac.total += saleHour;
  };
};
seatac.calculateHourlySales(seatac.hourlyCust, seatac.avg);

//Seatac write in document
seatac.listHours = function () {
  var seatacInfo = document.getElementById('seatacInfo');
  for (var i = 0; i < seatac.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + seatac.hourlySales[i];
    seatacInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + seatac.total;
  seatacInfo.appendChild(total);
};
seatac.listHours();

//Seattle Center object
var center = {
  min:11,
  max: 38,
  avg: 3.7,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

//Center customer generator function
center.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(oneHour + ' Center sales/hour');
    center.hourlyCust.push(oneHour);
  };
};
center.generateRandomNum(center.min,center.max);

//Center hour sales function
center.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    center.hourlySales.push(saleHour);
    center.total += saleHour;
  };
};
center.calculateHourlySales(center.hourlyCust, center.avg);

//Center write in document
center.listHours = function () {
  var centerInfo = document.getElementById('centerInfo');
  for (var i = 0; i < center.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + center.hourlySales[i];
    centerInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + center.total;
  centerInfo.appendChild(total);
};
center.listHours();

//CapHoll object
var capHill = {
  min: 20,
  max: 38,
  avg: 2.3,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

//capHill customer generator
capHill.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(oneHour + ' CapHill sales/hour');
    capHill.hourlyCust.push(oneHour);
  };
};
capHill.generateRandomNum(capHill.min,capHill.max);

//CapHill hourly sales
capHill.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    capHill.hourlySales.push(saleHour);
    capHill.total += saleHour;
  };
};
capHill.calculateHourlySales(capHill.hourlyCust, capHill.avg);

//CapHill write in document
capHill.listHours = function () {
  var capHillInfo = document.getElementById('capHillInfo');
  for (var i = 0; i < capHill.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + capHill.hourlySales[i];
    capHillInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + capHill.total;
  capHillInfo.appendChild(total);
};
capHill.listHours();

//Alki Object
var alki = {
  min: 2,
  max: 16,
  avg: 4.6,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

//Alki Customer generator
alki.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(oneHour + ' Alki sales/hour');
    alki.hourlyCust.push(oneHour);
  };
};
alki.generateRandomNum(alki.min,alki.max);

//Alki Hourly sales
alki.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    alki.hourlySales.push(saleHour);
    alki.total += saleHour;
  };
};
alki.calculateHourlySales(alki.hourlyCust, alki.avg);

//Alki write in document
alki.listHours = function () {
  var alkiInfo = document.getElementById('alkiInfo');
  for (var i = 0; i < alki.hourlyCust.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = hours[i] + ' Sales - ' + alki.hourlySales[i];
    alkiInfo.appendChild(listItem);
  };
  var total = document.createElement('ul');
  total.textContent = 'Total - ' + alki.total;
  alkiInfo.appendChild(total);
};
alki.listHours();
