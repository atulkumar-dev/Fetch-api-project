fetch('https://dummyjson.com/qufafaotes')
.then(response => console.log(response))
// .then(data =>{
//     const list = document.getElementById("quotes-list");
//     let output = '';

//     for(let i=0;i<data.quotes.length;i++){
//         const quotes = data.quotes[i];
//         output += `<li>${quotes.quote}</br>- ${quotes.author}</li></br>`
//     }
//     list.innerHTML = output;

// })