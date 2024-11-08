function AddItem() {
    const input = document.getElementById('inputNameItem');
    const itemName = input.value.trim();
    if (!itemName) {
        alert('Por favor, digite um item!');
        return;
    }

    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.textContent = itemName;

    const removeEmoji = document.createElement('span');
    removeEmoji.textContent = '🗑️'; 
    removeEmoji.style.cursor = 'pointer'; 
    removeEmoji.onclick = function() {
        list.removeChild(listItem);
        saveList();
    };

    listItem.appendChild(removeEmoji);
    list.appendChild(listItem);
    input.value = '';
    saveList();
}
