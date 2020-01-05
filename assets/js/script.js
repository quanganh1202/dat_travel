function openContactForm() {
    document.getElementById("contact-panel").style.width = "300px";
    document.getElementById("toggle-button-open").style.background = "green";
}

function closeContactForm() {
    document.getElementById("contact-panel").style.width = "0px";
    document.getElementById("toggle-button-open").style.background = "#404040";
}

function onScrollPage(event) {
    const contentElement = document.querySelector('html');
    const bodyElement = document.querySelector('body');
    const headerElement = document.querySelector('#header');
    if (headerElement && (contentElement.scrollTop > 0 || bodyElement.scrollTop > 0)) {
        headerElement.style.background = "rgba(0, 0, 0, 0.5)";
    } else {
        headerElement.style.background = "transparent";
    }
}

function checkPageScroll() {
    document.addEventListener('scroll', onScrollPage);
}

function onClickTitle(element) {
    if (element.parentElement.classList.contains('show-detail')) {
        element.parentElement.classList.remove('show-detail');
    } else {
        document.querySelectorAll('.info-title').forEach(function (element) {
            element.classList.remove('show-detail');
        })
        element.parentElement.focus();
        element.parentElement.classList.add('show-detail');
    }
}

function showLocationMark(locationMarkId, isShowLocationMark) {
    const mark = document.querySelector('.mark-' + locationMarkId);
    if (mark) {
        if (isShowLocationMark) mark.style.display = 'inline';
        else mark.style.display = 'none';
    }
}

function viewDayDetail(day) {
    const modal = $('#schedule-detailed-modal');
    const modalHeader = $('#schedule-detailed-label');
    const controlLeft = $('#day-control-left');
    const controlRight = $('#day-control-right');
    var headerText = '';
    if (day === 1) {
        controlLeft.addClass('hidden-control');
        controlRight.removeClass('hidden-control');
        headerText = 'Giorno 1 : Arrivo ad Hanoi';
    }
    if (day === 2) {
        controlLeft.removeClass('hidden-control');
        controlRight.removeClass('hidden-control');
        headerText = 'Giorno 2 : Visita’ di Hanoi';
    }
    if (day === 3) {
        controlLeft.removeClass('hidden-control');
        controlRight.removeClass('hidden-control');
        headerText = 'Giorno 3 : Hanoi – baia di Halong';
    }
    if (day === 4) {
        controlLeft.removeClass('hidden-control');
        controlRight.removeClass('hidden-control');
        headerText = 'Giorno 4 : Halong – Hanoi – Volo per Hoi An';
    }
    if (day === 5) {
        controlLeft.removeClass('hidden-control');
        controlRight.addClass('hidden-control');
        headerText = 'Giorno 5 : Visita di Hoi An';
    }
    modal.data('day', day);
    modalHeader.text(headerText);
}

function goToDayDetailByOneStep(goBy) {
    const modal = $('#schedule-detailed-modal');
    const currentModalDay = modal.data().day;
    if (goBy === 'prev') {
        viewDayDetail(currentModalDay - 1);
    } else {
        viewDayDetail(currentModalDay + 1);
    }
}