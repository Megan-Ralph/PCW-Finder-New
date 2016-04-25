// Battlefield 3
// Created: 25/04/2016
// Created by: Simon
// Last Updated:
// Last Updated by:

$(function() {

	// Battlefield 3.
    $("#aBattlefield3").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=bf3%2Cesl.bf3%2Cbf3.wars");
		WriteTitles (
			"Battlefield 3 Channels",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High]",
			"e.g. 5v5 | off | low"
		);
	});	

});