$(function() {
	$("#aContactUs").click(function () {
		OpenContactDialog();
	});
});

// Switches view between home and viewing a game.
function SwitchView(view){
	if (view == "home") {
		$("#divViewerWindow").hide();
		$("#divHomeWindow").show();
	}
	else if (view == "viewer") {
		$("#divHomeWindow").hide();
		$("#divViewerWindow").show();
	}
}

// Creates and opens the contact dialog.
function OpenContactDialog() {
    var contactDialog = $("#contactDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 430,
        height: 610,
        draggable: false,
        title: "Results",
        open: function () {
            appendTo("contactForm");
        },
        buttons: {
        	"Send": function () {
        		alert("not implemented yet");
        		contactDialog.dialog("close");
        	},
            "Close": function () {
                contactDialog.dialog("close");
            }
        }
    });

    contactDialog.dialog("open");
}