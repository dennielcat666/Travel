$(function () {
	let $menuLink = $('.js-menu-link')

	$('html').click(function() {
		let $subMenu = $('.js-sub-menu')
		$subMenu.hide(); 
	});

	$menuLink.click(function() {
		let $subMenu = $('.js-sub-menu')
		$subMenu.hide(); 
	});

	$('.js-menu-box').click(function(event){
		event.stopPropagation();
   	});

	$menuLink.on('click', function() {
		let $subMenu = $(this).siblings('ul');
		$subMenu.toggle();
	})
})