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