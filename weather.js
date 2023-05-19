$(function(){
    //check if browser supports location
    //if yes, we will ask browser for loc
    //call api with loc details n get weather data
    function getLocation(callback){
        if(!navigator.geolocation){
            console.log("geolocation not supp by browser")
            return
        }
        function success(position){
            const lat=position.coords.latitude;
            const long=position.coords.longitude;
            callback(lat,long)
        }
        function error(){
            console.log("unable to get loc")
        }
        navigator.geolocation.getCurrentPosition(success,error)
    
    }
    getLocation(function(lat,long){
        const domain=`https://api.openweathermap.org/data/2.5/onecall`
        const apiKey=`c2f90a8e060cf9d5b4a27887f9984422`
        const api=`${domain}?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
        fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data)
                console.log(data.current.temp)
                console.group(data.current.weather[0].icon)
                $('#temperature').text(data.current.temp)
                const imageUrl='https://openweathermap.org/img/wn/'
                $('#weather-icon').attr("src",`${imageUrl}${data.current.weather[0].icon}.png`)
                
            })

    })
})