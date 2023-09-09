// LinkedIn Profile URL Validator.

// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.


// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.


// Regular expression pattern for valid LinkedIn profile URLs
const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to validate a LinkedIn profile URL
function validateLinkedInURL(input) {
    // Check if the input matches the LinkedIn URL pattern
    if (linkedInPattern.test(input)) {
        console.log("Valid LinkedIn Profile URL: " + input); // Print a message indicating it's a valid URL
    } else {
        console.log("Invalid LinkedIn Profile URL: " + input); // Print a message indicating it's an invalid URL
    }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/johndoe123");   // Valid LinkedIn Profile URL
validateLinkedInURL("https://www.linkedin.com/in/_alice-jones_"); // Valid LinkedIn Profile URL
validateLinkedInURL("https://www.linkedin.com/in/123");          // Invalid LinkedIn Profile URL (too short)
validateLinkedInURL("http://www.linkedin.com/in/mary_smith");    // Invalid LinkedIn Profile URL (wrong protocol)
validateLinkedInURL("https://www.linkedin.com/in/user-name-too-long-to-be-valid"); // Invalid LinkedIn Profile URL (too long)


// Output 
    // Valid LinkedIn Profile URL: https://www.linkedin.com/in/johndoe123
    // Invalid LinkedIn Profile URL: https://www.linkedin.com/in/_alice-jones_
    // Invalid LinkedIn Profile URL: https://www.linkedin.com/in/123
    // Invalid LinkedIn Profile URL: http://www.linkedin.com/in/mary_smith
    // Valid LinkedIn Profile URL: https://www.linkedin.com/in/user-name-too-long-to-be-valid