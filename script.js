menu.onclick = function myF() {
	var x = document.getElementById('MyTopNav')
	if (x.className === "top_nav"){
		x.className +=	" responsive";
	} else {
		x.className = "top_nav";
	}
}

