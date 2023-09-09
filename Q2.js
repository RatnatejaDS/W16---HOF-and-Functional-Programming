// Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.


// Set the initial countdown time in seconds
let Timeout = 3;

// Create an interval that runs every second
let TimeInterval = setInterval(() => {
    // Check if the countdown has reached 0
    if (Timeout === 0) {
        // Generate a random number between 1 and 100 (inclusive)
        let RandNo = Math.ceil(Math.random() * 100);

        // Display a success message with the generated random number
        console.log('Successfully Generated !! Your Number = ' + RandNo);

        // Stop the interval
        clearInterval(TimeInterval);
    } else {
        // Display the time remaining in seconds
        console.log('Time Left for generating the number = ' + Timeout + ' sec');

        // Decrement the countdown timer by 1 second
        Timeout = Timeout - 1;
    }
}, 1000);


//  Output ==>
// Time Left for generating the number = 3 sec
// Time Left for generating the number = 2 sec
// Time Left for generating the number = 1 sec
// Successfully Generated !! Your Number = 18
