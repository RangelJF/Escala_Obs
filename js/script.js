document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("availabilityForm");
    const successMessage = document.getElementById("successMessage");
    const alertBox = document.getElementById("alertBox");
    const loadingMessage = document.getElementById("loadingMessage");
    const cryingMessage = document.getElementById("cryingMessage");
    const closeButton = document.getElementById("closeButton");
    const unavailableCheckbox = document.getElementById("unavailable");
    const daysContainer = document.getElementById("daysContainer");

    if (!form) {
        console.error("Erro: Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe a mensagem de carregamento
        loadingMessage.style.display = "block";

        setTimeout(function () {
            loadingMessage.style.display = "none"; // Oculta o "Enviando..."

            // Exibe mensagem de sucesso
            successMessage.style.display = "block";

            // Exibe alerta de aviso
            alertBox.style.display = "block";

            // Reseta o formulário
            form.reset();

            // Oculta a mensagem de sucesso após 3 segundos
            setTimeout(function () {
                successMessage.style.display = "none";
                alertBox.style.display = "none";
            }, 3000);
        }, 2000); // Simula um tempo de processamento de 2 segundos
    });

    // Lógica para ativar/desativar as opções corretamente
    if (unavailableCheckbox) {
        unavailableCheckbox.addEventListener("change", function () {
            if (this.checked) {
                cryingMessage.style.display = "block"; // Mostra mensagem triste
                daysContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
                    checkbox.checked = false;
                    checkbox.disabled = true;
                });
            } else {
                cryingMessage.style.display = "none"; // Oculta mensagem triste
                daysContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
                    checkbox.disabled = false;
                });
            }
        });
    }

    // Fecha a mensagem de indisponibilidade ao clicar no botão
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            cryingMessage.style.display = "none";
            unavailableCheckbox.checked = false;
            daysContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
                checkbox.disabled = false;
            });
        });
    }
});
