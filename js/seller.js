var DURATION = 500;

function show(section) {
	var $old = $('section.active');
	var $new = $('section.'+section);

	$old.removeClass('active');
	$old.hide();

	$new.addClass('active');
	$new.fadeIn(DURATION);
	$new.removeClass('hidden');
}