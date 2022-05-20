let searchbar = document.getElementById("search");
let searchable = document.getElementsByClassName("part");
let display = document.getElementById("searchResult");

let arrow = document.getElementById("searchResult").children[1];
let searchingOut = false;

arrow.addEventListener("click", function(){
	if (searchingOut == true) {
		searchingOut = false;
		display.style.top = "-250px";

		display.style.animationName = "searchHide";
		display.style.animationFillMode = "forward";
		display.style.animationDuration = "1s";
	}
	else{
		searchingOut = true;
		display.style.top = "50px";

		display.style.animationName = "searchReveal";
		display.style.animationFillMode = "forward";
		display.style.animationDuration = "1s";
	}
});

let found;

for (let i = 0; i < searchable.length; i++) {
	searchable[i].id = searchable[i].children[1].children[0].innerText;
}

searchbar.addEventListener("input", function () {
	let str = searchbar.value;

	str = str.toLowerCase()
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');

	console.log(str);
	found = undefined;

	for (let i = 0; i < searchable.length; i++) {
		let name = searchable[i].children[1].children[0].innerText;

		if (name.includes(str)) {
			found = searchable[i];
			console.log(name);
			display.children[0].innerText = searchable[i].children[1].children[0].innerText + " - " + searchable[i].children[1].children[1].innerText;
			break;
		}
	}
});