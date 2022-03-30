function loginValidation() {
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	if (((username == "kenneth") && (pwd == "200116417"))
			|| ((username == "kelvin") && (pwd == "200423362"))) {
		alert("Login successfully. Welcome, " + username + "!");
		return true;
	} else if ((username == "hklee") && (pwd == "cmuser")) {
		alert("Login successfully as superuser. Welcome, " + username + "!");
		return true;
	} else if ((username == "guest") && (pwd == "guest")) {
		alert("Login successfully as guest. Welcome!");
	} else {
		alert("Login failed. Please try again.");
		return false;
	}
}
function MM_preloadImages() {
	if (document.images) {
		if (!document.MM_p){
			document.MM_p = new Array();
		}
    	var i, j = document.MM_p.length, a = MM_preloadImages.arguments;
    	for (i = 0; i < a.length; i++) {
    		if (a[i].indexOf("#") != 0) {
    			document.MM_p[j] = new Image;
	    		document.MM_p[j++].src = a[i];
    		}
    	}
    }
}
function MM_swapImgRestore() {
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) {
  		x.src = x.oSrc;
  	}
}
function MM_findObj(n, d) {
	var p, i, x;
	if (!d) {
		d = document;
	}
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    	d = parent.frames[n.substring(p + 1)].document;
    	n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) {
    	x = d.all[n];
    }
    for (i = 0; !x && i < d.forms.length; i++) {
    	x = d.forms[i][n];
    }
    for (i = 0; !x && d.layers && i < d.layers.length; i++) {
    	x = MM_findObj(n, d.layers[i].document);
    }
  	if (!x && d.getElementById) {
  		x = d.getElementById(n);
  	}
  	return x;
}
function MM_swapImage() {
	var i, j = 0, x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for(i = 0; i < a.length - 2; i += 3) {
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc) {
				x.oSrc = x.src;
			}
			x.src = a[i + 2];
		}
	}
}
/* ---deprecated---
function submitSignUpForm() {
	var name = document.getElementById("name").value;
	if (name == "kenneth" || name == "kelvin" || name == "hklee") {
		alert("You are already a member of our fanclub.");
		return false;
	} else if (name == "guest") {
		alert("Invalid name.");
		return false;
	} else {
		alert("Registration submitted. OwOb");
		return true;
	}
}
---deprecated--- */
function submitSignUpForm() {
	alert("Thanks for signing up! d(`･∀･)b");
	document.getElementById("signup-form").reset();
}
function submitRating() {
	alert("Thanks for rating! d(`･∀･)b");
	document.getElementById("rating-form").reset();
}
function cursorAnimation() {
	var cursor = document.querySelector(".cursor");
	var cursor2 = document.querySelector(".cursor2");
	document.addEventListener("mousemove", function(x) {
		cursor.style.cssText = cursor2.style.cssText = "left: " + x.clientX + "px; top: " + x.clientY + "px;";
	}
	);
}