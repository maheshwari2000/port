var i = 0; /* The text */
var j=0;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	var txt = document.getElementById("tt").textContent;	
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typingj(){
	var txtj = document.getElementById("pJH").textContent;
	if (j<txtj.length) {
		document.getElementById("jshow").innerHTML+=txtj.charAt(j);
		j++;
		setTimeout(typingj, speed);
	}
}
function disableButton(){
	document.getElementById("hide").style.visibility = 'hidden';
}
function disableJButton(){
	document.getElementById("hidej").style.visibility = 'hidden';
}