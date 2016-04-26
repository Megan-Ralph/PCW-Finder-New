// Call of Duty
// Created: 25/04/2016
// Created by: Simon
// Last Updated:
// Last Updated by:

$(function() {

	// Cod 2.
    $("#aCod2").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=cod2.wars%2Ccod.pracc");
		WriteTitles (
			"Call of Duty 2 Channels",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] or Rank[XXXX]",
			"e.g. 5v5 | off | 1450+"
		);
	});	

	// Cod 4 (MW)
	$("#aCod4").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=cod4.wars%2Ccod.pracc");
		WriteTitles (
			"Call of Duty 4: Modern Warfare Channels",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] or Rank[XXXX]",
			"e.g. 5v5 | off | 1450+"
		);
	});	

	// Cod 8 (MW3)
	$("#aCod8").click(function () {
    	SwitchView("viewer");
		WriteViewer("https://webchat.quakenet.org/?nick=PCWFinderCom...&channels=cod4.wars%2Ccod.pracc");
		WriteTitles (
			"Call of Duty Modern Warfare 3 Channels",
			""
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] or Rank[XXXX]",
			"e.g. 5v5 | off | 1450+"
		);
	});	

});