let items = [];

const itemsDiv = document.getElementById('items');
const input = document.getElementById('itemInput');
const storageKey = 'items';

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement('div');
        container.style.marginBottom = '10px';

        const text = document.createElement('p');
        text.style.display = 'inline';
        text.style.marginRight = '10px';
        text.textContent = item;

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function loadItems() {
    const oldItem = localStorage.getItem(storageKey);
    if (oldItem) items = JSON.parse(oldItem);
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert('You cannot add empty item.');
        return;
    }
    items.push(value);
    renderItems();
    input.value = '';
    saveItems();
}

document.addEventListener('DOMContentLoaded', loadItems);

// Add an event listener for the "Enter" key on the input field
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}
