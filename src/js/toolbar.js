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
				/*$("#savedComments").prepend("<div id=\"savedBox\" class=\"savedComment savedCommentMouseOut\">"+$("#box").text()+"</div>");
			    $( '.savedComment' ).mouseover(function () 
						   { 
							   $(this).addClass("savedCommentMouseIn");	
							   $(this).removeClass("savedCommentMouseOut");
						   }).mouseout(function(){
							   $(this).addClass("savedCommentMouseOut");
							   $(this).removeClass("savedCommentMouseIn");
							});*/
				$("#savedComments").prepend("<div class=\"ui-accordion-group\"><div class=\"ui-accordion-header\"><a href=\"#\">panel 1</a></div><div class=\"ui-accordion-content\" style=\"height: 100px;\"><div style=\"padding:10px;\">My Contents</div></div></div>");
				$("#savedComments").accordion({ 
			    	header: '.ui-accordion-header', 
			    	event:'mouseover' 
			    	}); 
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
