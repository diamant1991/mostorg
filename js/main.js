function opcl(e){if("none"==$(e).css("display")){for(var i in mydivs)$(mydivs[i]).hide();$(e).show()}}var mydivs=new Array("#recommend-hits","#new","#sale","#map","#scheme");$(".tab-item").click(function(e){$(".tab-item").removeClass("active"),$(this).addClass("active")}),$(".contacts__tab li").click(function(e){$(".contacts__tab li").removeClass("active"),$(this).addClass("active")}),$(".vacancy__header").click(function(e){var i=$(this).next();i.is(":hidden")?($(".vacancy__header").removeClass("active"),$(".vacancy__content").slideUp(350),i.slideDown(350),$(this).addClass("active")):(i.slideUp(350),$(this).removeClass("active"))}),$(window).scroll(function(){$(this).scrollTop()>200?$(".up-button").fadeIn():$(".up-button").fadeOut()}),$(".up-button").click(function(){return $("body,html").animate({scrollTop:0},800),!1}),$(".mobile-catalog__btn").click(function(e){e.preventDefault();var i=$(this).next();i.is(":hidden")?i.slideDown(300):i.slideUp(300)}),window.matchMedia("(min-width: 992px)").matches&&$(".nav__menu li").hover(function(){$(this).prev().find(".nav__delimiter").hide()},function(){$(this).prev().find(".nav__delimiter").show()}),$(document).ready(function(){function e(){var e,i='<div class="asidedot"></div>',t=$(".center-content").innerHeight(),n=$(".sidebar-left").innerHeight();t>n&&(e=t-n,$(".sidebar-left").append(i),$(".asidedot").css("height",e-40+"px"))}e(),$(".tel-input").inputmask("+7 (999) 999-99-99"),$(".fancybox").fancybox({padding:0,openEffect:"elastic",closeEffect:"elastic",helpers:{overlay:{locked:!1}}})}),$(".slct").click(function(){var e=$(this).parent().find(".drop");return e.is(":hidden")?(e.slideDown(150),$(this).addClass("active"),$(".drop").find("li").click(function(){var i=$(this).html();$(this).parent().parent().find("input").val(i),$(this).parent().parent().find(".slct").removeClass("active").html(i),e.slideUp(150)})):($(this).removeClass("active"),e.slideUp(150)),!1}),$(document).mouseup(function(e){var i=$(".drop");0===i.has(e.target).length&&(i.slideUp(150),$(".slct").removeClass("active"))});