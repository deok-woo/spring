
var dialogOpened = new Array();
//modallayerpopup by dialog
function dialogOpen(className){
	var openEle = $("#"+className);
	if (dialogOpened[className] == undefined) {
		openEle.dialog({
			resizable: false,
			draggable: false, 
			closeText: "닫기",
			width: "auto",
			modal:true
		});
		dialogOpened[className] = true;
	}
	else {
		openEle.dialog('open');
	}
	return false;
}

function dialogClose(className){
	var closeEle = $("#"+className);
	closeEle.dialog( "close" );
}