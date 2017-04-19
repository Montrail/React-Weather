var axios = require('axios');
//e5d6542148fc741b63eddcd30aa2a687
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=e5d6542148fc741b63eddcd30aa2a687&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestURL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      var err = `City name '${location}' was not found`;
      throw new Error(err);
    });
  }
}
