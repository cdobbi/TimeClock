(() => {
    // Get all the "relative-time" elements and extract their datetime attributes as Date objects
    const timeElements = Array.from(document.querySelectorAll('relative-time'));
    const times = timeElements
        .map(el => new Date(el.getAttribute('datetime')))
        .filter(date => !isNaN(date)); // filter out any invalid dates

    if (times.length < 2) {
        console.log("Not enough time logs found to calculate a time span.");
        return;
    }

    // Sort the timestamps in ascending order
    times.sort((a, b) => a - b);

    // Compute the total elapsed time (in milliseconds)
    const totalMs = times[times.length - 1] - times[0];

    // Convert milliseconds into hours, minutes, and seconds
    const totalSec = Math.floor(totalMs / 1000);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;

    console.log(`Total elapsed time: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
})();
