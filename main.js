let nevHelyes, jelszoHelyes, jelszoIsmetHelyes;

function nevHossz() {
    let hossz = document.getElementById("nev").value.length;
    let nevHosszKiiras = document.getElementById("nevHoszz");
    if (hossz > 20) {
        nevHosszKiiras.style.color = "red";
        nevHosszKiiras.innerHTML = hossz + " / 20";
        nevHelyes = false;
    } else {
        nevHosszKiiras.style.color = "black";
        nevHosszKiiras.innerHTML = hossz + " / 20";
        nevHelyes = true;
    }
}

function jelszoHossz() {
    let hossz = document.getElementById("jelszo").value.length;
    let jelszoHosszKiiras = document.getElementById("jelszoHoszz");
    if (hossz >= 8) {
        jelszoHosszKiiras.style.color = "black";
        jelszoHosszKiiras.innerHTML = hossz + " / 8";
        jelszoHelyes = true;
    } else {
        jelszoHosszKiiras.style.color = "red";
        jelszoHosszKiiras.innerHTML = hossz + " / 8";
        jelszoHelyes = false;
    }
}

function jelszoValidalas() {
    let jelszo = document.getElementById("jelszo").value;
    let jelszoIsmet = document.getElementById("jelszoIsmet").value;
    let jelszoIsmetHiba = document.getElementById("jelszoIsmetHiba");

    if (jelszo != jelszoIsmet) {
        jelszoIsmetHiba.innerHTML = "A két jelszó nem egyezik!";
        jelszoIsmetHelyes = false;
    } else {
        jelszoIsmetHiba.innerHTML = "";
        jelszoIsmetHelyes = true;
    }
}

function regisztralasValidalas() {
    if (nevHelyes && jelszoHelyes && jelszoIsmetHelyes) {
        document.getElementById("sikeresRegisztracio").innerHTML = "Sikeres Regisztráció";
    }
}

function kesleltetes(e) {
    setTimeout(regisztralasValidalas, 2000);
}

function init() {
    document.getElementById("nev").addEventListener("input", nevHossz);
    document.getElementById("jelszo").addEventListener("input", jelszoHossz);
    document.getElementById("jelszoIsmet").addEventListener("blur", jelszoValidalas);
    document.getElementById("regisztral").addEventListener("click", kesleltetes);
}

document.addEventListener("DOMContentLoaded", init);