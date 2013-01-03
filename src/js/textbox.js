$(document).ready(function(){    
     
    document.getElementById("box").contentEditable='true';
    $('#box').addClass("placeholder");
    
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
    $( '#container').layout();    
    $('#savedComments').accordion({ 
    	header: '.ui-accordion-header', 
    	event:'mouseover' 
    	});    
    /*$('.tagsNonEdit').openDOMWindow({ 
    	eventType:'click', 
    	loader:0, 
    	windowBGColor:'#aaa', 
    	loaderHeight:12, 
    	loaderWidth:12,
    	windowSourceID:'urlpath'
    	});*/ 
    $('.tagsNonEdit').popupWindow({ 
    	location:0,
    	menubar:1,
    	height:400, 
		width:400, 
		top:200, 
		left:400,		
		windowURL:"tags.html",
		windowName:"This is my popup window"
    });    
    
    if( $("#tags").text().length > 40 )
    {
    	$( "#tags" ).html( $("#tags").text().substring(0,40) + "...");
	}
    else
    {
    	$( "#tags" ).html( $("#tags").text() );
    } 
    
    $("#tags").mouseover(function () 
			   { 
		   $(this).addClass("tagsEdit");	
		   $(this).removeClass("tagsNonEdit");
		   $(".tagspopup").attr("href","#inlineContent");
	   }).mouseout(function(){
		   $(this).addClass("tagsNonEdit");
		   $(this).removeClass("tagsEdit");
		   if( $("#tags").text().length > 40 )
		    {
		    	$( "#tags" ).html( $("#tags").text().substring(0,40) + "...");
			}
		    else
		    {
		    	$( "#tags" ).html( $("#tags").text() );
		    } 		    
		});
    
    $("#tags").click(function ()
    		{
    			
    		});       

  });