let arane = [
    {
        "title": "Cooking Date",
        "day": 31,
        "body": "Today, Arane came over to my house for our cooking date."
    },
    {
        "title": "Dinner at Arane's",
        "day": 7,
        "body": "I was finally able to join Arane for dinner at her place. We were joined by her mother, Akira."
    },
    {
        "title": "Move-In",
        "day": 1,
        "body": "Today, I moved into Portgrand City!"
    }
]

let akira = [
    {
        "title": "Fun in the Sun",
        "day": 40,
        "body": "Today, I went to the beach with Akira."
    },
    {
        "title": "Hospital",
        "day": 13,
        "body": "I went to the hospital to return Akira's umbrella, and got hit by a gurney!"
    },
    {
        "title": "Dinner at Arane's",
        "day": 7,
        "body": "I was finally able to join Arane for dinner at her place. We were joined by her mother, Akira."
    }
]

const entriesMap = {
    "arane": arane,
    "akira": akira
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
        clone.querySelector(".entry-title").innerHTML = `Day ${day} -- ${title}`;
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
    // TODO: implement displayEntries
    displayEntries(this.id);
}

function onLoad() {
    const elements = document.querySelectorAll(".names > li");
    for (const element of elements) {
        element.addEventListener("click", onClickName);
    }
    console.log("Done.");
}
