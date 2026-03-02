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