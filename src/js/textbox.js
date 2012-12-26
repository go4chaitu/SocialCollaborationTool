$(document).ready(function(){    
     
    document.getElementById("box").contentEditable='true';
    $('#box').click(function(){
    	if ($(this).hasClass("placeholder"))                
    	{      		          
        	$(this).removeClass("placeholder");  
	       	$(this).html("");    	       	
    	}  
    });  
    $('#box').blur(function(){
    	if($(this).text()=="")
        {
            $(this).html($(this).data("placeholder"));           
            $(this).addClass("placeholder");              
        } 
    });  
    if($("#box").text().length == 0)
    {
            $("#box").html($("#box").data("placeholder"));           
            $("#box").addClass("placeholder");            
    } 
    
    $( "#circle" ).draggable();    
    $('#container').layout();

  });