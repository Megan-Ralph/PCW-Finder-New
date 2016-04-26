// Counter-Strike: 1.6
// Created: 25/04/2016
// Created by: Simon
// Last Updated:
// Last Updated by:

$(function() {

	// Creates common subtitle where only difference is player count.
	function CreateSubtitle(players){
		var subtitle = "The client will also join a number of general (not " + players + " specific) CS 1.6 war finding channels, also good for finding games."
		return subtitle;
	}

	// 5v5.
    $("#aCs5v5").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw%2Cpraccnation%2Cpracc%2C5on5");
		WriteTitles (
			"Counter-Strike: 1.6 - 5v5 Channels",
			CreateSubtitle("5v5")
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

	// 4v4.
    $("#aCs4v4").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw%2Cpraccnation%2Cpracc%2C4on4");
		WriteTitles (
			"Counter-Strike: 1.6 - 4v4 Channels",
			CreateSubtitle("4v4")
		);
		WriteHelp (			
			"4 v 4 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 4v4 | Server Off | Medium | de_dust2"
		);
	});	

	// 3v3
    $("#aCs3v3").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw%2Cpraccnation%2Cpracc%2C3on3");
		WriteTitles (
			"Counter-Strike: 1.6 - 3v3 Channels",
			CreateSubtitle("3v3")
		);
		WriteHelp (			
			"3 v 3 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 3v3 | Server Off | Medium | de_dust2"
		);
	});	

	// 2v2
    $("#aCs2v2").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw%2Cpraccnation%2Cpracc%2C2on2");
		WriteTitles (
			"Counter-Strike: 1.6 - 2v2 Channels",
			CreateSubtitle("2v2")
		);
		WriteHelp (			
			"2 v 2 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 2v2 | Server Off | Medium | de_dust2"
		);
	});	

	// Ringer.
	$("#aCsRinger").click(function () {
		SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=ringer");
		WriteTitles (
			"Counter-Strike - Ringer (CS:GO, CS:Source, CS:1.6)",
			"The client will join a ringer channel that is used for all Counter-Strike games."
		);
		WriteHelp (
			"Either wait for someone to advertise they are looking for a ringer or use the following line format to find games:",
			"Free to ringer on CS 1.6 / CS:S / CS:GO / /w me!"
		);
	});	

	// 5v5 Germany.
    $("#aCsGerman").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=5on5.de");
		WriteTitles (
			"Counter-Strike: 1.6 - 5v5 German Channel",
			CreateSubtitle("5v5")
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

});