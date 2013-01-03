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
				$("#savedComments").prepend("<div id=\"savedBox\" class=\"savedComment savedCommentMouseOut\"><div class=\"img\"><a target=\"_blank\" href=\"user.html\"><img src=\"../images/userImg.png\" alt=\"User\" width=\"30\" height=\"30\"></a><div class=\"desc\">Chaitu</div> <span class=\"content\">"+$("#box").text()+"</span><span class='date'>"+jQuery.timeago( "2013-01-03T22:00:19+0000" )+"</span></div>");
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
	            $( '.savedComment' ).timeago($(this).attr("age"));
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
