$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 4850) {
            $("#theVideo").hide();
        } else {
           (scrollPosition)
           $("#theVideo").fadeIn();
        } 
        
    });
    
});