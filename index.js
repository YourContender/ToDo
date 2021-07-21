const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

btn.addEventListener('click', (e) => {
    const value = input.value;

    input.value !== '' ? createAddElements(value) : null
    input.value = '';

})

function createAddElements(value) {
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.className = 'li__item';
    li.textContent = value;

    button.className = 'btn__item';
    button.textContent = '❌';

    li.appendChild(button);

    button.addEventListener('click', (e) => {
        createRemoveElement(li);
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li__click__active');
    })

    result.appendChild(li);
}

function createRemoveElement(current_li) {
    result.removeChild(current_li);
}
