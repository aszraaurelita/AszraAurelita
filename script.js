document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-guest-button');
    const guestInput = document.getElementById('guest-name-input');
    const guestList = document.getElementById('guest-list');

    addButton.addEventListener('click', function() {
        const name = guestInput.value.trim();
        if (name !== '') {
            addGuest(name);
            guestInput.value = '';
        }
    });

    function addGuest(name) {
        const li = document.createElement('li');
        li.textContent = name;

        const buttonContainer = document.createElement('div');

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Selesai';
        doneButton.addEventListener('click', function() {
            li.style.textDecoration = 'line-through';
            li.style.color = 'gray';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(buttonContainer);

        guestList.appendChild(li);
    }
});
