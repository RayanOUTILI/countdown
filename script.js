document.addEventListener('DOMContentLoaded', function () {

    function countdown() {
        const échéance3 = new Date('2023-12-15T19:00:00').getTime();
        const échéance4 = new Date('2024-01-19T19:00:00').getTime();

        function updateCountdown(échéance, joursClass, heuresClass, minutesClass, secondesClass) {
            function update() {
                const dateActuelle = new Date().getTime();
                const tempsRestant = échéance - dateActuelle;

                if (tempsRestant <= 0) {
                    const joursElements = document.querySelectorAll('.' + joursClass);
                    const heuresElements = document.querySelectorAll('.' + heuresClass);
                    const minutesElements = document.querySelectorAll('.' + minutesClass);
                    const secondesElements = document.querySelectorAll('.' + secondesClass);

                    joursElements.forEach(element => element.textContent = "Etape terminée :)");
                    heuresElements.forEach(element => element.textContent = "");
                    minutesElements.forEach(element => element.textContent = "");
                    secondesElements.forEach(element => element.textContent = "");

                    return;
                }

                const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
                const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
                const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

                const joursElements = document.querySelectorAll('.' + joursClass);
                const heuresElements = document.querySelectorAll('.' + heuresClass);
                const minutesElements = document.querySelectorAll('.' + minutesClass);
                const secondesElements = document.querySelectorAll('.' + secondesClass);

                joursElements.forEach(element => element.textContent = jours + "J:");
                heuresElements.forEach(element => element.textContent = heures + "H:");
                minutesElements.forEach(element => element.textContent = minutes + "M:");
                secondesElements.forEach(element => element.textContent = secondes + "s");
            }

            setInterval(update, 1000);
            update();
        }

        updateCountdown(échéance3, 'jours3', 'heures3', 'minutes3', 'secondes3');
        updateCountdown(échéance4, 'jours4', 'heures4', 'minutes4', 'secondes4');
    }

    countdown();

    function updateProgressBar() {
        const dateDebut = new Date('2023-09-04').getTime();
        const dateFin = new Date('2024-01-19').getTime();
        const dateActuelle = new Date().getTime();

        const progression = (dateActuelle - dateDebut) / (dateFin - dateDebut) * 100;
        const progressElement = document.getElementById("progress");
        const pourcentage = progression.toFixed(2) + '%';
        console.log(pourcentage);
        progressElement.style.width = progression + '%';
        progressElement.textContent = pourcentage;
    }

    updateProgressBar();

});
