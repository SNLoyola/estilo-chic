document.querySelectorAll('.apply-promo').forEach(button => {
  button.addEventListener('click', function () {
    const popup = button.closest('.popup');
    const input = popup.querySelector('.promo-code');
    const discountText = popup.querySelector('.discount-display'); // Este lo agregamos abajo

    const code = input.value.trim().toLowerCase();
    let descuento = 0;

    if (code === "sale al 50%" || code === "sale50") {
      descuento = 50;
    } else if (code === "sale 20%" || code === "sale20") {
      descuento = 20;
    }

    if (descuento > 0) {
      discountText.innerHTML = `<strong>Descuento aplicado:</strong> ${descuento}% OFF 🎉`;
      discountText.style.color = "green";
    } else {
      discountText.innerHTML = `<strong>Código inválido</strong>`;
      discountText.style.color = "red";
    }
  });
});
