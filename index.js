const logo = document.querySelectorAll('#logo path:nth-child(n)');

for(let i = 0; i <= logo.length; i++){
	console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}