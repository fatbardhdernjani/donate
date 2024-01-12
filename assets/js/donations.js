var dhurime = JSON.parse(localStorage.getItem("dhurime")) || [];

var listaDhurimeve = document.getElementById("listaDhurimeve");
var donacionePerFaqe = 9;

shfaqDhurimet();

function shfaqDhurimet() {
    listaDhurimeve.innerHTML = "";
    var numriFaqeve = Math.ceil(dhurime.length / donacionePerFaqe);

    for (var i = 0; i < numriFaqeve; i++) {
        var start = i * donacionePerFaqe;
        var end = start + donacionePerFaqe;
        var donacionetFaqes = dhurime.slice(start, end);

        var faqeDiv = document.createElement("div");
        faqeDiv.id = "faqja" + (i + 1);

        donacionetFaqes.forEach(function (dhurues) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<hr><strong>Emri:</strong> " + dhurues.emri + ", <br><strong>Telefoni:</strong> " + dhurues.telefoni + ", <br><strong>Email:</strong> " + dhurues.email + ", <br><strong>Shuma:</strong> " + dhurues.shuma + " €";
            faqeDiv.appendChild(listItem);
        });

        listaDhurimeve.appendChild(faqeDiv);
    }

    shfaqButtons(numriFaqeve);
}

function shfaqButtons(numriFaqeve) {
    for (var i = 1; i <= numriFaqeve; i++) {
        var faqeButton = document.createElement("button");
        faqeButton.innerText = "Faqja " + i;
        faqeButton.addEventListener("click", function (event) {
            var faqjaAktuale = event.target.innerText.split(" ")[1];
            shfaqDhurimetFaqen(faqjaAktuale);
        });
        listaDhurimeve.appendChild(faqeButton);
    }
}

function shfaqDhurimetFaqen(faqja) {
    var faqeDivs = document.querySelectorAll("#listaDhurimeve > div");

    faqeDivs.forEach(function (div) {
        div.style.display = "none";
    });

    document.getElementById("faqja" + faqja).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        window.location.href = "login.html";
    }
});

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
