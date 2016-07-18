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
			
			dropdownMenu.css('height', '');
			subMenu.css('height', '');
		  	

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
		}
	);

	// hide & show
	var searchButton = $('.search-button'),
		searchWrap = $('.search-wrap'),
		menuButton = $('.menu-button'),
		leftMenu = $('.left-menu');

	function searchHiddenToogle(width) {
		
		if (width < 992) {
			searchButton.removeClass('hidden');
			searchWrap.addClass('hidden');

			if (width < 768) {
				menuButton.removeClass('hidden');
				leftMenu.addClass('hidden');
			} else {
				menuButton.addClass('hidden');
				leftMenu.removeClass('hidden');
			}
		} else {
			searchButton.addClass('hidden');
			searchWrap.removeClass('hidden');
		}
	}

	searchButton.click(function(e) {
		e.preventDefault();
	});

	searchHiddenToogle(document.documentElement.clientWidth);

	$(window).resize(function() {
		searchHiddenToogle(document.documentElement.clientWidth);
	});

	menuButton.click(function(e) {
		e.preventDefault();
		leftMenu.toggleClass('hidden');
	});
	menuButton.blur(function() {
		leftMenu.addClass('hidden');
	});


});