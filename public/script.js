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

async function fetchData() {

  try{
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemonName}');
    
    if (!response.ok){
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch(error){
    console.error(error);
  }
  
}