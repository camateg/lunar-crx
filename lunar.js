$(document).ready(function() {
  $('#save').on('click', function(e) {
    save_options();
    populate();
  });
  populate();
});

function populate() {
  var api_key = 'b757ebf138ea3eb9';
  var zip = $('#zip').val();
  var url = 'http://api.wunderground.com/api/' + api_key + '/astronomy/q/' + zip + '.1.99999.json';
  $.getJSON(url, function(data) {
    var img = 'http://icons.wunderground.com/graphics/moonpictsnew/moon' + data.moon_phase.ageOfMoon + '.gif';
    $('#content').html(zip + '<br /><br />Sunrise: ' + data.sun_phase.sunrise.hour + ':' + data.sun_phase.sunrise.minute + '<br />Sunset: ' + data.sun_phase.sunset.hour + ':' + data.sun_phase.sunset.minute + '<br />Phase: ' + data.moon_phase.phaseofMoon + '<br /><br /><img src="' + img + '" />');
  });
}

// Saves options to chrome.storage
function save_options() {
  var zip = $('#zip').val();;

  chrome.storage.sync.set({
    zip: zip,
  }, function() {
    console.log(zip);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    zip: '16001',
  }, function(items) {
    $('#zip').val(items.zip);
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
