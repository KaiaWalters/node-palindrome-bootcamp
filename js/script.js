
document.querySelector("button").addEventListener('click', makeRequest)//only change went from makeRequest() to current

function makeRequest(){

  const submission = document.querySelector("input").value;
  const backwards = submission.split(' ').join('')

  fetch(`/api?word=${backwards}`)
    .then(response => response.json())
    .then((data) => {
    console.log(data);
    document.querySelector("#response").textContent = data.palindrome

  //  document.querySelector("img").src =  "images/tacocat.png"

 });//document.querySelector("img").src =  "images/download.jpeg"
  }

//exact not the problem
