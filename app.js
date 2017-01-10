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
