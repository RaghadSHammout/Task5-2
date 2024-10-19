function toggleTheme() {
    let body = document.getElementById("pageBody");
    let card = document.getElementById("converterCard");
    let title = document.getElementById("title");
    let themeButton = document.getElementById("themeButton");

    body.classList.toggle("dark-mode");
    card.classList.toggle("dark-mode");
    title.classList.toggle("text-dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "Switch to Light Mode";
    } else {
        themeButton.innerHTML = "Switch to Dark Mode";
    }
}

function convert() {
    let value = parseFloat(document.getElementById("valueInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    let result = 0;

    if (fromUnit === "meter") {
        result = value;
    } else if (fromUnit === "kilometer") {
        result = value * 1000;
    } else if (fromUnit === "centimeter") {
        result = value / 100;
    } else if (fromUnit === "mile") {
        result = value * 1609.34;
    } else if (fromUnit === "inch") {
        result = value * 0.0254;
    } else if (fromUnit === "foot") {
        result = value * 0.3048; 
    } else if (fromUnit === "yard") {
        result = value * 0.9144; 
    }

    if (toUnit === "meter") {
    } else if (toUnit === "kilometer") {
        result = result / 1000;
    } else if (toUnit === "centimeter") {
        result = result * 100;
    } else if (toUnit === "mile") {
        result = result / 1609.34;
    } else if (toUnit === "inch") {
        result = result / 0.0254; 
    } else if (toUnit === "foot") {
        result = result / 0.3048;
    } else if (toUnit === "yard") {
        result = result / 0.9144; 
    }

    document.getElementById("result").innerHTML = `Converted Value: ${result.toFixed(2)} ${toUnit}`;
}