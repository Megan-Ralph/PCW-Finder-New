$(function() {
    $("#aLogo").click(function () {
        SwitchView("home");
    });

    $("#aHome").click(function () {
        SwitchView("home");
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
