'use strict';
class Forcast {
  constructor(city) {
    this.date = city.datetime;
    this.description = city.weather.description;
  }
}

module.exports=Forcast;