// Counter-Strike: Source
// Created: 25/04/2016
// Created by: Simon
// Last Updated:
// Last Updated by:

$(function() {

	// Creates common subtitle where only difference is player count.
	function CreateSubtitle(players){
		var subtitle = "The client will also join a number of general (not " + players + " specific) CS:S war finding channels, also good for finding games."
		return subtitle;
	}

	// 6v6.
	$("#aCsSource6v6").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cskilled.pcw%2C6on6.css");
		WriteTitles (
			"Counter-Strike: Source - 6v6 Channels",
			CreateSubtitle("6v6")
		);
		WriteHelp (			
			"6 v 6 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 6v6 | Server Off | Medium | de_dust2"
		);
	});	

	// 5v5.
    $("#aCsSource5v5").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cskilled.pcw%2C5on5.css");
		WriteTitles (
			"Counter-Strike: Source - 5v5 Channels",
			CreateSubtitle("5v5")
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

	// 4v4.
    $("#aCsSource4v4").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cskilled.pcw%2C4on4.css");
		WriteTitles (
			"Counter-Strike: Source - 4v4 Channels",
			CreateSubtitle("4v4")
		);
		WriteHelp (			
			"4 v 4 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 4v4 | Server Off | Medium | de_dust2"
		);
	});	

	// 3v3.
    $("#aCsSource3v3").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cskilled.pcw%2C3on3.css");
		WriteTitles (
			"Counter-Strike: Source - 3v3 Channels",
			CreateSubtitle("3v3")
		);
		WriteHelp (			
			"3 v 3 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 3v3 | Server Off | Medium | de_dust2"
		);
	});	

	// 2v2.
    $("#aCsSource2v2").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cskilled.pcw%2C2on2.css");
		WriteTitles (
			"Counter-Strike: Source - 2v2 Channels",
			CreateSubtitle("2v2")
		);
		WriteHelp (			
			"2 v 2 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 2v2 | Server Off | Medium | de_dust2"
		);
	});	

	// 1v1.
    $("#aCsSource1v1").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cskilled.pcw%2C1on1.css");
		WriteTitles (
			"Counter-Strike: Source - 1v1 Channels",
			CreateSubtitle("1v1")
		);
		WriteHelp (			
			"1 v 1 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 1v1 | Server Off | Medium | de_dust2"
		);
	});	

	// Ringer.
	$("#aCsSourceRinger").click(function () {
		SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=ringer");
		WriteTitles (
			"Counter-Strike - Ringer (CS:GO, CS:Source, CS:1.6)",
			"The client will join a ringer channel that is used for all Counter-Strike games."
		);
		WriteHelp (
			"Either wait for someone to advertise they are looking for a ringer or use the following line format to find games:",
			"Free to ringer on CS 1.6 / CS:S / CS:GO / /w me!"
		);
	});	

	// Finland.
    $("#aCsSourceFinland").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cfinland.css");
		WriteTitles (
			"Counter-Strike: Source - Finland Channel",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

	// Norway.
    $("#aCsSourceNorway").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Cnorge.css");
		WriteTitles (
			"Counter-Strike: Source - Norway Channel",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

	// Sweden.
    $("#aCsSourceSweden").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=s.pcw%2Ccss.europe%2Ccss.invite%2Csweden.css");
		WriteTitles (
			"Counter-Strike: Source - Sweden Channel",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

});