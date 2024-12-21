let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let imageOrgWidth = 200;

let imageMaxWidthWarningMessage = "Too big.Decrease the size of the image.";
let imageMinWidthWarningMessage = "Can't Visible.Increase the size of the image.";

imageElement.style.width = imageOrgWidth + "px";
imageWidthElement.textContent = imageOrgWidth + "px";

function incrementButton() {
    if (imageOrgWidth >= imageMaxWidth) {
        warningMessageElement.textContent = imageMinWidthWarningMessage;
    } else {
        imageOrgWidth = imageOrgWidth + 5;
        let updatedImageWidth = imageOrgWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}


function decrementButton() {
    if (imageOrgWidth <= imageMinWidth) {
        warningMessageElement.textContent = imageMinWidthWarningMessage;
    } else {
        imageOrgWidth = imageOrgWidth - 5
        let updatedImageWidth = imageOrgWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}