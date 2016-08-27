requirejs.config({
    paths: {
      ko: 'vendor/knockout',
      lodash: 'vendor/lodash',
      q: 'vendor/q',
      qajax: 'vendor/qajax'
    },
    map: {
      '*': {
        'knockout': 'ko'
      }
    }
  });

require([
  'lodash',
  'ko',
  'q',
  'qajax'
],
function (_, ko, Q, Qajax) {
  
  function ViewModel() {
    this.city = ko.observable('Portland');
    this.country = ko.observable('US');
    this.temp = ko.observable(20);
    this.weather = ko.observable('Clear');

    this.weatherLowerCased = ko.pureComputed(function () {
      return this.weather().toLowerCase();
    }, this);
  }
  _.extend(ViewModel.prototype, {
    fetchWeather: function updateLatLng() {
      var self = this;
      Qajax({
        url: 'http://localhost:3000/weather',
        method: 'get',
        type: 'json',
        contentType: 'application/json',
        crossDomain: true,
        params: {city: this.city(), country: this.country()}
      }).then(Qajax.filterSuccess).
        then(Qajax.toJSON).
        then(function (obj) {
          self.city(obj.city);
          self.country(obj.country);
          self.temp(obj.temp);
          self.weather(obj.weather);
        });
    }
  });

  ko.applyBindings(new ViewModel());
});
