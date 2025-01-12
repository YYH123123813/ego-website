const button = document.getElementById('changeText');

button.addEventListener('click', () => {
    alert('Button Clicked!');
    button.innerText = 'You clicked me!';
});
