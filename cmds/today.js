module.exports=async function(location){

var getlocation= require("../utilities/location")
var getweather = require("../utilities/weather")

var mylocation= location||await getlocation()
var weather = await getweather(mylocation)

var temp= (Math.ceil(weather[0]["the_temp"]))
var cond = weather[0]["weather_state_name"]
console.log(`Current conditions in ${mylocation}
             ${temp} °C ${cond}`)
}