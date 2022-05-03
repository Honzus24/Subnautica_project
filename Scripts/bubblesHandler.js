let pointerX;
let pointerY;

let isInBubbles = false;

let bubbleContainer = document.getElementById("bubbles");

bubbleContainer.addEventListener('mouseenter', e => {
	isInBubbles = true;
});

bubbleContainer.addEventListener('mouseleave', e => {
	isInBubbles = false;
});

let bubbles = document.getElementsByClassName("bubble");

setInterval(function bubbleCheck()
{
	if(isInBubbles == true)
	{
		for (const bubble in bubbles) {
			
		}
	}
},50);