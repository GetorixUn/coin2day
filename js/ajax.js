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
