const input = document.getElementById('ctaInput');
const button = document.getElementById('updateButton');
const title = document.querySelector('.hero h3'); // targets "Join Missions Across the Galaxy"

button.addEventListener('click', () => {
    const userInput = input.value;

    if (userInput.trim() !== "") {
        title.textContent = userInput;
        input.value = ""; // clears input after update
    }
});

