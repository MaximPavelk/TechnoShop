function openModal(title, description) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-description').innerText = description;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function searchFunction() {
    const filter = searchInput.value.toLowerCase().trim();
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "block" : "none";
    });
}

function openModal(title, description, imageUrl) {
  document.getElementById('modal-description').innerText = title;
  document.getElementById('modal-title').innerText = description;
  document.getElementById('modal-phone').innerText = description;
  document.getElementById('modal-image').src = imageUrl; 
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modal-image').src = '';
}

const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll(".item");

function searchFunction() {
    const filter = searchInput.value.toLowerCase().trim();
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "block" : "none";
    });
}
