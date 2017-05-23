var api_key = 'b757ebf138ea3eb9';

var url = 'http://api.wunderground.com/api/' + api_key + '/astronomy/q/16001.1.99999.json';

$.getJSON(url, function(data) {
  var img = 'http://icons.wunderground.com/graphics/moonpictsnew/moon' + data.moon_phase.ageOfMoon + '.gif';
  $('#content').html('Butler, PA<br /><br />Sunrise: ' + data.sun_phase.sunrise.hour + ':' + data.sun_phase.sunrise.minute + '<br />Sunset: ' + data.sun_phase.sunset.hour + ':' + data.sun_phase.sunset.minute + '<br />Phase: ' + data.moon_phase.phaseofMoon + '<br /><br /><img src="' + img + '" />');
  console.log(img);
});
