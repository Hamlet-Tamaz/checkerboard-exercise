window.onload = function () {

console.log('sanity check');
var randN1 = Math.floor(Math.random() *250);
var randN2 = Math.floor(Math.random() *250);
var count = 1;

var body = document.getElementsByTagName('body')[0];
var containerDiv = document.createElement('div');


body.appendChild(containerDiv);

for (var i = 1; i < 100; i++) {
	var n1 = randN1;
	var n2 = randN2;

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
		div.style.backgroundColor = `rgb(${n1}, ${n1}, ${n1 + (i * 2)})`;
		containerDiv.appendChild(div);
		// div.innerText = `${count}`;
	}
	else {
		div.style.backgroundColor = `rgb(${n2}, ${n2}, ${n2 + (i * 2)})`;
		containerDiv.appendChild(div);
		// div.innerText = `${count}`;
	}	
	count++;
}
















};