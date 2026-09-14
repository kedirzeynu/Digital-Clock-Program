// Digital Clock Program

// Cache the DOM element once, instead of querying it every second
const clockElement = document.getElementById("clock");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    
    const meridiem = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    
    // Format time components to always show 2 digits
    const paddedHours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the DOM
    clockElement.textContent = `${paddedHours}:${minutes}:${seconds} ${meridiem}`;
}

// Initialize clock immediately, then update every second
updateClock();
setInterval(updateClock, 1000);