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

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
} */