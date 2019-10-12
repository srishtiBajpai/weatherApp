module.exports= async function()
{
    var axios = require("axios")
    var response = await axios.get(`http://ip-api.com/json/`);
    //console.log( response["data"]["city"])
    return response["data"]["city"]
}

module.exports();