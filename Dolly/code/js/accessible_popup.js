var newWindow = null;

function closeWin(){
	if (newWindow != null){
		if(!newWindow.closed)
			newWindow.close();
	}
}

function popUpWin(url){
	closeWin();
	
	var tools= 'toolbar=no,location=no,scrollbars=no,menubar=no,width=740,height=470,top=140,left=20';

	newWindow = window.open(url, 'newWin', tools);
	newWindow.focus();
}
