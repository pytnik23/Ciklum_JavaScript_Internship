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
	
	//second dropdown menu hover & size
	var dropdownMenu,
		subMenu;

	menu.find('li ul li').hover(

		function () {

			dropdownMenu = $(this).closest('.dropdown-menu');
		  	subMenu = $(this).find('.second-dropdown-menu');
			
		  	

		  	var x = dropdownMenu.height(),
				y = subMenu.height(),
				menuHeight = Math.max(x, y);

			if (!menuHeight) return;

			dropdownMenu.height(menuHeight);
			subMenu.height(menuHeight);

			$('ul', this).show();
		},
		function () {
			$('ul', this).hide();
			dropdownMenu.css('height', '');
			subMenu.css('height', '');
		}
	);

	// search
	function searchHiddenToogle() {
		if (document.documentElement.clientWidth < 992) {
			$('.search-button').removeClass('hidden');
			$('.search-wrap').addClass('hidden');
		} else {
			$('.search-button').addClass('hidden');
			$('.search-wrap').removeClass('hidden');
		}
	}

	searchHiddenToogle();

	$(window).resize(function() {
		searchHiddenToogle();
	});

	$('.search-button').click(function(e) {
		e.preventDefault();
	});
});