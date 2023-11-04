let langs = document.querySelector(".langs");

let link = document.querySelectorAll("a");
let link1 = new Array(document.getElementById("bosanski"), document.getElementById("engleski"));

let telefon1 = document.querySelector(".telefon1"),
telefon2 = document.querySelector(".telefon2"),
telefon3 = document.querySelector(".telefon3"),
telefon4 = document.querySelector(".telefon4"),
telefon5 = document.querySelector(".telefon5"),
side_mobiteli = document.querySelector(".side_mobiteli"),
side_kompjuter = document.querySelector(".side_kompjuter"),
side_servis = document.querySelector(".side_servis"),
side_kablovi = document.querySelector(".side_kablovi"),
side_otkljucavanje = document.querySelector(".side_otkljucavanje"),
side_cjenovnik = document.querySelector(".side_cjenovnik"),
pocetna_paragraf = document.querySelector(".pocetna_paragraf"),
lokacija_paragraf = document.querySelector(".lokacija_paragraf"),
kontakt_paragraf = document.querySelector(".kontakt_paragraf"),
formular_paragraf = document.querySelector(".formular_paragraf"),
posjeta = document.querySelector(".posjeta");


link.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attribute = el.getAttribute("Language");

        telefon1.textContent = data[attribute].telefon1;
        telefon2.textContent = data[attribute].telefon2;
        telefon3.textContent = data[attribute].telefon3;
        telefon4.textContent = data[attribute].telefon4;
        telefon5.textContent = data[attribute].telefon5;
        side_mobiteli.textContent = data[attribute].side_mobiteli;
        side_kompjuter.textContent = data[attribute].side_kompjuter;
        side_servis.textContent = data[attribute].side_servis;
        side_kablovi.textContent = data[attribute].side_kablovi;
        side_otkljucavanje.textContent = data[attribute].side_otkljucavanje;
        side_cjenovnik.textContent = data[attribute].side_cjenovnik;
        pocetna_paragraf.textContent = data[attribute].pocetna_paragraf;
        lokacija_paragraf.textContent = data[attribute].lokacija_paragraf;
        kontakt_paragraf.textContent = data[attribute].kontakt_paragraf;
        formular_paragraf.textContent = data[attribute].formular_paragraf;
        posjeta.textContent = data[attribute].posjeta;

    })
})





let data = {
    bosnian: {
        telefon1:"Jedan od najbolji telefona u ponudi koji nudi sve što vam treba. Super retina display sa brzim FACE ID-om.",
        telefon2:"BUDGET telefon koji sa 8GB radne memorije i sa Gorilla Glass 5 zaštitom ekrana I 3 kamere sa mnoštvom opcija za fotografisanje",
        telefon3:"BUDGET telefon koji sa 8GB radne memorije i sa Gorilla Glass 5 zaštitom ekrana I 3 kamere sa mnoštvom opcija za fotografisanje",
        telefon4:"Jedan od najbolji telefona u ponudi koji nudi sve što vam treba. Super retina display sa brzim FACE ID-om.", 
        telefon5:"Jedan od najbolji telefona u ponudi koji nudi sve što vam treba. Sa 3 kamere ponudit će vam razne opcije fotografisanja.",
        side_mobiteli:"MOBITELI",
        side_kompjuter:"KOMPJUTERI",
        side_servis:"SERVIS",
        side_kablovi:"KABLOVI",
        side_otkljucavanje:"OTKLJUCAVANJE",
        side_cjenovnik:"CJENOVNIK",
        pocetna_paragraf:"Pocetna",
        lokacija_paragraf:"Lokacija",
        kontakt_paragraf:"Kontakt",
        formular_paragraf:"Formular",
        posjeta: "BROJAC POSJETA"
    },
    english: {
        telefon1:"One of the best phones on offer that offers everything you need. Super retina display with fast FACE ID.",
        telefon2:"BUDGET phone with 8GB of working memory and Gorilla Glass 5 screen protection and 3 cameras with many options for photography",
        telefon3:"BUDGET phone with 8GB of working memory and Gorilla Glass 5 screen protection and 3 cameras with many options for photography",
        telefon4:"One of the best phones on offer that offers everything you need. Super retina display with fast FACE ID.", 
        telefon5:"One of the best phones on offer that offers everything you need. With 3 cameras, it will offer you various photography options.",
        side_mobiteli:"PHONES",
        side_kompjuter:"COMPUTERS",
        side_servis:"SERVICE",
        side_kablovi:"CABLES",
        side_otkljucavanje:"UNLOCKING",
        side_cjenovnik:"PRICE LIST",
        pocetna_paragraf:"Home",
        lokacija_paragraf:"Location",
        kontakt_paragraf:"Contact",
        formular_paragraf:"Form",
        posjeta: "VISIT COUNTER"
    }
}

