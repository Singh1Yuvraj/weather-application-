const API_KEY= `3265874a2c77ae4a04bb96236a642d2f`
const form =document.querySelector("form")
const Search=document.querySelector("#Search")
const weather=document.querySelector("#weather")
// const API = 'https://api.openweathermap.org/data/2.5/weather?
// q={city}&appid={API_KEY}&units=metric'

// const IMG_URL= https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png

const getWeather = async (city) => {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=  await fetch(url);
    const data =await response.json();
    console.log(data);
    return showWeather(data)
}
// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric
const showWeather = (data) => {
    weather.innerHTML =`
    <div>
    <img src="images.png" alt="">
</div>
<div>
    <h2>${data.main.temp}</h2>
    <h4>clear</h4>
</div>`
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(Search.value);
        event.preventDefault();
    }
)