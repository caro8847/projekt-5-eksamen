/* Freja */

/* Har hentet inspiration ud fra denne side https://www.geeksforgeeks.org/javascript/how-to-design-a-simple-calendar-using-javascript/ */

const calendarDays = document.querySelector('.calendar__days');
const calendarMonth = document.querySelector('.calendar__month');
const prevArrow = document.querySelector('.calendar__arrow--left');
const nextArrow = document.querySelector('.calendar__arrow--right');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni",
    "Juli", "August", "September", "Oktober", "November", "December"
];

function renderCalendar(month, year) {
    calendarDays.innerHTML = ""; // ryd tidligere dage

    // sæt måned og år i header
    calendarMonth.textContent = `${months[month]} ${year}`;

    // Find første dag i måneden og antal dage
    const firstDay = new Date(year, month, 1).getDay(); // 0 = søndag
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Juster, så ugen starter med mandag
    let startDay = firstDay === 0 ? 6 : firstDay - 1;

    // tomme pladser før den første dag
    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement('div');
        calendarDays.appendChild(emptyDiv);
    }

    // fyld dagene
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        calendarDays.appendChild(dayDiv);
    }
}

// pile funktionalitet
prevArrow.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextArrow.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// initial render
renderCalendar(currentMonth, currentYear);
