const navLinkBox = document.querySelector('.nav-link-box')
const navOpen = document.querySelector('.nav-open')
const navClose = document.querySelector('.nav-close')

const reservationPanel = document.querySelector('.reservation-panel')
const reservationPanelBtn = document.querySelector('.nav-reservation-btn')
const reservationPanelCloseBtn = document.querySelector('.reservation-panel-content-close-btn')

const footerYear = document.querySelector('.footer-year');


const openNav = () => {
    navLinkBox.classList.add('nav-link-box-active')
}

const closeNav = () => {
    navLinkBox.classList.remove('nav-link-box-active')
}

const openReservation = () => {
    reservationPanel.classList.add('reservation-panel-active')
}

const closeReservation = () => {
    reservationPanel.classList.remove('reservation-panel-active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

navOpen.addEventListener('click', openNav)
navClose.addEventListener('click', closeNav)
reservationPanelBtn.addEventListener('click', openReservation)
reservationPanelCloseBtn.addEventListener('click', closeReservation)