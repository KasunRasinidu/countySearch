let countries =[] ;

let body = "";

var elem = document.getElementById("txtInput");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       search();
    }
}

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            console.log(element);

            countries.push(element.name.common.toLowerCase());
            // console.log(element.name.common);
            body += `
        <div class="col">
<div class="card shadow-sm" data-aos="flip-left">
  <img src="${element.flags.png}" alt="">
  <div class="card-body">
    <h5 class="card-text">${element.name.common}</h5>
    <p class="cart-text">Capital : ${element.capital}<br>Region : ${element.region}</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
      <a href="${element.maps.googleMaps}" ><button type="button" class="btn btn-sm btn-outline-secondary" >View in map</button></a> 
      </div>
      <small class="text-body-secondary area">Area : ${element.area}km<sup>2</sup></small>
    </div>
  </div>
</div>
</div> 
        `;
        });
        
        document.getElementById("row").innerHTML = body;
    })
    console.log(body);




function search() {
    let txtUserInput = document.getElementById("txtInput").value;
    console.log(txtInput);
    txtUserInput = txtUserInput.toLowerCase();
    let i=0;
    body="";
    let count=0;
    
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                // console.log(element);
                if (countries[i].includes(txtUserInput)) {
                    console.log(countries[i]);
                    count++;
                    body += `
        <div class="col">
<div class="card shadow-sm" >
  <img src="${element.flags.png}" alt="">
  <div class="card-body">
    <h5 class="card-text">${element.name.common}</h5>
    <p class="cart-text">Capital : ${element.capital}<br>Region : ${element.region}</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
      <a href="${element.maps.googleMaps}" ><button type="button" class="btn btn-sm btn-outline-secondary" >View in map</button></a> 
      </div>
      <small class="text-body-secondary area">Area : ${element.area}km<sup>2</sup></small>
    </div>
  </div>
</div>
</div> 
        `;
                }
                i++;
            });
            if(count==0){
                // body+=`<h1 class="find">Country does not exist...</h1>`
                Swal.fire("Country does not exist...");
                document.getElementById("txtInput").value="";
                search();
            }
            console.log(body);
            document.getElementById("row").innerHTML = body;
        })
}
