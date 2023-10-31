function fetchCovid(){
    const queriedDate = document.querySelector('#date').value;
    const queriedState = document.querySelector('#state').value;
    console.log(queriedState);
   if (queriedState ==='' || queriedDate ==='') {
    alert('Por favor ingresa estado y fecha');
    return;
   }
   

   const url = `https://api.covidtracking.com/v1/states/${queriedState}/${queriedDate}.json`;
   console.log(url)

fetch(url)
  .then(response => response.json())
  .then((data) =>{
    console.log(data)
        const positive = data.positive;    
        const totalTestResults = data.totalTestResults;
        const death = data.death;
        document.querySelector('#covidInfo').innerHTML=
        `<p> Las cantidad de casos positivos el ${queriedDate} en ${queriedState} fue ${positive} para un total de ${totalTestResults} test realizados y con ${death} fallecidos</p>`
        ;

   })
   .catch (error=>{
    console.error();
   })
}