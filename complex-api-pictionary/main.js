let userAnswer = prompt("What word or term do you want to look up?")

fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userAnswer}?key=d65ccff0-b331-48f7-b296-632993860725`)
    .then(response => response.json())
    .then(data=> {
      console.log(data);
      document.querySelector('h2').innerHTML = "You typed: " + userAnswer
      document.querySelector('span').innerHTML = userAnswer + " is a(n): " + data[0].fl
      document.getElementById('middle').innerHTML = "Definition: " + data[0].shortdef

      fetch(`https://pixabay.com/api/?key=18202356-66eac1bb50770104efc7f185f&q=${userAnswer}&image_type=photo`) //select random
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if(data === undefined){
              document.querySelector('img').innerHTML = "Sorry, there is no image for: " + userAnswer
            }
            document.querySelector('img').src = data.hits[0].previewURL
            // document.querySelector('h3').innerHTML = random.meals[0].strMeal
          })

    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
