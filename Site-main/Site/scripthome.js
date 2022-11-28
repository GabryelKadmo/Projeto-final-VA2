function fazerregistro() {
    window.location.href = "form.html";
}

//função de verificar credencias admin

function verificarcredencias() {

    var email = document.getElementById('idlogin').value;
    var senha = document.getElementById('idsenha').value;
    let emailv = email.toLowerCase();

    if (emailv == "doutorkadmo@ftc.com" && senha == "admin") {
        location.href = "./PaginaMedico.html";
    }
    else {
        this.validarEmail1();
    }

}

function validarEmail1() {

    var email = document.getElementById('idlogin').value;
    var senha = document.getElementById('idsenha').value;
    let emailv = email.toLowerCase();

    if (email == "rodrigoqueiroz@gmail.com" && senha == "1234") {
        location.href = "./marcaconsulta.html";
    }
    else {
        this.validarEmail2();
    }

}

function validarEmail2() {

    var email = document.getElementById('idlogin').value;
    var senha = document.getElementById('idsenha').value;
    let emailv = email.toLowerCase();

    if (email == "pedroborges@gmail.com" && senha == "1234") {
        location.href = "./marcaconsulta.html";
    }
    else {
        this.validarEmail3();
    }

}

function validarEmail3() {

    var email = document.getElementById('idlogin').value;
    var senha = document.getElementById('idsenha').value;
    let emailv = email.toLowerCase();

    if (email == "venancio3am@gmail.com" && senha == "1234") {
        location.href = "./marcaconsulta.html";
    }
    else {
        return Swal.fire({
            icon: 'error',
            title: 'Email ou senha incorretos!',
        })
    }

}