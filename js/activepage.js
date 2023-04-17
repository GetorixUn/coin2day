// Отримуємо всі елементи меню
const menuItems = document.querySelectorAll('.menu li');

// Циклом перебираємо всі елементи меню
for (let i = 0; i < menuItems.length; i++) {
  // Додаємо обробник подій на кожен елемент меню
  menuItems[i].addEventListener('click', function() {
    // Видаляємо клас .active у всіх елементів меню
    for (let j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove('active');
    }
    // Додаємо клас .active для поточного елемента меню
    this.classList.add('active');
  });
}
