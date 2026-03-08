const input = document.getElementById('input');
const button = document.getElementById('button');
const title = document.getElementById('title'); 

button.addEventListener('click', () => {
    const userInput = input.value;
    title.textContent = userInput;
});

    