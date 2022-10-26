function getValue(event) {
    event.preventDefault();

    const num1 = document.getElementById("number1-input").value;
    const num2 = document.getElementById("number2-input").value;

    console.log((num1 * 5) + num2)
}