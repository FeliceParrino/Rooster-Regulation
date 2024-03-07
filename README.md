# Rooster Module Test Suite

## Description

This project contains a comprehensive test suite for the Rooster module, ensuring its functionality and serving as documentation for developers.

## Getting Started

 Clone the repository:

   ```bash
   git clone https://github.com/FeliceParrino/Rooster-Regulation.git
   ```

Navigate to the project directory:

  ```bash
  cd Rooster-Regulation
  ```

Install dependencies:

  ```bash
  npm install
  ```

## Running Tests

Execute the test suite using the following command:
   
  ```bash
  npm test
  ```

This will run the Mocha test framework and display the results in the terminal.

## Test Structure

The test suite is organized into two main sections:

### `announceDawn` Method:
Verifies that the `announceDawn` method returns the expected rooster call.

### `timeAtDawn` Method:
Tests that the `timeAtDawn` method:
Returns its `argument` as a `string`.
Throws an error if passed a number less than `0`.
Throws an error if passed a number greater than `23`.

## Detected Issue

During the test execution, an issue in the `index.js` file was discovered and corrected. Make sure to use the latest version of the Rooster module.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and contributions are welcome!

## License

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

