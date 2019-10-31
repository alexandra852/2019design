$(document).ready(function(){
// menu
	$(".nav>ul>li").hover(
		function(){
			$(this).find(".submenu").show();
			$(this).find(".over").show();
			$(this).find(".out").hide();
		},function(){
			$(this).find(".submenu").hide();
			$(this).find(".over").hide();
			$(this).find(".out").show();

		});
// sldier1
	var mainstyle = $(".slider1").bxSlider({
		touchEnabled:false,
		controls:false,
		auto:true

	});
	$(".r").click(function(){
		mainstyle.goToNextSlide();
		return false;
	});
	$(".l").click(function(){
		mainstyle.goToPrevSlide();
		return false;
	});

// sldier2
	$(".slideList").children("div:gt(0)").hide();
	var current = 0;

	setInterval(function(){
	    var next = (current+1) % 3;
	    $(".slideList").find("div").eq(current).fadeOut();
	    $(".slideList").find("div").eq(next).fadeIn();
	    current = next;
	},4000);

	$(".slideList2").children("div:gt(0)").hide();
	var current1 = 0;
	setInterval(function(){
	    var next1 = (current1+1) % 3;
	    $(".slideList2").find("div").eq(current1).fadeOut();
	    $(".slideList2").find("div").eq(next1).fadeIn();
	    current1 = next1 ;
	},3000);

	$(".slideList3").children("div:gt(0)").hide();
	var current2 = 0;
	setInterval(function(){
	    var next2 = (current2+1) % 2;
	    $(".slideList3").find("div").eq(current2).fadeOut();
	    $(".slideList3").find("div").eq(next2).fadeIn();
	    current2 = next2;
	},2000);

	$(".slideList4").children("div:gt(0)").hide();
	var current3 = 0;
	setInterval(function(){
	    var next3 = (current3+1) % 2;
	    $(".slideList4").find("div").eq(current3).fadeOut();
	    $(".slideList4").find("div").eq(next3).fadeIn();
	    current3 = next3;
	},5000);
// icon
  	$(".icon").click(function(){
  		$(".icon1").hide();
  		$(".icon2").show();
	 });
  	$(".icon2").click(function(){
  		$(".icon1").show();
  		$(".icon2").hide();
  	});
});