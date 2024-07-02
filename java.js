 currentInput='';
// Function to append clicked button value to display
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    result;
    try {
        result = eval(currentInput);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    currentInput = ''; // Reset current input after calculation
}

// Function to calculate square of a number
function calculateSquare() {
    number = eval(currentInput);
     result = number * number;
    document.getElementById('display').value = result;
    currentInput = ''; // Reset current input after square calculation
}