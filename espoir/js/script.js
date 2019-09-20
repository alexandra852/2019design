   $(document).ready(function(){
         $("#fullpage").fullpage({
         	anchors:["1st","2st","3st","4st","5st","6st"],
            // menu:"#topMenu",
            navigation:true,
            slidesNavigation:true,
            navigationPosition:'right',
            navigationTooltips:["히트 아이템!","꾸띄르 벨벳","GIFT","BUY파데","뷰티테스트","in★"],
            afterRender: function () {
                 //on page load, start the slideshow
                  slideTimeout = setInterval(function () {

                         $.fn.fullpage.moveSlideRight();
                     }, 6000);
             },
            afterLoad:function(anchorslink,index){
            	if(index == 3){
            		$("#onView").addClass("move");
            	}else{
            		$("#onView").removeClass("move");
            	}
                 if(index == 3){
                    $(".main").addClass("move1");
                }else{
                    $(".main").removeClass("move1");
                }
            }
         });
         $(".toggleMenu").click(function(){
            var myClass = $(this).attr("class");
            console.log(myClass);
         if(myClass == "toggleMenu"){
            $(this).addClass("change");
            $(".menuView").stop().animate({top:0},300);
         }else{
               $(this).removeClass("change");
               $(".menuView").stop().animate({top:"-100%"},300);
             }
         });
         $("")


   	});