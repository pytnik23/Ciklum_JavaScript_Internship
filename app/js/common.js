$(function() {
	
	var width = document.documentElement.clientWidth;

	//dropdown menu
	var mainMenuItems = $('.menu__item');

	// toogle .dropdown-menu and active class on .menu__item and 
	mainMenuItems.on('click', function(e) {
		if (!this.nextElementSibling) return;
		e.preventDefault();

		var __self = this,
			dropdown = this.nextElementSibling;

		if ( !$(this).hasClass('active') ) {
			mainMenuItems.each(function(i, el) {
				if (el !== __self) {
					$(el).removeClass('active');
					$(el.nextElementSibling).slideUp('fast');
				}
			});
			$(__self).addClass('active');
			$(dropdown).slideDown('fast');
		} else {
			$(dropdown).slideToggle('fast');
		}
	});
	
	//second dropdown menu hover & size
	var dropdownMenu,
		subMenu,
		menuItems = $('.left-menu > li > ul > li');

	function showSecondDropdownMenu() {
		if (width >= 768) {
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
		}
	}

	function hideSecondDropdownMenu() {
		if (width < 768) return;
		$('ul', this).hide();
	}

	menuItems.hover(
		showSecondDropdownMenu,
		hideSecondDropdownMenu
	);
	menuItems.on('click', function(e) {
		e.preventDefault();
		if (width < 768) {
			$('ul', this).slideToggle();
		}
	});

	// hide & show
	var searchButton = $('.search-button'),
		searchWrap = $('.search-wrap'),
		menuButton = $('.menu-button'),
		leftMenu = $('.left-menu'),
		dropdownMenuItems = $('.left-menu .dropdown-menu > li > a'),
		footerMenuLists = $('footer.apple .footer-column-section ul');

	function searchHiddenToogle(width) {
		if (width >= 768) {
			dropdownMenuItems.removeClass('active');
			footerMenuLists.css('display', 'block');
		} else {
			dropdownMenuItems.on('click', function() {
				$(this).toggleClass('active');
			});
			footerMenuLists.css('display', '');
		}
		if (width < 993) {
			searchButton.removeClass('hidden');
			searchWrap.css('display', 'none');

			if (width < 768) {
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
		e.stopPropagation();
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
		$(this).find('h3').toggleClass('active');
	});

	// hide menu on document click
	$(document).on('click', function(e) {
		mainMenuItems.each(function(i, el) {
			$(el).removeClass('active');
			$(el.nextElementSibling).slideUp('fast');
		});
		if (width < 768) {
			leftMenu.addClass('hidden');
			menuButton.css('backgroundColor', '');
			leftMenu.find('a.active').removeClass('active');
			$('.second-dropdown-menu').hide();
		}
	});

	leftMenu.click(function(event){
		event.stopPropagation();
	});
});