document.addEventListener('DOMContentLoaded', () => {
    const mainHeading = document.getElementById('main-heading');
    const infoParagraph = document.getElementById('info-paragraph');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const contentArea = document.getElementById('content-area');

    changeTextBtn.addEventListener('click', () => {
        mainHeading.textContent = 'Text Changed!';
        infoParagraph.textContent = 'Surprise surprise. I bet you did not expect that';
    });

    changeStyleBtn.addEventListener('click', () => {
        infoParagraph.style.color = 'darkred';
        infoParagraph.style.fontWeight = 'bold';
        infoParagraph.style.fontSize = '1.1em';
    });

    addElementBtn.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'Abracadabra!!!!';
        newElement.classList.add('added-element', 'text-purple-700', 'mt-2', 'text-center');
        contentArea.appendChild(newElement);
    });

    removeElementBtn.addEventListener('click', () => {
        const addedElement = contentArea.querySelector('.added-element');
        if (addedElement) {
            contentArea.removeChild(addedElement);
        } else {
            alert('No element to remove!');
        }
    });
});

