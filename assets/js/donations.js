// Merr të dhënat e dhurimeve nga localStorage
var dhurime = JSON.parse(localStorage.getItem("dhurime")) || [];

// Shfaq dhurimet në faqen e dytë
var listaDhurimeve = document.getElementById("listaDhurimeve");
dhurime.forEach(function(dhurues) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<hr><strong>Emri:</strong> " + dhurues.emri + ", <br><strong>Telefoni:</strong> " + dhurues.telefoni + ", <br><strong>Email:</strong> " + dhurues.email + ", <br><strong>Shuma:</strong> " + dhurues.shuma;
    listaDhurimeve.appendChild(listItem);
});
