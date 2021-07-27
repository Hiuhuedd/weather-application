//api data
let weather = {
    apikey: '52e82a9a52cbdff30d47e1bde40f01ed',
    fetchWeather: function(city) {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' +
                city +
                '&units=metric&appid=' +
                this.apikey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        var { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg> ' + name;

        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerHTML = 'Wind speed: ' + speed + 'Km/h';
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.weather').classList.remove('loading');
        //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + name + "')"
        this.fahrenheit(temp)
        this.celsius(temp)
        console.log(temp)
    },
    search: function() {
        this.fetchWeather(document.querySelector('.searchbar').value);
    },


    fahrenheit: function(temp) {


        let temperatures = ((temp * 9 / 5) + 32)
        document.querySelector('.temp').innerText = Math.floor(`${temperatures}`) + ' °F';
        console.log(Math.floor(`${temperatures}`))
        isNaN(`${temperatures}`)
    },
    celsius: function(temp) {
        document.querySelector('.temp').innerText = Math.floor(temp) + ' °C';
        console.log(Math.floor(temp))
    },
}
document.querySelector('.search button').addEventListener('click', function() { weather.search() });
document.querySelector('.searchbar').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') { weather.search() }
});
document.querySelector('.temp').addEventListener('click', () => {
    if (5 < 8) { weather.fahrenheit() } else { weather.celsius() }
});

//document.querySelector('.temp').addEventListener('click', function() { weather.celsius() });
weather.fetchWeather('nairobi');