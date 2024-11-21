const reservationPanel = document.querySelector('.reservation-panel')

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        reservationPanel.classList.add('reservation-panel-active')
    }, 5000)
})