// Dota 2
// Created: 25/04/2016
// Created by: Simon
// Last Updated:
// Last Updated by:

$(function() {

	// Dota 2 Wars.
    $("#aDota2").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=dota2%2Cdota2.cw");
		WriteTitles (
			"Dota 2 Channels",
			""
		);
		WriteHelp (			
			"[in #dota2.cw] !s [x]v[x] | [eu/us] | skill level [Low/Med/High]",
			"e.g. !s 5v5 | eu | low <br> To search for games in #dota.cw use !cw command"
		);
	});	

	// Dota 2 Sweden.
    $("#aDota2Sweden").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=dota2.swe");
		WriteTitles (
			"Dota 2 - Sweden Channel",
			""
		);
		WriteHelp (			
			"[x]v[x] | [eu/us] | skill level [Low/Med/High]",
			"e.g. 5v5 | eu | med"
		);
	});	

	// Dota 2 Finland.
    $("#aDota2Finland").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=dota2.fi");
		WriteTitles (
			"Dota 2 - Finland Channel",
			""
		);
		WriteHelp (			
			"[x]v[x] | [eu/us] | skill level [Low/Med/High]",
			"e.g. 5v5 | eu | med"
		);
	});	

	// Dota 2 Norway.
    $("#aDota2Norway").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=dota2.no");
		WriteTitles (
			"Dota 2 - Norway Channel",
			""
		);
		WriteHelp (			
			"[x]v[x] | [eu/us] | skill level [Low/Med/High]",
			"e.g. 5v5 | eu | med"
		);
	});	


	

});