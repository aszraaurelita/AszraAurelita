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

    const query = 'nature'; 
    const perPage = 9;
    fetch(`https://api.pexels.com/v1/search?query=nature&per_page=9`, {
      headers: {
        Authorization: 'MiNw1TyIq7MPE48Se63ayIQriqhPr6L9mVduU6eyz8s10YpamyVEo4QQi'
      }
    })
      .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById('photo-gallery');
    data.photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.src.medium;
      img.alt = photo.photographer;
      gallery.appendChild(img);
    });
  })
  .catch(err => {
    console.error('Gagal mengambil foto dari Pexels:', err);
  });

