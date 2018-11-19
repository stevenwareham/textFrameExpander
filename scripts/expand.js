
function expandElement() {

	document.getElementById('expandingTextArea').addEventListener('input', function (event) {
	
	updateElementHeight(event.target);
		
	}, false);

	
	//Function to get the height of the content(plus padding & margins) and assign it to the field height attribute
	let updateElementHeight = function (field) {
		
		// Reset field height
		field.style.height = 'inherit';

		// Get the computed styles for the element
		const computedStyle = window.getComputedStyle(field);

		// Calculate the total height by combining field hieight with padding and border heights.
		let height = parseInt(computedStyle.getPropertyValue('border-top-width'), 10)
		             + parseInt(computedStyle.getPropertyValue('padding-top'), 10)
		             + field.scrollHeight
		             + parseInt(computedStyle.getPropertyValue('padding-bottom'), 10)
		             + parseInt(computedStyle.getPropertyValue('border-bottom-width'), 10);

		//Update the textarea height equal to the height of the content             
		field.style.height = height + 'px';
		    
	};
}

//We allow the user to define a new min and max of the textareas allowed expansion
function setverticalBounds() {

	let maxExpandingHeight = document.getElementById('expandingMax').value;
	let minExpandingHeight = document.getElementById('expandingMin').value;

	document.getElementById('expandingTextArea').setAttribute('style', 
							'max-height:' + maxExpandingHeight + 'em;' +
							'min-height:' + minExpandingHeight + 'em;'
							);

}

window.onload = function() {

	expandElement();
		
}