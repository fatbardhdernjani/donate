function submitDonation() {
    // Merr vlerat nga formulari
    var emri = document.getElementById("emri").value;
    var telefoni = document.getElementById("telefoni").value;
    var email = document.getElementById("email").value;
    var shuma = document.getElementById("shuma").value;

    // Krijo një objekt me të dhënat e dhuruesit
    var dhurues = {
        emri: emri,
        telefoni: telefoni,
        email: email,
        shuma: shuma
    };

    // Ruaj të dhënat në localStorage ose mund t'i dërgoni përmes një API
    saveDonation(dhurues);

    // Trego mesazhin falenderues
    alert("Faleminderit për dhurimin tuaj, " + emri + "!");
    // Mund të shtoni përcjellësime ose redirektoni në faqen e dytë
}

function saveDonation(dhurues) {
    // Merr të dhënat e dhurimeve të mëparshme nga localStorage (nëse ka)
    var dhurimeTeMeparshme = JSON.parse(localStorage.getItem("dhurime")) || [];

    // Shto të dhënën e re në listën e dhurimeve
    dhurimeTeMeparshme.push(dhurues);

    // Ruaj listën e re të dhurimeve në localStorage
    localStorage.setItem("dhurime", JSON.stringify(dhurimeTeMeparshme));
}
