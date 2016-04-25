// Writes subtitle.
function WriteTitles(title, subtitle){
	$("#viewerTitle").text(title);
	$("#viewerSubTitle").html(subtitle);
}

// Writes iframe into viewer placeholder.
function WriteViewer(url){
	$('#divViewer').html('<iframe src="' + url + '" frameborder="0" scrolling="no" width="600" height="400"></iframe>');
} 

// Write the help text.
function WriteHelp(helpline, example){
	$("#divHelpExplanation").text(helpline);
	$("#divHelpExample").text(example);
}