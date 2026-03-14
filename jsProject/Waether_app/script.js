    const cityInput = document.getElementById("city-input");
    const weatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.querySelector(".weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMassage = document.getElementById("error-massage");

    const API_KEY = "04b7afa2009cfdd91b44e48abf7e8b08";


    weatherBtn.addEventListener('click',async ()=>{
        const city = cityInput.value.trim();
        if(!city) return;
        
        // it may throw some error
        // server/database always in oanother continent
        try { 
            const wetherData = await getFetchData(city)
             displayData(wetherData);
        } catch (error) {
            showError();
        }


    })


   async function getFetchData(city) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const response = await fetch(URL)

        console.log(response);

        if(!response.ok){
            throw new Error('City not found out')
        }

       const data = await response.json()
       return data
    }

    function displayData(wetherData) {
        console.log(wetherData);
        
        const {weather,main,name} = wetherData;
         cityNameDisplay.textContent = name
         temperatureDisplay.textContent = `temperature: ${main.temp}`;
         descriptionDisplay.textContent = `weather: ${weather[0].description}`
    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMassage.classList.add('hidden')
    }

