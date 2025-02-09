function searchDish() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const dishes = document.querySelectorAll(".dish-card");
  const dishesContainer = document.querySelector(".dishes");

  let found = false;

  dishes.forEach((dish) => {
    const dishName = dish.querySelector("h3").textContent.toLowerCase();

    if (dishName.includes(input)) {
      dish.style.display = "block"; // Показуємо знайдену картку
      found = true;
    } else {
      dish.style.display = "none"; // Ховаємо невідповідні картки
    }
  });

  // Якщо знайдено хоча б одну страву, центруємо контейнер
  if (found) {
    dishesContainer.style.justifyContent = "center";
  } else {
    dishesContainer.style.justifyContent = "flex-start"; // За замовчуванням
  }
}
