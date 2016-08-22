$(function() {
	
	var width = document.documentElement.clientWidth;
	
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
		
		$(target).blur(function() {
			if (width > 768) {
				$(dropdown).slideUp('fast');
			}
		})

		$(dropdown).slideToggle('fast');
	});
	
	//second dropdown menu hover & size
	var dropdownMenu,
		subMenu,
		menuItems = $('.left-menu > li > ul > li');

	menuItems.hover(
		function () {
			//menuItems.find('i').removeClass('fa-angle-down').addClass('fa-angle-right');

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
			searchWrap.css('display', 'none');

			if (width < 769) {
				menuButton.removeClass('hidden');
				leftMenu.addClass('hidden');
			} else {
				menuButton.addClass('hidden');
				leftMenu.removeClass('hidden');
			}
		} else {
			searchButton.addClass('hidden');
			searchWrap.css('display', 'inline-block');
		}
	}

	//search toggle
	searchButton.click(function(e) {
		e.preventDefault();
		if (searchWrap.css('display') === 'none') {
			searchButton.css('background-color', '#f2f2f2')
			searchWrap.css('display', 'inline-block');
			$('#search').focus();
		} else {
			searchWrap.css('display', 'none');
			searchButton.css('background-color', '')
		}
	});

	searchHiddenToogle(document.documentElement.clientWidth);
	$(window).resize(function() {
		width = document.documentElement.clientWidth;
		searchHiddenToogle(width);
	});

	menuButton.click(function(e) {
		e.preventDefault();
		if (leftMenu.hasClass('hidden')) {
			leftMenu.removeClass('hidden');
			menuButton.css('backgroundColor', '#f2f2f2');
		} else {
			leftMenu.addClass('hidden');
			menuButton.css('backgroundColor', '');
		}
	});


	// Form validate
	
	var form 			= $("#myForm"),
		formName 		= $("#myForm #name"),
		formEmail 		= $("#myForm #email"),
		formPassword 	= $("#myForm #password");

	var regName 		= /^[a-z0-9_-]{3,16}$/,
		regEmail 		= /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
		regPassword 	= /^[a-zA-Z0-9_-]{6,18}$/;


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

	// footer menu
	var footerMenuPunkt = $('footer .footer-column-section');

	footerMenuPunkt.on('click', function() {
		$(this).find('ul').slideToggle('fast');
		//console.log($(this).find('h3:after'));
		$(this).find('h3:after').css('transform', 'rotate(45deg)');
	});




















});