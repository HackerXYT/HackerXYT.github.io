document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem("houseAuth") === 'ready') {
        getStates1()
        getStates2()
        // Function to handle the state change
        function handleDeviceToggle(event) {
            const checkbox = event.target;
            const isChecked = checkbox.checked;
            const deviceName = checkbox.nextElementSibling.querySelector('strong').textContent;
            const state = isChecked ? 'online' : 'offline';

            console.log(`Device ${deviceName} is now ${state}`);
            if (deviceName === "Wall Leds") {
                let setIT;
                if (state === 'online') {
                    setIT = "on"
                } else {
                    setIT = "off"
                }
                console.log("Changing State Of Wall Leds")
                changeDev(setIT, deviceName)
            } else if (deviceName === "Bed Leds") {
                let setIT;
                if (state === 'online') {
                    setIT = "on"
                } else {
                    setIT = "off"
                }
                console.log("Changing State Of Wall Leds")
                changeDev(setIT, deviceName)
            } else if (deviceName === "Spotify") {
                //window.open(authUrl);
                window.location.href = authUrl
            }
            // Add any additional functionality here
        }

        // Select all checkboxes and add event listeners
        const checkboxes = document.querySelectorAll('.appliance input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleDeviceToggle);
        });
    } else {
        alert("Now Authenticating..")
        fetch(`https://data.evoxs.xyz/house?username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&method=authenticate`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(item => {
                if(item.status !== "403") {
                    localStorage.setItem("apiKey", item.apikey)
                    localStorage.setItem("bedID", item.bed)
                    localStorage.setItem("wallID", item.wall)
                    localStorage.setItem("clientId", item.clientId)
                    localStorage.setItem("houseAuth", "ready")
                    setTimeout(function() {
                        window.location.reload()
                    }, 1000)

                } else {
                    //alert("Access Denied")
                    window.location.href = "../../../AuthFailure/"
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

});

window.addEventListener('load', () => {
    function getCurrentDate() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentDate = new Date();
        const day = currentDate.getDate();
        const monthIndex = currentDate.getMonth();
        const year = currentDate.getFullYear();
    
        return `${day} ${months[monthIndex]} ${year}`;
    }
    
    const formattedDate = getCurrentDate();
    document.getElementById("currDate").innerHTML = formattedDate
    const weatherTypeElement = document.getElementById('weatherType');
    const weatherIconElement = document.getElementById('weatherIcon');

    // Function to fetch weather data
    function getWeather() {
      // You can replace 'YOUR_API_KEY' with your actual API key
      const apiKey = '7f6a18c825301e553a8e40a09e617863';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Athens&appid=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherDescription = data.weather[0].main;
          const weatherIcon = data.weather[0].icon;

          // Update HTML elements
          weatherTypeElement.innerHTML = weatherDescription;
          weatherIconElement.innerHTML = `<img style="filter: invert(100%);" src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">`;

          const weatherTemp = data.main.temp
          const celsiusWeather = Number(weatherTemp) - 273.15
          document.getElementById("degrees").innerHTML = `${Math.floor(celsiusWeather)}°<sup>C</sup>` 

          const humidity = data.main.humidity
          document.getElementById("humid").innerHTML = `${Math.floor(humidity)}%` 

          const clouds = data.clouds.all
          document.getElementById("clouds").innerHTML = `${clouds}` 

        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
        });
    }

    // Call the function to get weather data on page load
    getWeather();
  });

