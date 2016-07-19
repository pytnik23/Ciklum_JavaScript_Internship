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


	// Form validate
	
	var form 			= $("#myForm"),
		formName 		= $("#myForm #name"),
		formEmail 		= $("#myForm #email"),
		formPassword 	= $("#myForm #password");

	var regName 		= /^[a-z0-9_-]{3,16}$/,
		regEmail 		= /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
		regPassword 	= /^[a-z0-9_-]{6,18}$/;


	form.submit(function(e) {

		if (!regName.test(formName.val())) {
		    formName.focus();
		    formName.closest('.input').css('box-shadow', '0 0 5px 5px #f36');
		    e.preventDefault();
		    return;
		} else {
			formName.closest('.input').css('box-shadow', '');
		}

	 	if (!regEmail.test(formEmail.val())) {
		    formEmail.focus();
		    formEmail.closest('.input').css('box-shadow', '0 0 5px 5px #f36');
		    e.preventDefault();
		    return;
		} else {
			formEmail.closest('.input').css('box-shadow', '');
		}

		if (!regPassword.test(formPassword.val())) {
		    formPassword.focus();
		    formPassword.closest('.input').css('box-shadow', '0 0 5px 5px #f36');
		    e.preventDefault();
		    return;
		} else {
			formPassword.closest('.input').css('box-shadow', '');
		}
	  
		formName.val('');
		formEmail.val('');
		formPassword.val('');
	});

});