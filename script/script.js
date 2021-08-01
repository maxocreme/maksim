// JavaScript Document

function home(){
	document.getElementById("home").style.display = "block";
	document.getElementById("home").style.position = "relative";
	document.getElementById("gallery").style.display = "block";
	document.getElementById("gallery").style.position = "relative";
	document.getElementById("about").style.display = "block";
	document.getElementById("about").style.position = "relative";
}

function gallery(){
	
	document.getElementById("about").style.display = "none";
	document.getElementById("about").style.position = "absolute";

	document.getElementById("gallery").style.display = "block";
	document.getElementById("gallery").style.position = "relative";
}

function about(){
	document.getElementById("gallery").style.display = "none";
	document.getElementById("gallery").style.position = "absolute";
	document.getElementById("about").style.display = "block";
	document.getElementById("about").style.position = "relative";
	
}

function enlarge(path){
	if (document.getElementById("backDiv") == null){
		var back = document.createElement("div");
		back.id = "backDiv";
		document.body.appendChild(back);
	
		back.style.position = "fixed";
		back.style.textAlign = "center";
		back.style.width = "100%";
		back.style.height = "100%";
		back.style.zIndex = "20";
		back.style.backgroundColor = "rgb(000,000,000,0.9)";	
		
		var pict = document.createElement("img");
		
		pict.src = path;
		pict.style.display = "inline-block";
		pict.style.zIndex = "30";
		pict.style.height = "90vh";
		pict.style.marginTop = "2.5vw";
		pict.style.marginBottom = "2.5vw";
		pict.style.marginLeft = "auto";
		pict.style.marginRight = "auto";
		pict.style.borderStyle = "dashed";
		pict.style.borderWidth = "2px";
		pict.style.color = "white";
		
		pict.setAttribute("onclick", "enlarge()");
		document.getElementById("backDiv").appendChild(pict);
	} 
	else{
		document.getElementById("backDiv").remove();
	}
}