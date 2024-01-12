function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var validUsername = "fatbardh";
  var validPassword = "fatbardh12";

  if (username === validUsername && password === validPassword) {
      var nextPage = "donations.html";

      sessionStorage.setItem("isLoggedIn", "true");
      
      window.location.href = nextPage;
  } else {
      document.getElementById("loginResult").innerHTML = "Wrong username or password, please try again.";
  }
}
