var observer = new IntersectionObserver(function (entries) {
	if (entries[0].isIntersecting === true) {
		for (let index = 0; index < entries.length; index++) {
			entries[index].target.style.animation = "reveal 0.2s linear";
			entries[index].target.style.animationFillMode = "forwards";
		}
	}

}, { threshold: [0.2] });

const parts = document.getElementsByClassName("part")

for (let i = 0; i < parts.length; i++) {
	observer.observe(parts[i]);
}