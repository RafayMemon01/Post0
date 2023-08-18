document.getElementById("register").addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    axios.post(`/api/v1/signup`, { email: email, password})
    .then(function (response) {
        alert("Signup successful. Redirect to Login");
        window.location.pathname = "/api/v1/login";
    })
})