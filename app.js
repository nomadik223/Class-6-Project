'use strict';

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
var pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  hourlyCust: [],
  hourlySales: [],
  total: 0
};

pike.generateRandomNum = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random() * (max - min + 1)) + min;
    pike.hourlyCust.push(oneHour);
  };
};
pike.generateRandomNum(pike.min,pike.max);

pike.calculateHourlySales = function (hourlyCust, avg) {
  for (var i = 0; i < hourlyCust.length; i++) {
    var saleHour = Math.floor(hourlyCust[i] * avg);
    pike.hourlySales.push(saleHour);
    pike.total += saleHour;
  };
};
pike.calculateHourlySales(pike.hourlyCust, pike.avg);

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
