$(function() {
	//dropdown menu
	var menu = $('.left-menu');

	menu.on('click', function(e) {
		var target = e.target;
		e.preventDefault();
		while (target !== this) {
			if (target.tagName === 'A') {
				break;
			}
			target = target.parentNode;
		}
		if (!target.nextElementSibling) return;
		var dropdown = target.nextElementSibling;
		
		$(target).focusout(function() {
			$(dropdown).slideUp('fast');
		})
		$(dropdown).slideToggle('fast');
	});
	
	//second dropdown menu hover
	menu.find('li ul li').hover(
	  function () {
	    $('ul', this).stop().show();
	  },
	  function () {
	    $('ul', this).stop().hide();
	  }
	);

	//second dropdown menu height
	var h = $('.dropdown-menu').height();
	$('.second-dropdown-menu').height(h);
});