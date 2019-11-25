const input = document.querySelector('.input-field');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

// Helper function which converts HTML string to HTMLElement object
const htmlToElement = function(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

const handleAdd = function () {
    const inputVal = input.value; // get value of input field
    const htmlStr = `<div class="list-item">
                        <input type="checkbox" class="checkbox">
                        <span class="list-text">${inputVal}</span>
                        <img class="delete-icon" src="assets/close.svg" title="Remove item">
                    </div>`;
    const listItem = htmlToElement(htmlStr);
    list.appendChild(listItem);
    input.value = '';

    const checkbox = listItem.querySelector('.checkbox');
    const listText = listItem.querySelector('.list-text');
    const delIcon = listItem.querySelector('.delete-icon');
    
    // add checkbox changed handler
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        if (isChecked) {
            listText.classList.add('strikethrough');
        } else {
            listText.classList.remove('strikethrough');
        }
    });

    // add delete event handler
    delIcon.addEventListener('click', function () {
        listItem.remove();
    });
}

// Add button click event
addBtn.addEventListener('click', handleAdd);

// Add text input keyup handler
input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) { // Enter keyCode: 13
        handleAdd();
    }
});
