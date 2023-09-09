// URL validation.

// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not


// Regular expression pattern for valid URLs
const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

// Function to validate a URL
function validateURL(input) {
    // Check if the input matches the URL pattern
    if (urlPattern.test(input)) {
        console.log("Valid URL: " + input); // Print a message indicating it's a valid URL
    } else {
        console.log("Invalid URL: " + input); // Print a message indicating it's an invalid URL
    }
}

// Test cases
validateURL("http://www.example.com");       // Valid URL
validateURL("https://www.example.com");      // Valid URL
validateURL("https://123.456");                 // Invalid URL
validateURL("ftp://www.example.com");         // Invalid URL

//  Output 
    // Valid URL: http://www.example.com
    // Valid URL: https://www.example.com
    // Invalid URL: https://123.456
    // Invalid URL: ftp://www.example.com
