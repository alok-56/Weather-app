var input = document.getElementById("inpt");
var state = document.getElementById("state");
var degree = document.getElementById("deg");
var humidity = document.getElementById("humi");
var btn = document.getElementById("btn");
var body =document.getElementsByTagName("body");
var a= 273;
var b;
btn.addEventListener("click",function(){
    let city = input.value;
    if(!city)
    {
        return alert("please enter correct city name")
    }
    btn.innerHTML= "searching";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4db2363a90ac32c6594f9d7d21198dcf`)
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        state.innerHTML = result.name;
        degree.innerHTML= result.main.temp + "<br>" + "kelvin"
        humidity.innerHTML = result.main.humidity +"%"+ "<br>"+ "humidity";        
        btn.innerHTML= "searched";
        console.log(result)
       
    }).catch(function(err){
        state.innerHTML ="not found";
        humidity.innerHTML = "not found"
        degree.innerHTML = "not found";
        btn.innerHTML= "invailed city"
    })
})
