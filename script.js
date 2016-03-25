window.onload = function () {

console.log('sanity check');
var count = 1;
var c1 = "rgb(randN(), randN(), randN())";
var c2 = "rgb(randN(), randN(), randN())";

var body = document.getElementsByTagName('body')[0];

var audio = new Audio('psy.mp3');
audio.play();


setInterval(function() {

	body.innerHTML = "";
	var containerDiv = document.createElement('div');
	body.appendChild(containerDiv);

	for (var i = 1; i < 100; i++) {
	var randN1 = Math.floor(Math.random() *250);
	var randN2 = Math.floor(Math.random() *250);
	var randN3 = Math.floor(Math.random() *250);
	
	var div = document.createElement('div');
	div.className = "grid";
	div.style.width = '11.1%';
	div.style.height = '50px';
	div.style.paddingBoddom = '11.1%';
	div.style.display = 'inline-block';
	div.style.color = 'white';
	div.style.float = 'left';
	// div.innerText = `${count}`;



	// debugger
	if (i%2===1) {
		div.style.backgroundColor = `rgb(${randN1}, ${randN2}, ${randN3})`;
		containerDiv.appendChild(div);
		// div.innerText = `${count}`;
	}
	else {
		div.style.backgroundColor = `rgb(${randN1}, ${randN2}, ${randN3})`;
		containerDiv.appendChild(div);
		// div.innerText = `${count}`;
	}	
	count++;
}}, 2000);
















};