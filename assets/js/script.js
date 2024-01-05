function submitDonation() {

    var emri = document.getElementById("emri").value;
    var telefoni = document.getElementById("telefoni").value;
    var email = document.getElementById("email").value;
    var shuma = document.getElementById("shuma").value;

    var dhurues = {
        emri: emri,
        telefoni: telefoni,
        email: email,
        shuma: shuma
    };

    saveDonation(dhurues);

    var donationButton = document.getElementById("donationButton");
    donationButton.innerHTML = "Faleminderit për donacionin!";
    donationButton.classList.add("donated");
}

function saveDonation(dhurues) {

    var dhurimeTeMeparshme = JSON.parse(localStorage.getItem("dhurime")) || [];

    dhurimeTeMeparshme.push(dhurues);

    localStorage.setItem("dhurime", JSON.stringify(dhurimeTeMeparshme));
}
