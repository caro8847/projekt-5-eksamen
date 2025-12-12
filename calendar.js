/* Freja */

/* Har hentet inspiration ud fra denne side https://www.geeksforgeeks.org/javascript/how-to-design-a-simple-calendar-using-javascript/ 
og  CHAT https://chatgpt.com/share/693a72ef-5d50-8004-a12d-cee90c4e7afa*/

console.log("It's working")

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
    calendarDays.innerHTML = "";
    calendarMonth.textContent = `${months[month]} ${year}`;
  
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let startDay;
    if (firstDay === 0) {
        startDay = 6;
    } else {
        startDay = firstDay - 1;
    }
  
    for (let i = 0; i < startDay; i++) calendarDays.appendChild(document.createElement('div'));
  
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      calendarDays.appendChild(dayDiv);
    }
}
  
function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
}
  
prevArrow.addEventListener('click', () => changeMonth(-1));
nextArrow.addEventListener('click', () => changeMonth(1));
  
renderCalendar(currentMonth, currentYear); 