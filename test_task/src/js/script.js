let select = function () {
	let indexPage = document.querySelector('.index-page');
	let select = document.getElementsByClassName('select');
	let selectHeader = document.getElementsByClassName('select__header');
	let selectItem = document.getElementsByClassName('select__item');
	let fragment = document.createDocumentFragment();
	let selectsBody = document.getElementsByClassName('select__body');

	for (let i = 1; i < 51; i++) {

		let selectItemHtml = document.createElement('div');
		selectItemHtml.classList.toggle('select__item');
		selectItemHtml.textContent = `${i}`;

		fragment.appendChild(selectItemHtml);
	};

	for (let select of selectsBody) {
		if (!select.hasChildNodes()) {
			let clnFragment = fragment.cloneNode(true);
			select.appendChild(clnFragment);
		} else {
			console.log('select clear');
		}
	};

	for (let item of selectHeader) {
		item.addEventListener('click', selectToggle);
	};

	for (let item of selectItem) {
		item.addEventListener('click', selectChoose);
	};

	function selectToggle () {
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