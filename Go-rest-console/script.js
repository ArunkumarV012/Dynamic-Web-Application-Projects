let consoleForm = document.getElementById("consoleForm");

let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");

let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");

let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    method: "POST",
    requestBody: ""
}

requestUrl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
})

requestMethod.addEventListener("change", function(event) {
    formData.method = event.target.value;
})

requestBody.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
})

function validForm(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
}

function sendReq(formData) {
    let {
        requestUrl,
        method,
        requestBody
    } = formData;
    let options = {
        method: method,
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a5dd7732d79efb20d2fb7bdb61980e2f35e91767d007102c7dd15de41707f98e"
        },
        body: JSON.stringify(requestBody)
    };

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData)
        })
}

consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validForm(formData);
    sendReq(formData);
})