function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;

    var outputTemperature;

    if (inputUnit === "celcius" && outputUnit === "fahrenheit") {
        outputTemperature = (inputTemperature * 9/5) + 32;
        console.log(outputTemperature);
    }
    else if (inputUnit === "fahrenheit" && outputUnit === "celcius") {
        outputTemperature = (inputTemperature - 32) * 5/9;
        console.log(outputTemperature);
    }
    else {
        outputTemperature = inputTemperature;
        console.log(outputTemperature);
    }

    document.getElementById("outputTemperature").value = outputTemperature.toFixed(2);

    document.getElementById("result").textContent = "Converted!";
}

