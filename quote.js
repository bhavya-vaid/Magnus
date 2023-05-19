$(function (){
 const quotesApi = "https://api.quotable.io/random"

fetch(quotesApi)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const quoteText= data.content
        $('#quote').text(quoteText)
    })
})