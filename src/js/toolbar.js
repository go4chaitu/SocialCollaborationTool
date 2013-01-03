	$(function() {
		$( "#objects" ).button({
			text: false,
			icons: {
				primary: "ui-icon-extlink"
			}
		});
		$( "#attachments" ).button({
			text: false,
			icons: {
				primary: "ui-icon-document"
			}
		});
		$( "#people" ).button({
			text: false,
			icons: {
				primary: "ui-icon-person"
			}
		})
		.click(function() {			
		});
		$( "#setDate" ).button({
			text: false,
			icons: {
				primary: "ui-icon-calendar"
			}
		})
		.click(function() {			
		});
		$( "#save" ).button({
			text: false,
			icons: {
				primary: "ui-icon-circle-plus"
			}
		}).click(function() {			
			if( !$("#box").hasClass("placeholder") )
			{				
				$("#savedComments").prepend("<div id=\"savedBox\" class=\"savedComment savedCommentMouseOut\" age=\"July 17, 2008\"> "+$("#box").text()+"</div>");
			    $( '.savedComment' ).click(function () 
						   { 
			    		       if ( $(this).hasClass("savedCommentMouseIn") )
			    		       {
			    		    	   $(this).addClass("savedCommentMouseOut",200);
			    		    	   $(this).removeClass("savedCommentMouseIn",200);
			    		       }
			    		       else
			    		       {
								   $(this).addClass("savedCommentMouseIn",500);	
								   $(this).removeClass("savedCommentMouseOut",200);			    		    	   
			    		       }

						   }).mouseout( function () 
						   {
							   if ( $(this).hasClass("savedCommentMouseIn") )
			    		       {
			    		    	   $(this).addClass("savedCommentMouseOut",200);
			    		    	   $(this).removeClass("savedCommentMouseIn",500);
			    		       }						   
						   });				
	            $( '.savedComment' ).timeago();
			    $("#box").html($("#box").data("placeholder"));           
	            $("#box").addClass("placeholder");  
				
			}			
		});
		$( "#delete" ).button({
			text: false,
			icons: {
				primary: "ui-icon-circle-close"
			}
		});
	});
