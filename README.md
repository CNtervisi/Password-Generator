# Password-Generator

## Description
This project involves creating a web-based application that allows users to generate random passwords based on their chosen criteria. The application is built using JavaScript, HTML, and CSS, and will run in the user's browser.

## Features
* Random Password Generation: When the user clicks the "Generate" button, the application will generate a random password based on the criteria selected by the user. The password generation process includes selecting a random element from arrays containing special characters, numeric characters, lowercase characters, and uppercase characters.

* Password Length Selection: Users can specify the length of the password, with options ranging from 8 to 128 characters. The function getPasswordOptions() prompts the user for the password length and validates the input to ensure it falls within the specified range.

* Character Type Selection: Users can choose the types of characters to include in the password. The function getPasswordOptions() uses confirm dialog boxes to allow the user to select these options.

* Validation: The application validates each input and ensures that at least one character type is selected. If the user enters an invalid password length or selects no character types, the application will display an alert and prompt the user to try again using a number within the given range.

## Usage
To use this application, the user will have to click on the Generate Password button on the webpage and enter the choices that are being prompted.

Here is a screenshot of the password generator application:

![alt"console-screenshot"](./assets/05-javascript-challenge-demo.png)

## License
This project is licensed under the MIT License. See the [license](./LICENSE) file for more details.