const apiKey ='d0cbce2ee79c47893342d05b00bffcc7';
const apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const weathericon=document.querySelector('.weather-icon')
async function checkweather(city){
    const response= await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.err').style.display="block";
        document.querySelector('.weather').style.display="none";

    }
    else{
    document.querySelector('.err').style.display="none";
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp ) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %" ;
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) + " Km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src='images/clouds.png'
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src='images/snow.png';
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src='images/clear.png';
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src='images/rain.png';
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src='images/drizzle.png';
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src='images/mist.png';
    }
    document.querySelector('.weather').style.display="block";

    }
    
}


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        checkweather(searchbox.value);
    }
});
searchbtn.addEventListener('click', ()=> {
    checkweather(searchbox.value);
});

