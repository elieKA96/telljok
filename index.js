const button = document.querySelector("#button");
const joke = document.querySelector("#jok");

const apikey = "fTC8+IRG3kVUNlg5No7jYA==rwADHzRg5miF1hLT";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

button.addEventListener('click', getJoke);

async function getJoke() {
    joke.textContent = "Updating..."
    const response = await fetch(apiURL, options);
    const data = await response.json();

    joke.textContent = `${data[0].joke}`;
    //console.log(data[0].joke);
}