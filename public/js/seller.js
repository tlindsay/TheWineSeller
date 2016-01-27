var DURATION = 500;

calendar_id = "73v08d4kh0h50cts170upes508@group.calendar.google.com";
api_key = "AIzaSyDt6Y0FbdLxqb14fII0Bs9pKx21AjDmHow";
req_url = "https://www.googleapis.com/calendar/v3/calendars/"+encodeURIComponent(calendar_id)+"/events?maxResults=15&orderBy=startTime&singleEvents=true&key="+api_key;

$(document).ready(function() {
  $.ajax({
    url: req_url
  }).done(function(data) {
    for (var i = 0; i < data.items.length - 1; i++) {
      event = data.items[i];
      start = new Date(event.start.dateTime);
      end   = new Date(event.end.dateTime);
      markup = '';
      markup += '<tr>';
      markup += '<td class="event-date">';
      markup += (start.getMonth()+1) + "/" + start.getDate();
      markup += '<br />';
      markup += ((start.getHours()+1)%12)+':'+(start.getMinutes() == '0' ? '00' : start.getMinutes());
      markup += (start.getHours() > 12) ? 'am' : 'pm';
      markup += ' - ';
      markup += ((end.getHours()+1)%12)+':'+(end.getMinutes() == '0' ? '00' : end.getMinutes());
      markup += (end.getHours() > 12) ? 'am' : 'pm';
      markup += '</td>';
      markup += '<td class="event-info">';
      markup += '<div class="event-title">';
      markup += event.summary;
      markup += '</div>'
      markup += '<div class="event-description">';
      markup += event.description;
      markup += '</div>';
      markup += '</td>';
      markup += '</tr>';

      $('.events-table').append(markup);
    }
  });
});

function getEvents() {

}

function show(section) {
	var $old = $('section.active');
	var $new = $('section.'+section);

	$old.removeClass('active');
	$old.hide();

	$new.addClass('active');
	$new.fadeIn(DURATION);
	$new.removeClass('hidden');
}