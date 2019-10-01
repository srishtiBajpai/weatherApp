module.exports= function()
{
    console.log(`weather [command] <options>
    today .............. show weather for today
    forecast ........... show 5-day weather forecast
    version ............ show package version
    help ............... show help menu for a command
    NO OTHER ALLOWED COMMANDS:)
    `)
}
// help function will be called if  a) no cmd is passed or b) help cmd is passed
