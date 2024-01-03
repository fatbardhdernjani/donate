function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password) {
      alert('Ju lutem shtypni përdoruesin dhe fjalëkalimin.');
      return;
    }

    if (username === 'fatbardh' && password === 'fatbardh12') {

      window.location.href = 'donations.html';
    } else {
      alerdocument.write('Përdoruesi ose fjalëkalimi është gabim, provoni përsëri!');
    }
  }