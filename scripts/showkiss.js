$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 13729) {
            $("#recording").hide();
        } else {
           (scrollPosition > 13730)
           $("#recording").fadeIn();
        } 
        
    });
    
});