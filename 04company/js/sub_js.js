 $(document).ready(function(){
         $(".main_box > ul > li").click(function(){
            var liNum = $(this).index();
            console.log( liNum );
            $(".main_box > ul > li").removeClass();
            $(this).addClass("active");
             });
         $(".sub_box > ul >li ").click(function(){
         	var i = $(this).index();
         	console.log(i);
         	$(".sub_box > ul >li ").removeClass();
         	$(this).addClass("on1");
            $(".sub02_content_wrap > div").hide();
            $(".sub02_content_wrap > div").eq(i).fadeIn();
            return false;
         });
         $(".toggleMenu").click(function(){
            var myClass = $(this).attr("class");
            console.log(myClass);
         if(myClass == "toggleMenu"){
            $(this).addClass("change");
            $(".menuView").stop().animate({top:0},300);
         }else{
               $(this).removeClass("change");
               $(".menuView").stop().animate({top:"-100%"},300)
             }
         });

});
 