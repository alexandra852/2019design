 $(document).ready(function(){
         $(".main_box > ul > li").click(function(){
            var liNum = $(this).index();
            console.log( liNum );
            $(".main_box > ul > li").removeClass();
            $(this).addClass("active");
             });

});