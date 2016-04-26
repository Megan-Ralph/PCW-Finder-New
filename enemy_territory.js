// Enemy Territory
// Created: 25/04/2016
// Created by: Simon
// Last Updated:
// Last Updated by:

$(function() {

	// 6v6.
    $("#aEt6v6").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=6on6.et");
		WriteTitles (
			"Enemy Territory - 6v6 Channels",
			""
		);
		WriteHelp (			
			"6 v 6 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 6v6 | Off | Medium | hs"
		);
	});	

	// 5v5.
    $("#aEt5v5").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=5on5.et");
		WriteTitles (
			"Enemy Territory - 5v5 Channels",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Off | Medium | hs"
		);
	});	

	// 4v4.
    $("#aEt4v4").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=4on4.et");
		WriteTitles (
			"Enemy Territory - 4v4 Channels",
			""
		);
		WriteHelp (			
			"4 v 4 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 4v4 | Off | Medium | hs"
		);
	});	

	// 3v3.
    $("#aEt3v3").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=3on3.et");
		WriteTitles (
			"Enemy Territory - 3v3 Channels",
			""
		);
		WriteHelp (			
			"3 v 3 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 3v3 | Off | Medium | hs"
		);
	});	

	// 2v2.
    $("#aEt2v2").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=2on2.et");
		WriteTitles (
			"Enemy Territory - 2v2 Channels",
			""
		);
		WriteHelp (			
			"2 v 2 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 2v2 | Off | Medium | hs"
		);
	});	

	// 1v1.
    $("#aEt1v1").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=1on1.et");
		WriteTitles (
			"Enemy Territory - 1v1 Channels",
			""
		);
		WriteHelp (			
			"1 v 1 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 1v1 | Off | Medium | hs"
		);
	});	
	
});