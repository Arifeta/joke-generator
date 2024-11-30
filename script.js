const jokeContainer = document.getElementById("joke-container");
const jokeBtn = document.getElementById("fetch-joke-btn");

const getJoke = async function () {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );
    const data = await res.json();

    const joke = data[0];

    jokeContainer.innerHTML = `<strong>${joke.setup}</strong><br>${joke.punchline} 😁`;
  } catch (error) {
    jokeContainer.textContent = "Oops! Something went wrong. Please try again.";
  }
};

jokeContainer.textContent = "you gonna laugh loud";
jokeBtn.addEventListener("click", getJoke);
