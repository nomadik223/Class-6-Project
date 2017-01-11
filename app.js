'use strict';

var hours = ['6AM - 7AM:', '7AM - 8AM:', '8AM - 9AM:', '9AM - 10AM:', '10AM - 11AM:', '11AM - 12PM:', '12PM - 1PM:', '1PM - 2PM:', '2PM - 3PM:', '3PM - 4PM:', '4PM - 5PM:', '5PM - 6PM:', '6PM - 7PM:', '7PM - 8PM:'];
var openLocations = [];
var totalsRow = [];

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  // this.identifier = identifier;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('Seatac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

Store.prototype.calcCustEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var custEachHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(custEachHour);
  };
};

Store.prototype.calcCookiesEachHourArray = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(cookiesPerHour);
    this.totalDailyCookieSales += cookiesPerHour;
  };
};

var renderTableHeader = function() {
  var headerTitles = ['Locations!', 'Daily Location Total'];
  var locationInfo = document.getElementById('locationInfo');
  var trEl = document.createElement('tr');
  for(var i = 0; i < headerTitles.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = headerTitles[i];
    trEl.appendChild(thEl);
  }
  for( var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
  locationInfo.appendChild(trEl);
};

var renderTableRow = function(stands) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = stands.locationName;
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = stands.totalDailyCookieSales;
  trEl.appendChild(tdEl);

  for( var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = stands.cookiesEachHourArray[i];
    trEl.appendChild(tdEl);
  };
  locationInfo.appendChild(trEl);
};

function renderTotals() {
  totalsRow = [];
  totalsRow[0] = 'Totals: ';
  var tmp = 0;
  //get totals total
  for (var i = 0; i < openLocations.length; i++) {
    tmp += openLocations[i].totalDailyCookieSales;
  }
  totalsRow[1] = tmp;
  tmp = 0;
  //get hourly totals
  for (var h = 0; h < hours.length; h++) {
    for (var l = 0; l < openLocations.length; l++) {
      tmp += openLocations[l].cookiesEachHourArray[h];
    }
    totalsRow.push(tmp);
  }
  //display totalsRow
  var tableEl = document.getElementById('locationInfo');
  var trEl = document.createElement('tr');
  for(var i = 0; i < totalsRow.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = totalsRow[i];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
}

openLocations = [pike, seatac, center, capHill, alki];

renderTableHeader();
for (var i = 0; i < openLocations.length; i++) {
  openLocations[i].calcCookiesEachHourArray();
  renderTableRow(openLocations[i]);
};
renderTotals();

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('storeName');
  var min = document.getElementById('min');
  var max = document.getElementById('max');
  var avg = document.getElementById('avg');
  var tmpStore = new Store(name.value, parseFloat(min.value), parseFloat(max.value), parseFloat(avg.value));
  openLocations.push(tmpStore);
  var oldTable = document.getElementById('locationInfo');
  while (oldTable.firstChild) {
    oldTable.removeChild(oldTable.firstChild);
  }
  renderTableHeader();
  for (var i = 0; i < openLocations.length; i++) {
    openLocations[i].calcCookiesEachHourArray();
    renderTableRow(openLocations[i]);
  };
  renderTotals();
});
