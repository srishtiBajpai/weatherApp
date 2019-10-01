module.exports=async function(location){

    var getlocation= require("../utilities/location")
    var getweather = require("../utilities/weather")
    
    var mylocation=await getlocation()
    var weather = await getweather(mylocation)
    console.log(`Forecast for ${mylocation}:`)
    for(var i=0;i<weather.length;i++)
    {
    var date= weather[i]["applicable_date"]
    var lowtemp= (Math.ceil(weather[i]["min_temp"]))
    var hightemp= (Math.ceil(weather[i]["max_temp"]))
    var cond = weather[i]["weather_state_name"]
    console.log(`    ${date} - Low: ${lowtemp}° | High: ${hightemp}° | ${cond}`)

    }
    
    
    
                 
    }