## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

function startCounter() {
setTimeout(() => {
console.log(count);
count++;
startCounter(); // Call startCounter again after 1 second
}, 1000);
}

startCounter();

(Hint: setTimeout)
