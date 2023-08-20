let resultElement = document.getElementById("result");

function calculateTemp() {
    const inputTemp = parseFloat(document.getElementById('dg').value);
    console.log(inputTemp);
    const tempSelected = document.getElementById('temp');
    console.log(tempSelected)
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);

    if (valueTemp === 'cel') {
        let fahrenheit = celToFah(inputTemp);
        resultElement.innerHTML = `${fahrenheit.toFixed(2)} &#176; Fahrenheit`;
    } else {
        let celsius = fahToCel(inputTemp);
        resultElement.innerHTML = `${celsius.toFixed(2)} &#176; Celsius`;
    }
}

function celToFah(inputTemp) {
    return (inputTemp * 9 / 5) + 32;
}

function fahToCel(inputTemp) {
    return (inputTemp - 32) * 5 / 9;
}
