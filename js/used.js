//Favi
function setFavi(s) {
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = 'img/favi/'+s+'.ico';
	document.getElementsByTagName('head')[0].appendChild(link);
}

F_alt = ['temp','temp2']
F_num = 0
function faviFlip() {
	F_num = (F_num+1)%2
	setFavi(F_alt[F_num]);
}

setInterval(faviFlip, 1000);
//

//Get it
function GetElmntInCon(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}
//

//Illegal Iframage
function rsif(obj) {

}
//

//Every day I'm toggling
function C_Tog(obj, str) {
	var cls = obj.parentElement.querySelector('div');
	
	var boo = (cls.style.display === "none");
	
	if (boo) {
		cls.style = 'display: block;';
		obj.n ='a'
		obj.innerHTML = 'Close '+str;
	} else {
		cls.style.display = 'none';
		obj.innerHTML = 'Open '+str;
	}
	
	return boo;
}
//Frame toggle
function C_TogFrm(obj, str) {
	var frm = obj.parentElement.querySelector('div').querySelector('iframe');
	var set = obj.link
	console.log(obj.link);
	var b = C_Tog(obj, str);
	
	if (b) {
		frm.src = set;
	} else {
		frm.src = '';
	}
}




