var volt = false;

function loadMe() {
  if(!volt) {
	document.getElementById("myModal").style.display = "block";
	volt=true;
  }
}

// When the user clicks on <span> (x), close the modal
var lep=0;
function closeMe() {
  var karray = ["Egészen biztos ebben?", "Biztos hogy 100 százalék?"];
  var varray = ["Persze", "Hmm...", "101%", "Nem biztos"]
  kerdes = document.getElementById("kerdes");
  yes = document.getElementById("yes");
  no = document.getElementById("no");
  
  if(lep < karray.length) {
	kerdes.innerHTML = karray[lep];
	yes.innerHTML = varray[lep*2];
	no.innerHTML = varray[(lep*2)+1];
  }
  lep++;
  if(lep==karray.length+1)
	document.getElementById("myModal").style.display = "none";
}

function answerisno() {
	loadDoc();
}


function loadDoc() {
	var xhttp = new XMLHttpRequest(); //új xmlhttprequest objektum létrehozása   
	xhttp.onreadystatechange = function() { 
		if (this.readyState == 4 && this.status == 200) {
			help(this);  
		}   
	}; 
 xhttp.open("GET", "games.xml", true); 
 xhttp.send(); 
} 

function help(xml) {
  var xmlDoc = xml.responseXML;
  var table="<div class='modal-content' id='mc'>";
  table += "<h2>Hát szóval mivel fiatal vagy, itt van néhány játék:</h2>"
  table += "<table class='list'><tr><th>Name</th><th>Type</th><th>Link</th></tr>";
  var x = xmlDoc.getElementsByTagName("GAME");
  for (var i = 0; i < x.length; i++) { 
    table += "<tr><td>" +
	x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "</td><td>" +
	x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue +
    "</td><td><a target='blank' href='" +
    x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue +
    "'>Link</a></td></tr>";
  }
  table += "</table></div>"
  document.getElementById("myModal").innerHTML = table;
  var mc = document.getElementById("mc");
  mc.style.lineHeight = "20px";
  mc.style.fontFamily = "Corbel";
  document.getElementById("myModal").innerHTML = table;
}