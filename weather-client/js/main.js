requirejs.config({
    paths: {
      ko: 'vendor/knockout',
      lodash: 'vendor/lodash',
      kompose: 'vendor/kompose'
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
  'kompose'
],
function (_, ko) {
  
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
    fetchWeather: function fetchWeather() {
      var self = this;
      fetch(new Request('http://localhost:3000/weather?city=' + this.city() + '&country=' + this.country(), {
        mode: 'cors'
      })).then(function (resp) {
        return resp.json();
      }).then(function (obj) {
        self.city(obj.city);
        self.country(obj.country);
        self.temp(obj.temp);
        self.weather(obj.weather);
      });
    }
  });

  ko.applyBindings(new ViewModel());
});
