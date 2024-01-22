export async function load({ params }) {
    let userData = {};
    let entries = [];
    let userEntries = [];
    let challenges = {};

    function insertUserEntries() {
        entries.forEach(entry => {
            if (entry.username === params.profile) {
                userEntries.push(entry);
            }
        });
    }


    await fetch("http://localhost:3001/acc/username/" + params.profile)
        .then((response) => response.json())
        .then((data) => (userData = data[0]));
    // await fetch("http://localhost:3001/acc/username/" + params.profile)
    //     .then((response) => response.json())
    //     .then((data) => (userData = data[0]));
    await fetch("http://localhost:3001/entries")
        .then((response) => response.json())
        .then((data) => (entries = data))
        .then(insertUserEntries);
        console.log(userEntries);
    return { userData, jCount: userEntries.length, challenges };
}

