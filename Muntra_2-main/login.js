function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  
  if (email === "test@example.com" && password === "1234") {

    window.location.href = "index.html";
  } else {
    error.classList.remove("hidden");
  }
}


    


    