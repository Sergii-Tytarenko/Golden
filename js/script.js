$(document).ready(function() {
	$('.burger').click(function(event){
		$('.burger,.nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.nav-link').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock')
     });
});