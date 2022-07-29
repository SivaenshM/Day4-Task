//Q2)   Use the rest countries 'API URL -> https://restcountries.eu/rest/v2/all and display all the contries flag in the console

let  countryFlagDiv = document.getElementById('countryFlag');  //250 number

const getAllflags = () =>   {
    let totalCountries = 250;
    for(let i=0;i<totalCountries;i++)  {
        fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(json => countryFlagDiv.innerHTML 
        += `<div id="coloum"> <img src='${json[i].flags.png}' height="100px" width="100px"/> </div>`);
        fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(json => console.log(json[i].flags.png));
        
    }   

}
//fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(json => countryFlagDiv.innerHTML =`<img src='${json[0].flags.png}'/>`);

//fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(json => console.log(json[0].flags.png));
//fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(json => console.log(json.length));

getAllflags();


