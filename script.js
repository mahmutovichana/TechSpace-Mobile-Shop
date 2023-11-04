//const slike = [document.querySelector(".active-slika"), document.querySelector(".lijeva-motion") , document.querySelector(".desna-motion")]
//var counter = 0;

//console.log(slike)
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slike = document.getElementsByClassName("slika");

var mojeSlike = new Array(
    "/Misc/1.2.png",
    "/Servis reklame/Servis-mobitela.jpg",
    "/Servis reklame/Facebook-banner.png"
);

let i = 1;
console.log(slike);
next.onclick = function() {
    if(i == 2)
        return;
    else if(i == 1) {
        slike[i+1].classList.remove("desno");
        slike[i+1].classList.add("active");
        slike[i].classList.remove("active");
        slike[i].classList.add("desno");
        i++;
    }
    else if (i == 0) {
        slike[i+1].classList.remove("lijevo");
        slike[i+1].classList.add("active");
        slike[i].classList.remove("active");
        slike[i].classList.add("lijevo");
        i++;
    }
    console.log(slike[2]);
}
prev.onclick = function() {
    if(i == 0) return;
    if(i == 1) {
        slike[i-1].classList.remove("lijevo");
        slike[i-1].classList.add("active");
        slike[i].classList.remove("active");
        slike[i].classList.add("lijevo");
        i--;
    }
    else if(i == 2) {
        slike[i-1].classList.remove("desno");
        slike[i-1].classList.add("active");
        slike[i].classList.remove("active");
        slike[i].classList.add("desno");
        i--;    
    }
}


const countElement = document.getElementById("count");

prebrojPosjete();

function prebrojPosjete() {
    fetch('https://api.countapi.xyz/update/pws-stranica/androidShop/?amount=1').
    then(res => res.json()).
    then(res => {countElement.innerHTML = res.value;});
}
