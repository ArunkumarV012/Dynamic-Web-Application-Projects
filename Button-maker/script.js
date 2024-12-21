let backgroundColorElement = document.getElementById("bgColorInput");
let fontColorElement = document.getElementById("fontColorInput");
let fontSizeElement = document.getElementById("fontSizeInput");
let fontWeightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let borderRadiusElement = document.getElementById("borderRadiusInput");

let customButtonElement = document.getElementById("customButton");

function applyButton() {
    let bgColor = backgroundColorElement.value;
    let fontColor = fontColorElement.value;
    let fontSize = fontSizeElement.value;
    let padding = paddingElement.value;
    let fontWeight = fontWeightElement.value;
    let borderRadius = borderRadiusElement.value;

    customButtonElement.style.backgroundColor = bgColor;
    customButtonElement.style.color = fontColor;
    customButtonElement.style.fontSize = parseInt(fontSize) + "px";
    customButtonElement.style.padding = parseInt(padding) + "px";
    customButtonElement.style.fontWeight = parseInt(fontWeight);
    customButtonElement.style.borderRadius = parseInt(borderRadius) + "px";

}