function move() {
	var game = document.getElementById("clickme");
	
	var set = Math.round(Math.random() * 100)+"%";
	game.style.top = set;
	console.log(set);
	set = Math.round(Math.random() * 100)+"%";
	game.style.left = set;
	console.log(set);
}

//document.getElementById("clickme").onclick = win(); 
var array = ["red", "orange", "yellow", "green", "cyan", "blue", "indigo", "violet", "red"]

function win() {
	document.getElementById("clickme").style.display = "none";
	setInterval(colorsetter2, 20);
}

//css-ben left: 0 -> left:100%
var constant = 0;
function colorsetter2() {
	var bg = document.getElementById("game");
	bg.style.background = "linear-gradient(to right, red, orange, yellow, green, cyan, blue, indigo, violet, red, orange, yellow, green, cyan, blue, indigo, violet, red)";
	bg.style.left = constant+"vw";
	constant--;
	if(constant==-101)
		constant=0;
}

function colorsetter() { //linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet, red)
	var dbsb = "linear-gradient(to right, ";
	
	for(var i = 0; i < array.length-1; i++)
		dbsb += array[i]+", ";
	dbsb += array[array.length-1]+")";
	constant++;
	
	document.body.style.background = dbsb;
}