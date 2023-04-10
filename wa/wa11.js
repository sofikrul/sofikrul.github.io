const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', showAnswer);

const endpoint = 'https://api.chucknorris.io/jokes/random';

async function getQuote() {
  const response = await fetch(endpoint);
  try {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.value);
  } catch (err) {
    console.log(err);
    alert('Failed to fetch new trivia');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

function showAnswer() {
  const answerText = document.querySelector("#js-answer-text");
  answerText.textContent = "There is no answer for Chuck Norris jokes!";
}

getQuote();
