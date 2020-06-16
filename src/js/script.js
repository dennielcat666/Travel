$(function () {
	let $menuLink = $('.js-menu-link')

	$('html').click(function() {
		let $subMenu = $('.js-sub-menu')
		$subMenu.hide(); 
	});

	$('.js-menu-box').click(function(event){
		event.stopPropagation();
   	});

	$menuLink.on('click', function(event) {
		let $subMenuItem = $(this).siblings('ul');
		let $displayStatus = $subMenuItem.css('display') == "none";
		let $subMenu = $('.js-sub-menu');
		$subMenu.hide();
		if ($displayStatus){
			$subMenuItem.toggle();
		}
	})
})