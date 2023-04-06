window.onload = function() {
	document.querySelector(".text").focus();
}

function copyText() {
	let text = document.querySelector(".text").innerText;
	navigator.clipboard.writeText(text);
	let copyMessage = document.querySelector(".copy-message");
	copyMessage.style.display = "block";
	setTimeout(function() {
		copyMessage.style.display = "none";
	}, 1000);
}

function checkCharCount() {
	let charCountInput = document.querySelector(".char-count-input");
	if (charCountInput.value != "") {
		let maxCharCount = parseInt(charCountInput.value);
		let text = document.querySelector(".text").innerText;
		let charCount = text.length;
		if (charCount > maxCharCount) {
			let charCountMessage = document.querySelector(".char-count-message");
			charCountMessage.style.display = "block";
		}
	}
}

function closeCharCountMessage() {
	let charCountMessage = document.querySelector(".char-count-message");
	charCountMessage.style.display = "none";
}
  
