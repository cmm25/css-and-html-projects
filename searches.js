var resultsDiv = document.getElementById('results');

function searchConcerts() {
  var locationInput = document.getElementById('location-input');
  var location = locationInput.value;

  // Clear previous search results
  resultsDiv.innerHTML = '';

  var apiKey = 'm4oK_Vp3Nnt-_sOAE8-cse3qifQzZLcbFhPNISU9';
  var url = `https://api.predicthq.com/v1/events/?category=concerts&country=KE, UG,US&q=${location}`;

  // Make a request to the PredictHQ API
  fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
    .then(response => response.json())
    .then(data => displayConcerts(data))
    .catch(error => console.error('Error:', error));
}

function displayConcerts(data) {
    if (data.results.length === 0) {
      resultsDiv.innerHTML = 'No concerts found.';
    } else {
      data.results.forEach(event => {
        var eventCard = document.createElement('div');
        eventCard.classList.add('card');
    
        var title = document.createElement('h2');
        title.textContent = event.title;
        eventCard.appendChild(title);
        
        var startDateTime = new Date(event.start);
        var endDateTime = new Date(event.end);
    
        var date = document.createElement('p');
        date.textContent = `Date: ${startDateTime.toDateString()}`;
        eventCard.appendChild(date);
    
        var time = document.createElement('p');
        time.textContent = `Time: ${startDateTime.toLocaleTimeString()} - ${endDateTime.toLocaleTimeString()}`;
        eventCard.appendChild(time);
    
        var exitButton = document.createElement('button');
        exitButton.textContent = 'Exit';
        exitButton.classList.add('exit-btn');
        exitButton.addEventListener('click', function() {
          resultsDiv.innerHTML = ''; // Clear the search results
        });
        eventCard.appendChild(exitButton);
    
        resultsDiv.appendChild(eventCard);
      });
    }
  }
  