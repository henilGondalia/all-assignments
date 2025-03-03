/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const startTime = Date.now();
    while (Date.now() - startTime < seconds) {
      // Do nothing, wait for the specified milliseconds
    }
}