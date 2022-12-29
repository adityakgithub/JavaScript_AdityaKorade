//
/** @param {Object} data */
function getCountry(data) {
    return data.location.country;
}

/** @param {Object} data */
function getIcon(data) {
    return data.current.weather_icons[0];
}

/** @param {Object} data */
function getTemperature(data) {
    return data.current.temperature;
}

module.exports = {
    getCountry: getCountry,
    getIcon: getIcon,
    getTemperature: getTemperature
  }