// Пошук усіх форм для коментування публікацій
const commentForms = document.querySelectorAll('.comment-form');

// Додавання події "submit" до кожної форми
commentForms.forEach(form => {
	form.addEventListener('submit', event => {
		event.preventDefault(); // Зупинка стандартної поведінки браузера при відправці форми

		// Отримання значення поля вводу
		const commentInput = form.querySelector('#comment');
		const commentText = commentInput.value.trim();

		// Перевірка наявності тексту коментаря
		if (commentText === '') {
			const error = document.createElement('div');
			error.classList.add('comment-form-error');
			error.textContent = 'Коментар не може бути порожнім!';
			form.appendChild(error);
			return;
		}

		// Створення нового елементу коментаря та додавання його до списку коментарів
		const commentList = form.parentNode.querySelector('.comment-list');
		const comment = document.createElement('li');
		comment.classList.add('comment');
		const commentInfo = document.createElement('div');
		commentInfo.classList.add('comment-info');
		commentInfo.textContent = 'Користувач:';
		const commentTextEl = document.createElement('div');
		commentTextEl.classList.add('comment-text');
		commentTextEl.textContent = commentText;
		const commentDate = document.createElement('div');
		commentDate.classList.add('comment-date');
		commentDate.textContent = new Date().toLocaleString();
		comment.appendChild(commentInfo);
		comment.appendChild(commentTextEl);
		comment.appendChild(commentDate);
		commentList.appendChild(comment);

		// Очищення поля вводу
		commentInput.value = '';
	});
});

// Пошук усіх кнопок "лайк"
const likeButtons = document.querySelectorAll('.like-button');

// Створення об'єкту для зберігання інформації про публікації, які сподобалися користувачеві
const likedPosts = {};

// Додавання події "click" до кожної кнопки "лайк"
likeButtons.forEach(button => {
	// Отримання заголовку публікації
	const postTitle = button.parentNode.querySelector('h3').textContent;
	
	button.addEventListener('click', () => {
		// Перевірка, чи публікація вже сподобалася користувачеві
		if (likedPosts[postTitle]) {
			// Якщо публікація сподобалася, видаляємо клас "liked" з кнопки та видаляємо запис про сподобання з об'єкту
			button.classList.remove('liked');
			delete likedPosts[postTitle];
		} else {
			// Якщо публікація не сподобалася, додаємо клас "liked" до кнопки та додаємо запис про сподобання в об'єкт
			button.classList.add('liked');
			likedPosts[postTitle] = true;
		}
		});
		});
