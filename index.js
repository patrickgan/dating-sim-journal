let arane = [
    {
        "title": "Move-In",
        "day": 1,
        "body": "Today, I moved into Portgrand City!"
    },
    {
        "title": "Dinner at Arane's",
        "day": 7,
        "body": "I was finally able to join Arane for dinner at her place. We were joined by her mother, Akira."
    },
    {
        "title": "Cooking with Arane",
        "day": 31,
        "body": "Today, Arane came over to my house for our cooking date."
    }
]

const entriesMap = {
    "arane": arane
}

function displayEntries(id) {
    const element = document.querySelector("#entries");
    // TODO: implement fetch const entriesJson = fetch(`./entries/${id}.json`)
    const entries = entriesMap[id];
    for (const entry of entries) {
        const temp = document.createElement('div');
    }
}

function fetchJSONData() {
    fetch(`./entries/arane.json`)
        .then(response => {
            // TODO: implement fetch and parse
        })
}

