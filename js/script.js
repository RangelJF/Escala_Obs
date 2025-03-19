const selectedDays = [2, 5, 9, 12, 16, 19, 23, 26,30];
const daysContainer = document.getElementById('daysContainer');
const monthSelect = document.getElementById('month');
const form = document.getElementById('availabilityForm');

function getDayName(day, month) {
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const date = new Date(2025, month - 1, day);
    return daysOfWeek[date.getDay()];
}

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
            checkbox.id = day;
            checkbox.name = "selectedDays[]";
            checkbox.value = day;
            const label = document.createElement('label');
            label.htmlFor = day;
            label.textContent = `Dia ${day} (${dayName})`;
            label.style.color = "#fff";
            const div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);
            daysContainer.appendChild(div);
        });

        const unavailableCheckboxElement = document.getElementById
