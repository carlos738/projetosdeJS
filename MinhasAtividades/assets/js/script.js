/// Funciona sem o addEventListener

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    if (count < 10 ) {
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }

    if (count >= 0) CURRENT_NUMBER.style.color = 'blue';
}

function decrement() {
    if (count > -10 ) {
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }

    // if (count < 0) currentNumber.style.color = 'red';
    if (count < 0) CURRENT_NUMBER.style.color = 'red';
}