function changeDev(setIt, dev) {
    let devId;
    if (dev === "Wall Leds") {
        devId = localStorage.getItem("wallID")
    } else if (dev === "Bed Leds") {
        devId = localStorage.getItem("bedID")
    }
    const url = 'https://developer-api.govee.com/v1/devices/control';
    const apiKey = localStorage.getItem("apiKey");  // Replace with your Govee API key

    // Device information
    const device = {
        device: devId,  // Replace with your Govee device ID
        model: 'H6141'  // Replace with your Govee device model
    };

    // Define the request payload to turn on the device
    const data = {
        device: device.device,
        model: device.model,
        cmd: {
            name: 'turn',
            value: setIt
        }
    };

    // Make the fetch request to the Govee API
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Govee-API-Key': apiKey
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Success') {
                console.log('LED device is now ON.');
            } else {
                console.error('Failed to turn on the LED device:', data);
                if (dev === "Wall Leds") {
                    document.getElementById("lamp").checked = ""
                } else if (dev === "Bed Leds") {
                    document.getElementById("router").checked = ""
                } else {
                    console.log("Unknown Device!")
                }
            }
        })
        .catch(error => {
            console.log('Device:', dev); // Log the value of dev
            if (dev === "Wall Leds") {
                document.getElementById("lamp").checked = '';
            } else if (dev === "Bed Leds") {
                document.getElementById("router").checked = '';
            } else {
                console.log("Unknown Device!");
            }
            console.error('Error:', error);
            if (error.toString().includes("Rate")) {
                alert("You have been rate limited")
            }

        });
}

function getStates1() {
    const url = 'https://developer-api.govee.com/v1/devices/state';
    const apiKey = localStorage.getItem("apiKey");  // Replace with your Govee API key
    const device = {
        device: localStorage.getItem("bedID"),  // Replace with your Govee device ID
        model: 'H6141'  // Replace with your Govee device model
    };
    const requestUrl = `${url}?device=${device.device}&model=${device.model}`;
    // Make the fetch request to the Govee API
    fetch(requestUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Govee-API-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const properties = data.data.properties;
                const powerState = properties.find(property => property.hasOwnProperty('powerState'));
                if (powerState) {
                    console.log('Power State:', powerState.powerState);
                    if (powerState.powerState === "on") {
                        document.getElementById("lamp").checked = "true"
                    } else {
                        //do nothing everything's set
                    }
                } else {
                    console.log('Power state information not found.');
                }
            } else {
                console.error('Failed to fetch device state:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (error.toString().includes("Rate")) {
                alert("You have been rate limited")
            }
        });

}

function getStates2() {
    const url = 'https://developer-api.govee.com/v1/devices/state';
    const apiKey = localStorage.getItem("apiKey");  // Replace with your Govee API key
    const device = {
        device: localStorage.getItem("wallID"),  // Replace with your Govee device ID
        model: 'H6141'  // Replace with your Govee device model
    };
    const requestUrl = `${url}?device=${device.device}&model=${device.model}`;
    // Make the fetch request to the Govee API
    fetch(requestUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Govee-API-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const properties = data.data.properties;
                const powerState = properties.find(property => property.hasOwnProperty('powerState'));
                if (powerState) {
                    console.log('Power State:', powerState.powerState);
                    if (powerState.powerState === "on") {
                        document.getElementById("router").checked = "true"
                    } else {
                        //do nothing everything's set
                    }
                } else {
                    console.log('Power state information not found.');
                }
            } else {
                console.error('Failed to fetch device state:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (error.toString().includes("Rate")) {
                alert("You have been rate limited")
            }
        });

}

const client_id = localStorage.getItem("clientId") // Replace with your client ID
const redirect_uri = 'https://evoxs.xyz/evox-epsilon/Home/dist/'; // Replace with your redirect URI
const scopes = 'user-read-playback-state user-read-currently-playing';

const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;



function getAccessToken() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
}

const accessToken = getAccessToken();
if (accessToken) {
    console.log('Access Token:', accessToken);
    // You can now use the access token to fetch the currently playing track
    getCurrentlyPlayingTrack(accessToken);
} else {
    console.log('Access token not found.');
}

// Function to get currently playing track
async function getCurrentlyPlayingTrack(token) {
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.status === 204) {
        console.log('No track currently playing.');
    } else if (response.status === 200) {
        document.getElementById("fridge").checked = "true"
        const data = await response.json();
        console.log('Currently playing track:', data.item.name);
        document.getElementById("songName").innerHTML = data.item.name
        console.log('Artists:', data.item.artists.map(artist => artist.name).join(', '));
        document.getElementById("artists").innerHTML = data.item.artists.map(artist => artist.name).join(', ')
    } else {
        console.error('Error fetching currently playing track:', response.status);
    }
}