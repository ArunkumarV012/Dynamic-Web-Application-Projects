let addUserForm = document.getElementById("addUserForm");

let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Status = document.getElementById("status");
let GenderMale = document.getElementById("genderMale");
let GenderFemale = document.getElementById("genderFemale");

let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

Name.addEventListener("change", function(event) {
    let userValue = event.target.value;
    if (userValue === "") {
        nameErrMsg.textContent = "Required*"
    } else {
        nameErrMsg.textContent = "";
    }
    formData.name = userValue;
});

Email.addEventListener("change", function(event) {
    let userValue = event.target.value;
    if (userValue === "") {
        emailErrMsg.textContent = "Required*"
    } else {
        emailErrMsg.textContent = "";
    }
    formData.email = userValue;
});

Status.addEventListener("change", function(event) {
    let userValue = event.target.value;
    formData.status = userValue;
});

GenderMale.addEventListener("change", function(event) {
    let userValue = event.target.value;
    formData.gender = userValue;
});

GenderFemale.addEventListener("change", function(event) {
    let userValue = event.target.value;
    formData.gender = userValue;
});

function validFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        nameErrMsg.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsg.textContent = "Required*";
    }
}

function submitForm(formData) {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a5dd7732d79efb20d2fb7bdb61980e2f35e91767d007102c7dd15de41707f98e"
        },
        body: JSON.stringify(formData)
    }

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsg.textContent = "Email already Exists";
                }
            }
        });
}

addUserForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validFormData(formData);
    submitForm(formData);

});