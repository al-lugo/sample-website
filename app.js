window.onload = init;

function init() {
	document.getElementById("signup").onsubmit = function newsletter(e) {
		// console.log("newsletter subscription requested by user");
		e.preventDefault();
	};
}
