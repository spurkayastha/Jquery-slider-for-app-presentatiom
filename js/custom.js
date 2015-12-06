$(document).ready(function() {

  // your jQuery code here...
    
    //FOR NUMBERED BUTTONS
    
$(".step").hide();
    
    $("#button1").click(function(){
//         $(".step").animate({left: '750px'});
        $(".step").hide();
        $("#step1").animate({left: '-950px'});
         $("#step1").show();
              $("#step1").animate({left: '0px'});
});
   
    
    
   $("#button2").click(function(){
//         $(".step").animate({left: '750px'});
        $(".step").hide();
        $("#step2").animate({right: '-950px'});
         $("#step2").show();
              $("#step2").animate({right: '0px'});
         
});
    
    
    
    
    $("#button3").click(function(){
//         $(".step").animate({left: '750px'});
        $(".step").hide();
        $("#step3").animate({left: '-950px'});
         $("#step3").show();
              $("#step3").animate({left: '0px'});
         
       
        
     });   
        
        
        $("#button4").click(function(){
        $(".step").hide();
        $("#step4").animate({right: '-950px'});
            $("#step4").show();
            $("#step4").animate({right: '0px'});
});
        
            $("#button5").click(function(){
        $("#step4").hide();
        $("#step5").animate({left: '-950px'});
            $("#step5").show();
            $("#step5").animate({left: '0px'});
});
    
 //FOR PREV NEXT BUTTONS   
  
//NEXT
    
    
  $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next").click(function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().fadeIn(800) .prev().fadeOut(800);
        else {
            $(".divs div:visible").fadeOut(800);
            $(".divs div:first").fadeIn(800);
        }
        return false;
    });
    
    
    
    
//PREV
    
$("#prev").click(function(){
 
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().fadeIn(800).next().fadeOut(800);
        else {
            $(".divs div:visible").fadeOut(800);
            $(".divs div:last").fadeIn(800);
        }
        return false;
    });
        
});
    
    
  