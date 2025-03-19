document.addEventListener("DOMContentLoaded", function () {
    const selectedDays = [2, 5, 9, 12, 16, 19, 23, 26, 30];
    const daysContainer = document.getElementById('daysContainer');
    const monthSelect = document.getElementById('month');
    const cryingMessage = document.getElementById('cryingMessage');
    const closeButton = document.getElementById('closeButton');

    function getDayName(day, month) {
        const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        const date = new Date(2025, month - 1, day);
        return daysOfWeek[date.getDay()];
    }

    function renderDays(month) {
        daysContainer.innerHTML = '';
        
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
            checkbox.classList.add('day-checkbox');
            checkbox.id = 'day-' + day;
            checkbox.name = "selectedDays[]";
            checkbox.value = day;

            const label = document.createElement('label');
            label.htmlFor = 'day-' + day;
            label.textContent = `Dia ${day} (${dayName})`;
            label.style.color = "#fff";

            const div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);
            daysContainer.appendChild(div);
        });

        unavailableCheckbox.addEventListener('change', function () {
            const dayCheckboxes = document.querySelectorAll('.day-checkbox');
            if (this.checked) {
                cryingMessage.style.display = "block";
                dayCheckboxes.forEach(cb => cb.disabled = true);
            } else {
                cryingMessage.style.display = "none";
                dayCheckboxes.forEach(cb => cb.disabled = false);
            }
        });

        document.querySelectorAll('.day-checkbox').forEach(cb => {
            cb.addEventListener('change', function () {
                unavailableCheckbox.disabled = document.querySelectorAll('.day-checkbox:checked').length > 0;
            });
        });
    }

    monthSelect.addEventListener('change', function () {
        const month = parseInt(this.value);
        if (!isNaN(month)) {
            renderDays(month);
        }
    });

    closeButton.addEventListener('click', function () {
        cryingMessage.style.display = "none";
        document.getElementById('unavailable').checked = false;
        document.querySelectorAll('.day-checkbox').forEach(cb => cb.disabled = false);
    });
});
