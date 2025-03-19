const selectedDays = [2, 5, 9, 12, 16, 19, 23, 26, 30];
const daysContainer = document.getElementById('daysContainer');
const monthSelect = document.getElementById('month');
const form = document.getElementById('availabilityForm');

// Função de obter o nome do dia da semana
function getDayName(day, month) {
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const date = new Date(2025, month - 1, day);
    return daysOfWeek[date.getDay()];
}

// Event listener para o select de mês
monthSelect.addEventListener('change', () => {
    const month = parseInt(monthSelect.value);
    daysContainer.innerHTML = '';
    if (!isNaN(month)) {
        const unavailableCheckbox = document.createElement('input');
        unavailableCheckbox.type = 'checkbox';
        unavailableCheckbox.id = 'unavailable';
        unavailableCheckbox.name = "selectedDays[]";
        unavailableCheckbox.value = 'Este mês estarei INDISPONÍVEL';
        const unavailableLabel = document.createElement('label');
        unavailableLabel.htmlFor = 'unavailable';
        unavailableLabel.textContent = 'Este mês estarei INDISPONÍVEL';
        unavailableLabel.style.color = "#fff";
        const unavailableDiv = document.createElement('div');
        unavailableDiv.appendChild(unavailableCheckbox);
        unavailableDiv.appendChild(unavailableLabel);
        daysContainer.appendChild(unavailableDiv);

        selectedDays.forEach(day => {
            const dayName = getDayName(day, month);
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `day${day}`;
            checkbox.name = "selectedDays[]";
            checkbox.value = day;
            const label = document.createElement('label');
            label.htmlFor = `day${day}`;
            label.textContent = `Dia ${day} (${dayName})`;
            label.style.color = "#fff";
            const div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);
            daysContainer.appendChild(div);
        });

        const unavailableCheckboxElement = document.getElementById('unavailable');
        const cryingMessage = document.getElementById('cryingMessage');
        const dayCheckboxes = document.querySelectorAll('#daysContainer input[type="checkbox"]:not(#unavailable)');

        unavailableCheckboxElement.addEventListener('change', () => {
            if (unavailableCheckboxElement.checked) {
                cryingMessage.style.display = 'block';
                dayCheckboxes.forEach(checkbox => checkbox.disabled = true);
            } else {
                cryingMessage.style.display = 'none';
                dayCheckboxes.forEach(checkbox => checkbox.disabled = false);
            }
        });

        dayCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    unavailableCheckboxElement.disabled = true;
                } else {
                    unavailableCheckboxElement.disabled = false;
                }
            });
        });

        document.getElementById('closeButton').addEventListener('click', () => {
            cryingMessage.style.display = 'none';
        });
    }
});

// Função de envio do formulário
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    document.getElementById('loadingMessage').style.display = 'block';

    const formData = new FormData(this);
    const month = monthSelect.options[monthSelect.selectedIndex].text;
    const name = formData.get('name');
    const selectedDays = formData.getAll('selectedDays[]');

    if (selectedDays.length === 0) {
        alert('Você precisa selecionar pelo menos um dia ou marcar a opção de "Indisponível".');
        submitButton.disabled = false;
        document.getElementById('loadingMessage').style.display = 'none';
        return;
    }

    const params = new URLSearchParams();
    params.append('month', month);
    params.append('name', name);
    params.append('selectedDays', selectedDays.join(','));

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwukn-WcfDjDJCX2OR2hYGxV38pS2G67_9mkARd3OzC_8O9Df83UzaMgUHr2-ZuY1FP/exec', {
            method: 'POST',
            body: params
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.text();
        console.log(responseData);

        if (responseData.includes('erro')) {
            throw new Error('O servidor retornou um erro ao processar os dados.');
        }

        this.style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('alertBox').style.display = 'block';
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        document.getElementById('alertBox').style.display = 'block';
        alert(`Erro ao enviar os dados: ${error.message}`);
    } finally {
        document.getElementById('loadingMessage').style.display = 'none';
        submitButton.disabled = false;
    }
});
