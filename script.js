window.onload = function () {

console.log('sanity check');
var count = 1;

var body = document.getElementsByTagName('body')[0];
var containerDiv = document.createElement('div');



body.appendChild(containerDiv);

for (var i = 1; i < 100; i++) {
	var div = document.createElement('div');
	div.style.width = '11.1%';
	div.style.height = '50px';
	div.style.paddingBoddom = '11.1%';
	div.style.display = 'inline-block';
	div.style.color = 'white';
	// div.innerText = `${count}`;
	div.style.float = 'left';


	// debugger
	if (i%2===1) {
		containerDiv.appendChild(div);
		div.style.backgroundColor = 'black';
		// div.innerText = `${count}`;
	}
	else {
		containerDiv.appendChild(div);
		div.style.backgroundColor = 'red';
		// div.innerText = `${count}`;
	}	
	count++;
}
















};