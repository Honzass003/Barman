const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTMwNzE1MTAxMzU1OTY2NDc2.DxKRLw.SeZQEt82JRoknOWgemYXEwthWb8'

bot.on('message', function(message){
    if(message.content == '!Vodka')
    {
        message.reply('Here u are <:vodka:528735563780718593>');
    }
});
bot.on('message', function(message){
        if(message.content == '!Chleba')
        {
            message.reply('Here enjoy <:chleba:529074069677539328>');
        }
});

bot.on('message', function(message){
    if(message.content == '!Energet')
    {
        message.reply('Here <:Energy_Drink:530731517324820493>');
    }
});

bot.on('message', function(message){
    if(message.content == '!Salám')
    {
        message.reply('Here better with bread :wink: <:salam:529011038532927508>');
    }
});

bot.on('message', function(message){
    if(message.content == '!Konzerva')
    {
        message.reply('Here u are Enjoy! :smile: <:turistova_radost:529289581540016148>');
    }
});

bot.on('message', function(message){
    if(message.content == '!Pivo')
    {
        message.reply('Břink! :beer:');
    }
});

bot.on('message', function(message){
    if(message.content == '!Kafe')
    {
        message.reply('Tired eh? :smirk: :coffee:');
    }
});

bot.on('message', function(message){
    if(message.content == '!Rum')
    {
        message.reply('Okey :tumbler_glass:');
    }
});

bot.on('message', function(message){
    if(message.content == '!Čaj')
    {
        message.reply(':tea:');
    }
});

bot.on('message', function(message){
    if(message.content == '!Víno')
    {
        message.reply(':flag_fr: :wine_glass:');
    }
});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);
