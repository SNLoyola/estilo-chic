// === POPUP ===

// Abrir popup al hacer clic en botón .info
document.querySelectorAll('.info').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const popup = card.nextElementSibling; // Asume que el popup está justo después de .card

    if (popup && popup.classList.contains('popup')) {
      popup.classList.add('show'); // Usa clase para mostrar con animación si querés
      popup.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita scroll del body

      // Asegura que las imágenes dentro del popup funcionen
      const thumbnails = popup.querySelectorAll('.thumbnail');
      const mainImage = popup.querySelector('.main-img');

      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          const temp = mainImage.src;
          mainImage.src = thumbnail.src;
          thumbnail.src = temp;
        });
      });
    }
  });
});

// Cerrar popup con botón .close-btn
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-btn')) {
    const popup = e.target.closest('.popup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Cerrar al hacer clic fuera del contenido
  if (e.target.classList.contains('popup')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Mostrar el popup
function openPopup(popupElement) {
  popupElement.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 👈 bloquea el scroll
}

// Ocultar el popup
function closePopup(popupElement) {
  popupElement.style.display = 'none';
  document.body.style.overflow = 'auto'; // 👈 vuelve a activar el scroll
}
