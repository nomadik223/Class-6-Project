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

//Pike Place revenue
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

//Seatac revenue
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

//Center sales revenue
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
