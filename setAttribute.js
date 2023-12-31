// Create New Element
let newElement = document.createElement('input'); 

// Append the Element to the body of the document
document.body.appendChild(newElement);

// Set Attributes to the Element Created
newElement.setAttribute('id', 'myId');
newElement.setAttribute('class', 'myClass');
newElement.setAttribute('value', 'Type in a value');
newElement.setAttribute('type', 'text');

// Console The element
console.log(newElement);
