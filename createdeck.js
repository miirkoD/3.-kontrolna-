var Karte = [{
        name: "Blue-Eyes White Dragon",
        type: "Legendary Dragon",
        attribute: "Divine",
        level: 8,
        imgsrc: "decks/Blue Eyes White Dragon.jpg"
    }, {
        name: "Dark Magician",
        type: "Normal",
        attribute: "Dark",
        level: 7,
        imgsrc: "decks/Dark magician.jpg"
    }, {
        name: "Kuribah",
        type: "Fiend",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/kuribah.png"
    }, {
        name: "Winged Kuriboh",
        type: "Fairy",
        attribute: "Light",
        level: 10,
        imgsrc: "decks/winged kuribo.png"

    },
    {
        name: "Rainbow Kuriboh",
        type: "Fiend",
        attribute: "Light",
        level: 1,
        imgsrc: "decks/rainbow kuriboh.jpg"

    }, {
        name: "Kuriboo",
        type: "Fiend",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/kuriboo.jpg"

    },
    {
        name: "Kuribee",
        type: "Fiend",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/kuribee.png"

    },
    {
        name: "Astral Kuriboh",
        type: "Fiend",
        attribute: "Light",
        level: 1,
        imgsrc: "decks/astral kuriboh.jpg"

    }, {
        name: "Right Arm of the Forbidden One",
        type: "Spellcard",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/right arm.jpeg"

    },
    {
        name: "Left Arm of the Forbidden One",
        type: "Spellcard",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/left arm.jpeg"
    },
    {
        name: "Right Leg of the Forbidden One",
        type: "Spellcard",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/right leg.png"
    },
    {
        name: "Left Leg of the Forbidden One",
        type: "Spellcard",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/left leg.jpeg"

    },
    {
        name: "Exodia the Forbidden One",
        type: "Spellcard",
        attribute: "Dark",
        level: 1,
        imgsrc: "decks/exodia.jpg"

    },
    {
        name: "Obelisk the Tormentor",
        type: "Divine-Beast",
        attribute: "Divine",
        level: 10,
        imgsrc: "decks/obelisk.jpeg"
    }

]
var rrr = JSON.parse(localStorage.getItem('cards'));
if (rrr == '' || rrr == null) {
    localStorage.setItem('cards', JSON.stringify(Karte));
}


Loading();

function Loading() {

    document.getElementById("cardHolder").innerHTML = ""
    var CardList = JSON.parse(localStorage.getItem('cards'));


    CardList.forEach(el => {

        div1 = document.createElement("div");

        div1.className = "col-md-3";

        div2 = document.createElement("div");

        div2.className = "Karta";

        img = document.createElement("img");

        img.src = el.imgsrc;

        unutrasnjiDiv = document.createElement("div");

        p1 = document.createElement("p");

        p1.className = "KartaTekst";

        p1.innerText = el.name;

        btn = document.createElement("button");

        btn.innerText = "ADD";

        unutrasnjiDiv.append(p1);

        unutrasnjiDiv.append(btn);

        div1.append(div2);

        div2.append(img);

        div2.append(unutrasnjiDiv);
        //document.getElementById("cardHolder").append(div1);

        Dark = document.getElementById("Dark");
        Light = document.getElementById("Light");
        Earth = document.getElementById("Earth");
        Divine = document.getElementById("Divine");
        Sve = document.getElementById("Sve");

        if (Sve.checked || Dark.checked || Light.checked || Earth.checked || Divine.checked) {
            if (Sve.checked) {
                if (el.attribute != null)
                    document.getElementById("cardHolder").append(div1);
            }
            if (Dark.checked) {
                if (el.attribute == "Dark")
                    document.getElementById("cardHolder").append(div1);
            }
            if (Light.checked) {
                if (el.attribute == "Light")
                    document.getElementById("cardHolder").append(div1);

            }
            if (Earth.checked) {
                if (el.attribute == "Earth")
                    document.getElementById("cardHolder").append(div1);
            }
            if (Divine.checked) {
                if (el.attribute == "Divine")
                    document.getElementById("cardHolder").append(div1);
            }
        }

    });
}

var cardList = document.getElementById("cardList");
var allCards = JSON.parse(localStorage.getItem('cards'));

function printCards(CARD_LIST) {
    cardList.innerHTML = "";
    CARD_LIST.forEach(element => {
        cardList.innerHTML += "<li> Karta sa nazivom " + element.name + "i nivom " + element.level + "</li>";

    });

}
printCards(allCards);


function Pretraga() {
    var searchText = document.getElementById("searchText").value;
    var CardsView = []
    allCards.forEach(element => {
        if (element.name.includes(searchText)) {
            CardsView.push(element)
        }
    });

    printCards(CardsView);
}


function createNewCard() {
    naziv = document.getElementById("IdName");
    type = document.getElementById("IdType");
    attribute = document.getElementById("IdAttribute");
    lvl = document.getElementById("IdLvl")
    var newCard = {
            name: naziv.value,
            type: type.value,
            attribute: attribute.value,
            level: lvl.value,
            imgsrc: "decks/polimerizacija.jpg"
        }
        // console.log(newCard)

    var store = JSON.parse(localStorage.getItem('cards'));
    store.push(newCard);
    //Object.assign(store, newCard);
    console.log(store);
    localStorage.setItem('cards', JSON.stringify(store));

    Loading()
}