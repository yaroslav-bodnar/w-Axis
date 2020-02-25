let select = function () {
	let indexPage = document.querySelector('.index-page');
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose);
	});

	function selectToggle () {
		
		for (let i = 1; i < 50; i++) {

			let selectBody = document.querySelectorAll('.select__body');
			let selectItemHtml = `<div class="select__item">${i}</div>`;

			selectBody.innerHTML = selectItemHtml;
		};

		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose() {
		let text = this.innerText,
			select = this.closest('.select'),
			currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('is-active');
	}

};

select();