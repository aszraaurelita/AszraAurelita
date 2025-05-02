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

           const API_KEY = "iNw1TyIq7MPE48Se63ayIQriqhPr6L9mVduU6eyz8s10YpamyVEo4QQi"; 

            async function ambilGambarDariPexels(query = "nature") {
              try {
                  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=5`, {
                      headers: {
                          Authorization: API_KEY
                      }
                  });
          
                  const data = await response.json();
          
                  const container = document.getElementById("hasilAPI");
                  container.innerHTML = ""; // Kosongkan sebelum menampilkan
          
                  data.photos.forEach(photo => {
                      const img = document.createElement("img");
                      img.src = photo.src.medium;
                      img.alt = photo.photographer;
                      img.style.margin = "10px";
                      img.style.width = "200px";
                      img.style.borderRadius = "10px";
                      container.appendChild(img);
                  });
          
              } catch (error) {
                  console.error("Gagal mengambil gambar:", error);
              }
              
          }
          document.addEventListener("DOMContentLoaded", function () {
            ambilGambarDariPexels(); // ← Pastikan ini ada
        });
        