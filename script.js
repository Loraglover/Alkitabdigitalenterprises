document.queryselector(".hero button").addEventListener("click", function() {
	alert("Thank you for choosing ALKITAB DIGITAL ENTERPRISES!");
});

document.queryselectorAll("nav a").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();

document.queryselector(this.getAttribute("href")).scrollIntoView({
	behavior: "smooth"
});		
	});
});

const counters = document.queryselectorAll('.counter');
counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const speed = 50;
		const increment = target / speed;
		if (count < target) {
			counter.innerText = Math.ceil(count + increment);
			setTimeout(updateCount, 40);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});

function openImage(src){
	document.getElementById("lightbox").style.display = "flex";
	document.getElementById("lightbox-img").src = src;
}

function closeImage(){
	document.getElementById("lightbox").style.display = "none";
}