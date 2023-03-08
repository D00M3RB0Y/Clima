const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e52c01534amshb66c4f51e499489p171cb7jsn4be06448604f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather2 = (city2) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather3 = (city3) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather4 = (city4) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather5 = (city5) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather6 = (city6) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city6, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            wind_degrees7.innerHTML = response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather7 = (city7) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city7, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp8.innerHTML = response.temp
            feels_like8.innerHTML = response.feels_like
            humidity8.innerHTML = response.humidity
            min_temp8.innerHTML = response.min_temp
            max_temp8.innerHTML = response.max_temp
            wind_speed8.innerHTML = response.wind_speed
            wind_degrees8.innerHTML = response.wind_degrees
            sunrise8.innerHTML = response.sunrise
            sunset8.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

const getWeather8 = (city8) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city8, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            temp9.innerHTML = response.temp
            feels_like9.innerHTML = response.feels_like
            humidity9.innerHTML = response.humidity
            min_temp9.innerHTML = response.min_temp
            max_temp9.innerHTML = response.max_temp
            wind_speed9.innerHTML = response.wind_speed
            wind_degrees9.innerHTML = response.wind_degrees
            sunrise9.innerHTML = response.sunrise
            sunset9.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

/*const getWeather2 = () => {
    const ciudades = ['Munich', 'Tokio', 'Paris', 'New York', 'Boston', 'Toronto', 'London']
    const temp = []

    ciudades.forEach((item) => {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + item, options)
        .then(response => response.json())
        .then( async(response) => {
            await temp.push(response)
            
        })
        .catch(err => console.error(err));
    })
    console.log('Prueba', temp)    
}*/

getWeather("Guanajuato")

getWeather2("Munich")
//getWeather3("Tokio")
//getWeather4("Paris")
//getWeather5("New York")
//getWeather6("Boston")
//getWeather7("Toronto")
//getWeather8("London")

