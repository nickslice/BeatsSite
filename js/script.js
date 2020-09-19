
$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
		});
	}
ibg();

$(document).ready(function() {
	$('.block__title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});