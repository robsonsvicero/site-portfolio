class FormSubmit {
	constructor(settings) {
		this.settings = settings;
		this.form = document.querySelector(settings.form);
		this.formButton = document.querySelector(settings.button);
		if (this.form) {
			this.url = this.form.getAttribute("action") || "";
		}
		this.sendForm = this.sendForm.bind(this);
	}

	// Exibe um pop-up temporário para mensagens
	showPopupMessage(message, className) {
		const popup = document.createElement("div");
		popup.classList.add("popup-message", className);
		popup.innerText = message;
		document.body.appendChild(popup);

		// Remove o pop-up automaticamente após 5 segundos
		setTimeout(() => {
			popup.remove();
		}, 3000);
	}

	// Limpa os campos do formulário após o envio
	clearFormFields() {
		this.form.querySelectorAll("[name]").forEach((field) => {
			field.value = "";
		});
	}

	// Obtém os valores do formulário e verifica se todos os campos obrigatórios foram preenchidos
	getFormObject() {
		const formObject = {};
		let isValid = true;

		const fields = this.form.querySelectorAll("[name]");
		fields.forEach((field) => {
			const fieldName = field.name;
			const fieldValue = field.value.trim();
			formObject[fieldName] = fieldValue;

			// Se o campo for obrigatório e estiver vazio, marca como inválido
			if (field.hasAttribute("required") && !fieldValue) {
				isValid = false;
				field.classList.add("error-border"); // Adiciona uma borda vermelha para indicar erro
			} else {
				field.classList.remove("error-border"); // Remove a borda vermelha se o campo for preenchido
			}
		});

		return isValid ? formObject : null;
	}

	onSubmission(event) {
		event.preventDefault();
		const button = event.target;
		button.disabled = true;
		button.innerText = "Enviando...";
	}

	async sendForm(event) {
		if (!this.url) {
			console.error("Atributo 'action' não definido no formulário.");
			return;
		}

		const formData = this.getFormObject();
		if (!formData) {
			this.showPopupMessage("Preencha todos os campos obrigatórios!", "error");
			return;
		}

		try {
			this.onSubmission(event);
			const response = await fetch(this.url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error("Erro ao enviar formulário");

			// Exibe pop-up de sucesso e limpa os campos do formulário
			this.showPopupMessage(this.settings.success, "success");
			this.clearFormFields();
		} catch (error) {
			this.showPopupMessage(this.settings.error, "error");
			console.error(error);
		} finally {
			// Reativar botão após envio
			const button = event.target;
			button.disabled = false;
			button.innerText = "Enviar";
		}
	}

	init() {
		if (this.form && this.formButton) {
			this.formButton.addEventListener("click", this.sendForm);
		} else {
			console.warn("Formulário ou botão não encontrado.");
		}
		return this;
	}
}

// Inicializa o formulário com mensagens de sucesso e erro personalizadas
const formSubmit = new FormSubmit({
	form: "[data-form]",
	button: "[data-button]",
	success: "Mensagem enviada com sucesso!",
	error: "Não foi possível enviar sua mensagem.",
});
formSubmit.init();