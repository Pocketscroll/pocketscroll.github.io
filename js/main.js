const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const stacks = document.querySelector("#stacks");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const stacksContent = document.querySelector("#stacks-content");

about.addEventListener("click", () => {
	const aboutBox = new WinBox({
		title: "About Me",
		// modal: true,
		width: "400px",
		height: "400px",
		top: 50,
		right: 50,
		bottom: 50,
		left: 50,
		mount: aboutContent,
		onfocus: function () {
			this.setBackground("#6e96c3");
		},
		onblur: function () {
			this.setBackground("#363431");
		},
	});
});

contact.addEventListener("click", () => {
	const contactBox = new WinBox({
		title: "Contact Me",
		width: "400px",
		height: "400px",
		top: 150,
		right: 50,
		bottom: 50,
		left: 250,
		mount: contactContent,
		onfocus: function () {
			this.setBackground("#6e96c3");
		},
		onblur: function () {
			this.setBackground("#363431");
		},
	});
});

stacks.addEventListener("click", () => {
	const stacksBox = new WinBox({
		title: "Stacks",
		width: "400px",
		height: "400px",
		top: 150,
		right: 50,
		bottom: 50,
		left: 250,
		mount: stacksContent,
		onfocus: function () {
			this.setBackground("#6e96c3");
		},
		onblur: function () {
			this.setBackground("#363431");
		},
	});
});
