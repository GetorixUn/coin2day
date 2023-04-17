// Отримуємо список елементів меню та додаємо обробник подій на клік
var menuItems = document.querySelectorAll('nav ul li a');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function(event) {
    // Забороняємо стандартну поведінку при кліку на посилання
    event.preventDefault();

    // Отримуємо адресу посилання та перенаправляємо користувача на відповідну сторінку
    var href = this.getAttribute('href');
    window.location.href = href;
  });
}
function loadDoc() {
    var xhttp = new XMLHttpRequest(); // створюємо новий об'єкт XMLHttpRequest
    xhttp.onreadystatechange = function() { // функція, яка виконається при отриманні відповіді від сервера
        if (this.readyState == 4 && this.status == 200) { // перевірка на успішне виконання запиту
            document.getElementById("demo").innerHTML = this.responseText; // відображаємо отримані дані на сторінці
        }
    };
    xhttp.open("GET", "ajax_example.txt", true); // відкриваємо з'єднання з сервером
    xhttp.send(); // відправляємо запит
}
