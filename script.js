
//------------API With Arrow Function -----------//

const newQoutes = () => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => loadQuotes(data))
}

const loadQuotes = quotes => {
    const element = document.getElementById('quote');
    element.innerText = quotes.quote;
}