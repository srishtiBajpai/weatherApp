module.exports= async function(location){
var axios = require("axios")
var response= await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`);
var woeid= response["data"][0]["woeid"];
var weather =await axios.get(`https://www.metaweather.com/api/location/${woeid}`)
//console.log(weather["data"]["consolidated_weather"]);
return weather["data"]["consolidated_weather"]
}

module.exports("delhi")