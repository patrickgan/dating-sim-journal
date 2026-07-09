let arane = [
    {
        "title": "Cooking Date",
        "day": 31,
        "body": "Today, Arane came over to my house for our cooking date.",
        "characters": [
            "arane"
        ]
    },
    {
        "title": "Dinner at Arane's",
        "day": 7,
        "body": "I was finally able to join Arane for dinner at her place. We were joined by her mother, Akira.",
        "characters": [
            "arane",
            "akira"
        ]
    },
    {
        "title": "Move-In",
        "day": 1,
        "body": "Today, I moved into Portgrand City!",
        "characters": [
            "arane",
            "neruko"
        ]
    }
]

let akira = [
    {
        "title": "Fun in the Sun",
        "day": 40,
        "body": "Today, I went to the beach with Akira.",
        "characters": [
            "akira"
        ]
    },
    {
        "title": "Hospital",
        "day": 13,
        "body": "I went to the hospital to return Akira's umbrella, and got hit by a gurney!",
        "characters": [
            "akira"
        ]
    },
    {
        "title": "Dinner at Arane's",
        "day": 7,
        "body": "I was finally able to join Arane for dinner at her place. We were joined by her mother, Akira.",
        "characters": [
            "arane",
            "akira"
        ]
    }
]

const entriesMap = {
    "arane": arane,
    "akira": akira
}

const charactersMap = {
    "arane": "purple",
    "akira": "pink",
    "neruko": "lightblue",
}

function displayEntries(id) {
    const entriesElement = document.querySelector(".entries");
    const template = document.querySelector(".entries > li");
    entriesElement.innerHTML = "";
    // TODO: implement fetch const entriesJson = fetch(`./entries/${id}.json`)
    const entries = entriesMap[id];
    for (const entry of entries) {
        const clone = template.cloneNode(true);
        const title = entry["title"];
        const day = entry["day"];
        const body = entry["body"];
        const characters = entry["characters"];
        clone.querySelector(".entry-title").innerHTML = `Day ${day} -- ${title}`;
        clone.querySelector(".characters-list").innerHTML = "";
        for (const character of characters) {
            const characterNode = document.createElement("div");
            characterNode.style.backgroundColor = charactersMap[character];
            characterNode.className = "entry-character";
            clone.querySelector(".characters-list").appendChild(characterNode);
        }
        clone.querySelector(".entry-body").innerHTML = body;
        entriesElement.appendChild(clone);
    }
}

function fetchJSONData() {
    fetch(`./entries/arane.json`)
        .then(response => {
            // TODO: implement fetch and parse
        })
}

function onClickName(e) {
    const selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    this.classList.add("selected");
    displayEntries(this.id);
}

function onLoad() {
    const elements = document.querySelectorAll(".names > li");
    for (const element of elements) {
        element.addEventListener("click", onClickName);
    }

    const selected = document.querySelector(".selected");
    displayEntries(selected.id);

    console.log("Done.");
}
