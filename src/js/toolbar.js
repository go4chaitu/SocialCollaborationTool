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
		});
		$( "#delete" ).button({
			text: false,
			icons: {
				primary: "ui-icon-circle-close"
			}
		});
	});
