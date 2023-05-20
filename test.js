var menuContainer = document.querySelector('.menu-container');

var newText = document.createElement('p');
newText.textContent = 'This is some additional text.';
newText.style.color = '#000';
newText.style.textAlign = 'center';

menuContainer.appendChild(newText);
