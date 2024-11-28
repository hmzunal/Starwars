let characters = [
    {
        "id": 1,
        name: "Luke Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        homeworld: "tatooine"
    },
    {
        id: 2,
        name: "C-3PO",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        homeworld: "tatooine"
    },
    {
        id: 3,
        name: "R2-D2",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        homeworld: "naboo"
    },
    {
        id: 4,
        name: "Darth Vader",
        pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        homeworld: "tatooine"
    },
    {
        id: 5,
        name: "Leia Organa",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        homeworld: "alderaan"
    },
    {
        id: 6,
        name: "Owen Lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        id: 7,
        name: "Beru Whitesun lars",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        homeworld: "tatooine"
    },
    {
        id: 8,
        name: "R5 - D4",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        homeworld: "tatooine"
    },
    {
        id: 9,
        name: "Biggs Darklighter",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        homeworld: "tatooine"
    },
    {
        id: 10,
        name: "Obi - Wan Kenobi",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        homeworld: "stewjon"
    },
    {
        id: 11,
        name: "Anakin Skywalker",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        homeworld: "tatooine"
    },
    {
        id: 12,
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu"
    },
    {
        id: 13,
        name: "Chewbacca",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        homeworld: "kashyyyk"
    },
    {
        id: 14,
        name: "Han Solo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        homeworld: "corellia"
    },
    {
        id: 15,
        name: "Greedo",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        homeworld: "Rodia"
    },
    {
        id: 16,
        name: "Jabba Desilijic Tiure",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        homeworld: "tatooine"
    },
    {
        id: 18,
        name: "Wedge Antilles",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "corellia"
    },
    {
        id: 19,
        name: "Jek Tono Porkins",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        homeworld: "bestine"
    },
    {
        id: 20,
        name: "Yoda",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
          homeworld: "other",
    },
    {
        id: 21,
        name: "Palpatine",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        homeworld: "naboo"
    }
]

let body=document.querySelector("body");
let mainDiv=document.getElementById("mainDiv")
const btnGetir=document.getElementById("getir");
let mySound=new Audio("darth-vader.mp3");

btnGetir.addEventListener("click", () => {
    mainDiv.classList.toggle("d-none");
    if(btnGetir.textContent=="STARWARS"){
        btnGetir.textContent="HIDE CHARACTERS"
    }
    else{
        btnGetir.textContent="STARWARS"
    }
    
    mySound.play();
    if (mainDiv.classList.contains("d-none")) return;

    // Tüm karakterleri göster
    renderCharacters(characters);
});

// Radyo butonları ve filtreleme
let radioButtons = document.querySelectorAll('input[name="homeworld"]');

radioButtons.forEach((radio) => {
    radio.addEventListener("click", (e) => {
        let selectedHomeworld = e.target.value;

        // Seçilen homeworld'e uygun karakterleri filtrele
        let filteredCharacters = characters.filter(
            (character) => character.homeworld.toLocaleLowerCase() === selectedHomeworld.toLocaleLowerCase()
        );

        // Filtrelenen karakterleri göster
        renderCharacters(filteredCharacters);
    });
});

// Karakterleri render eden fonksiyon
function renderCharacters(charactersToRender) {
    mainDiv.innerHTML = ""; // Eski içeriği temizle
    // 
    charactersToRender.forEach((character) => {
        let { name, pic, homeworld } = character;

        let anaDiv = document.createElement("div");
        anaDiv.className = "card p-5 m-5 col-3 mx-auto ";
        anaDiv.style.width = "300px";
        anaDiv.style.backgroundColor='rgba(255, 255, 255, 0.5)'
        let image = document.createElement("img");
        image.className = "card-img-top img-fluid ";
        image.src = pic;

        let altDiv = document.createElement("div");
        altDiv.className = "card-body";

        let head = document.createElement("h5");
        head.className = "card-title";
        head.textContent = name;

        let place = document.createElement("p");
        place.className = "card-text";
        place.textContent = homeworld;

        altDiv.append(head);
        altDiv.appendChild(place);
        anaDiv.append(image);
        anaDiv.appendChild(altDiv);

        mainDiv.appendChild(anaDiv);

        
    });
}