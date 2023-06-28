Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function startClock() {
setInterval(() => {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

    const formattedTime24 = `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
    const formattedTime12 = `${formatTwoDigits(convertTo12Hour(hours))}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)} ${getAMPM(hours)}`;

    console.log(`24-Hour Format: ${formattedTime24}`);
    console.log(`12-Hour Format: ${formattedTime12}`);

}, 1000);
}

function formatTwoDigits(number) {
return number.toString().padStart(2, '0');
}

function convertTo12Hour(hours) {
return hours > 12 ? hours - 12 : hours;
}

function getAMPM(hours) {
return hours >= 12 ? 'PM' : 'AM';
}

startClock();
