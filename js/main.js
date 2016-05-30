var mydivs = new Array('#recommend-hits','#new','#sale', '#map','#scheme');

function opcl(e){
  if ($(e).css('display') == 'none'){
      for(var i in mydivs){   
         $(mydivs[i]).hide();     
      }
      $(e).show();       
  }
}

$('.tab-item').click(function(e) {
	$('.tab-item').removeClass('active');
	$(this).addClass('active');
});

$('.contacts__tab li').click(function(e) {
	$('.contacts__tab li').removeClass('active');
	$(this).addClass('active');
});

$('.vacancy__header').click(function(e) {
	var content = $(this).next();
	if(content.is(':hidden')){
		$('.vacancy__header').removeClass('active');
		$('.vacancy__content').slideUp(350);
		content.slideDown(350);
		$(this).addClass('active');
	}
	else{
		content.slideUp(350);
		$(this).removeClass('active');
	}
});

$ (window).scroll (function () {
	if ($ (this).scrollTop () > 200) {
		$ ('.up-button').fadeIn();
	} 
	else {
		$ ('.up-button').fadeOut();
	}
});
 
$('.up-button').click(function(){
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

$('.mobile-catalog__btn').click(function(e) {
	e.preventDefault();
	var cat = $(this).next()
	if(cat.is(':hidden')){
		cat.slideDown(300)
	}
	else{
		cat.slideUp(300)
	}
});


if (window.matchMedia("(min-width: 992px)").matches){
	$('.nav__menu li').hover(function() {
		$(this).prev().find('.nav__delimiter').hide()
	}, function() {
		$(this).prev().find('.nav__delimiter').show()
	});
}


$(document).ready(function(){
	function createDot(){
		var resultheight;
		var asideDot = '<div class="asidedot"></div>';
		var centerHeight = $('.center-content').innerHeight(),
				sidebarHeight = $('.sidebar-left').innerHeight();
		if(centerHeight > sidebarHeight){
			resultheight = centerHeight - sidebarHeight;
			$('.sidebar-left').append(asideDot);
			$('.asidedot').css('height', (resultheight - 40) + 'px');
		}
	}
	createDot()
})

