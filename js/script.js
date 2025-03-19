document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("availabilityForm");
    const daysContainer = document.getElementById("daysContainer");
    const monthSelect = document.getElementById("month");
    const nameSelect = document.getElementById("name");
    const loadingMessage = document.getElementById("loadingMessage");
    const successMessage = document.getElementById("successMessage");
    const alertBox = document.getElementById("alertBox");
    const cryingMessage = document.getElementById("cryingMessage");
    const closeButton = document.getElementById("closeButton");

    function generateDays() {
        daysContainer.innerHTML = "";
        const month = parseInt(monthSelect.value);
        if (!month) return;

        const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();

        const unavailableOption = document.createElement("div");
        unavailableOption.innerHTML = `
            <input type="checkbox" id="unavailable" name="days" value="unavailable">
            <label for="unavailable">Este mês estarei INDISPONÍVEL</label>
        `;
        daysContainer.appendChild(unavailableOption);

        for (let i = 1; i <= daysInMonth; i++) {
            const dayOption = document.createElement("div");
            dayOption.innerHTML = `
                <input type="checkbox" id="day${i}" name="days" value="${i}">
                <label for="day${i}">${i}</label>
            `;
            daysContainer.appendChild(dayOption);
        }

        document.getElementById("unavailable").addEventListener("change", function () {
            const checkboxes = daysContainer.querySelectorAll("input[type='checkbox']");
            if (this.checked) {
                checkboxes.forEach((box) => {
                    if (box !== this) box.disabled = true;
                });
            } else {
                checkboxes.forEach((box) => {
                    box.disabled = false;
                });
            }
        });

        daysContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
            if (checkbox.id !== "unavailable") {
                checkbox.addEventListener("change", function () {
                    document.getElementById("unavailable").disabled = this.checked;
                });
            }
        });
    }

    monthSelect.addEventListener("change", generateDays);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        loadingMessage.style.display = "block";

        setTimeout(() => {
            loadingMessage.style.display = "none";
            successMessage.style.display = "block";

            setTimeout(() => {
                alertBox.style.display = "block";
            }, 2000);

            setTimeout(() => {
                successMessage.style.display = "none";
                alertBox.style.display = "none";
            }, 5000);

            form.reset();
            daysContainer.innerHTML = "";
        }, 2000);

        if (document.getElementById("unavailable").checked) {
            cryingMessage.style.display = "block";
        }
    });

    closeButton.addEventListener("click", function () {
        cryingMessage.style.display = "none";
    });
});
