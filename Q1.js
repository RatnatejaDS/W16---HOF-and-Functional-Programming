// 1. Reverse String.

// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

// Define the input string
let input = 'Use SetTimeOut to reverse a string';

// Use setTimeout to reverse the string after a 2-second delay
setTimeout(() => {
    // Initialize an empty string to store the reversed text
    let reversed = '';

    // Iterate through the characters of the input string in reverse order
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i]; // Append each character to the reversed string
    }

    // Print the reversed string to the console
    console.log(reversed);
}, 2000);



// Output  ===> gnirts a esrever ot tuOemiTteS esU