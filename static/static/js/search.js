const urlParams = new URLSearchParams(window.location.search);
        const destination = urlParams.get('destination');
        const startDate = new Date(urlParams.get('startDate'));
        const endDate = new Date(urlParams.get('endDate'));
        const budget = urlParams.get('budget');
        const days = parseInt(urlParams.get('days'));
    
        document.getElementById('destination').textContent = `Destination: ${destination}`;
        document.getElementById('dates').textContent = `Dates: ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`;
        document.getElementById('budget').textContent = `Budget: ${budget}`;
        document.getElementById('days').textContent = `Number of Days: ${days}`;
    
        const tabsContainer = document.getElementById('dayTabs');
        const tabContents = document.getElementById('tabContents');
    
        for (let i = 1; i <= days; i++) {
            // Create tab button
            const tabButton = document.createElement('button');
            tabButton.textContent = `Day ${i}`;
            tabButton.classList.add('tablinks');
            if (i === 1) tabButton.classList.add('active');
            tabButton.onclick = function () { openTab(event, `day${i}`); };
            tabsContainer.appendChild(tabButton);
    
            // Create tab content
            const tabContent = document.createElement('div');
            tabContent.id = `day${i}`;
            tabContent.classList.add('tabcontent');
            if (i === 1) tabContent.classList.add('active');
    
            tabContent.innerHTML = `
    <div class="left-section">
        <h1>Day ${i} Itinerary</h1>
        <div id="itinerary-day${i}" class="details loading-effect">
            <div class="animated-background">
                <div class="loading-content">
                    <div class="loading-text-line" style="width: 90%;"></div>
                    <div class="loading-text-line" style="width: 80%;"></div>
                    <div class="loading-text-line" style="width: 85%;"></div>
                    <div class="loading-text-line" style="width: 75%;"></div>
                    <div class="loading-text-line" style="width: 88%;"></div>
                    <div class="loading-text-line" style="width: 82%;"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="map-section">
        <div id="map-day${i}" class="map loading-effect">
            <div class="animated-background"></div>
        </div>
        <div class="button-container">
            <a href="path/to/your/file.pdf" class="buttn btn-pdf">
                <i class="fas fa-file-pdf"></i> Download as PDF
            </a>
            <div class="button-container">
            <a href="#" class="buttn btn-whatsapp" onclick="shareOnWhatsApp()">
            <i class="fab fa-whatsapp"></i> Share on Whats
            </a>
            </div>
        </div>
    </div>
`;
function shareOnWhatsApp() {
    // Replace this URL with your actual domain and path to the PDF
    const pdfUrl = 'django/myapp/static/pdf/Harshan- Resume (1).pdf';
    const message = 'Check out this itinerary: ' + pdfUrl;
    const whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}
            tabContents.appendChild(tabContent);
        }
    
        function openTab(evt, dayId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dayId).style.display = "flex";
    evt.currentTarget.className += " active";

    // Generate itinerary when tab is opened
    const dayNum = dayId.replace('day', '');
    generateItinerary(dayNum);
}
    
        // API URL and Key for OpenWeatherMap
        const lat = 38.5; // Replace with your destination's latitude
        const lon = -78.5; // Replace with your destination's longitude
        const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=imperial&cnt=16&appid=${apiKey}`;
    
        // Fetch weather data and visualize it
        async function getWeatherForecast() {
            try {
                const response = await fetch(url);
                const result = await response.json();
    
                // Filter weather data based on selected dates
                const filteredForecast = result.list.filter(day => {
                    const forecastDate = new Date(day.dt * 1000).setHours(0, 0, 0, 0);
                    const start = startDate.setHours(0, 0, 0, 0);
                    const end = endDate.setHours(0, 0, 0, 0);
                    return forecastDate >= start && forecastDate <= end;
                });
    
                // Check if there are any forecasts available for the selected dates
                if (filteredForecast.length === 0) {
                    document.getElementById('weather-box').innerHTML = "<p>No weather data available for the selected dates.</p>";
                    return;
                }
    
                // Visualize the weather data
                visualizeWeather(filteredForecast);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                document.getElementById('weather-box').innerHTML = "<p>Error fetching weather data.</p>";
            }
        }
    
        // Function to visualize weather data
        function visualizeWeather(forecastList) {
            const weatherContainer = document.getElementById('weather-box');
            weatherContainer.innerHTML = ""; // Clear previous data
    
            forecastList.forEach(day => {
                const date = new Date(day.dt * 1000).toLocaleDateString(); // Convert timestamp to readable date
                const temp = day.temp.day; // Daytime temperature
                const description = day.weather[0].description; // Weather description
                const weatherIcon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`; // Weather icon
    
                // Create a weather card for each day
                const weatherCard = `
                    <div class="weather-card">
                        <p><strong>Date:</strong> ${date}</p>
                        <img src="${weatherIcon}" alt="${description}">
                        <p><strong>Temperature:</strong> ${temp}°F</p>
                        <p><strong>Description:</strong> ${description}</p>
                    </div>
                `;
    
                // Append the weather card to the container
                weatherContainer.innerHTML += weatherCard;
            });
        }
    
        // Call the function to get and display weather forecast
        getWeatherForecast();
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        document.getElementById('profile-pic').addEventListener('click', function() {
            const dropdownMenu = document.getElementById('dropdown-menu');
            const profileDetails = document.getElementById('profile-details');
            const settingsMenu = document.getElementById('settings-menu');

            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
                profileDetails.style.display = 'none';
                settingsMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });

        document.getElementById('show-profile').addEventListener('click', function(event) {
            event.stopPropagation();
            const profileDetails = document.getElementById('profile-details');
            profileDetails.style.display = profileDetails.style.display === 'block' ? 'none' : 'block';
        });

        document.getElementById('close-profile').addEventListener('click', function() {
            const profileDetails = document.getElementById('profile-details');
            profileDetails.style.display = 'none';
        });

        document.getElementById('upload-photo').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('profile-pic').src = e.target.result;
                    document.getElementById('profile-summary-pic').src = e.target.result;
                    document.getElementById('profile-details-pic').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });

        document.querySelector('#settings-icon').addEventListener('click', function() {
            const settingsMenu = document.getElementById('settings-menu');
            settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.getElementById('close-settings').addEventListener('click', function() {
            const settingsMenu = document.getElementById('settings-menu');
            settingsMenu.style.display = 'none';
        });

        window.onclick = function(event) {
            const dropdownMenu = document.getElementById('dropdown-menu');
            const profileDetails = document.getElementById('profile-details');
            const settingsMenu = document.getElementById('settings-menu');
            
            if (!event.target.matches('#profile-pic') && !event.target.closest('.dropdown-menu')) {
                dropdownMenu.style.display = 'none';
                profileDetails.style.display = 'none';
                settingsMenu.style.display = 'none';
            }
        };

        function toggleNightMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    const weatherSection = document.getElementById('weatherSection'); // Target weather section

    // Toggle night mode class on the body
    body.classList.toggle('night-mode');

    // Change icon and text color based on the current mode
    if (body.classList.contains('night-mode')) {
        modeIcon.textContent = '☀️';  // Sun icon for night mode
        body.style.color = 'white';    // Set text color to white for night mode
        body.style.backgroundColor = '#2C2C2C';  // Dark background color for night mode
        weatherSection.style.backgroundColor = '#444';  // Dark background for weather in night mode
    } else {
        modeIcon.textContent = '🌙';  // Moon icon for day mode
        body.style.color = 'black';   // Set text color to black for day mode
        body.style.backgroundColor = '#f4f4f4';  // Light background color for day mode
        weatherSection.style.backgroundColor = '#e0e0e0';  // Light background for weather in day mode
    }
}
function generateItinerary(dayNum) {
    // Add a loading effect
    const itineraryElement = document.getElementById(`itinerary-day${dayNum}`);
    itineraryElement.innerHTML = 'Loading...';

    // Fetch the itinerary from Django
    fetch(`/get-itinerary/${dayNum}/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Itinerary not found');
        }
        return response.json();
    })
    .then(data => {
        // Check if the data contains an error
        if (data.error) {
            itineraryElement.innerHTML = `<p>${data.error}</p>`;
        } else {
            // Display the fetched itinerary content
            const itineraryContent = `
                <h2>Day ${data.day}:</h2>
                <p>${data.itinerary.replace(/\n/g, '<br>')}</p>
            `;
            itineraryElement.innerHTML = itineraryContent;
        }

        // Remove loading effect from map
        const mapElement = document.getElementById(`map-day${dayNum}`);
        mapElement.classList.remove('loading-effect');
        mapElement.innerHTML = 'Map goes here'; // Replace with actual map implementation
    })
    .catch(error => {
        // Handle any errors
        itineraryElement.innerHTML = `<p>Error fetching itinerary: ${error.message}</p>`;
    });
}

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loadingEffect').style.display = 'none';
  }, 500); // Will hide the loading effect after 3 seconds
});


