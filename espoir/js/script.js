   $(document).ready(function(){
         $("#fullpage").fullpage({
         	anchors:["1st","2st","3st","4st","5st"],
            afterLoad:function(anchorslink,index){
            	if(index == 4){
            		$("#onView").addClass("move");
            	}else{
            		$("#onView").removeClass("move");
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
               $(".menuView").stop().animate({top:"-100%"},300)
             }
         });
   	});