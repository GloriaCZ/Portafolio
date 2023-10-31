function fetchWeather(){
    const apiKey = '2167e1e09f94b28c46c032051633f990';
    const queriedCity = document.querySelector('#city').value;

   if (queriedCity === '') {
    alert('Por favor ingresa la ciudad');
    return;
   }
   

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}&appid=${apiKey}&units=metric`;

   fetch(url)
   .then(response => response.json())
   .then(data =>{
        const temperature = data.main.temp;
        const feelslike = data.main.feels_like;
        /* const humidity = data.mai */
        /* console.log(temperature); */
        document.querySelector('#weatherInfo').innerHTML=
        `<p> La temperatura de ${queriedCity} es ${temperature} con sensacion ${feelslike}</p>`
        ;

   })
   .catch (error=>{
    console.error();
   })
}


