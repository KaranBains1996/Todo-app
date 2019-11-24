const input = document.querySelector('.input-field');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

const handleAdd = function () {
    const inputVal = input.value; // get value of input field
    const listItem = document.createElement('div');
    listItem.innerHTML = inputVal;
    list.appendChild(listItem);
    input.value = '';

    // add delete event handler
    listItem.addEventListener('click', function () {
        this.remove();
    });
}

// Add event handler
addBtn.addEventListener('click', handleAdd);
input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        handleAdd();
    }
});
