const Discord = require("discord.js");
const  client = new Discord.Client();

//¡PARA ENCENDER ----> node mybot.js dentro de la carpeta seoulz-bot

client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!help")) {
    message.channel.send("`-!help : para ayuda`");
    message.channel.send("`-!info : para información`");
    message.channel.send("`-!soyguay : ya lo veras...`");
    message.channel.send("`-!bagolas : petale la gráfica a bagolas!`");
    message.channel.send("`-!pene : dibuja el pene de obama`");
    message.channel.send("`-!cringe : solo cringe.`");

  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!ping")) {
    message.channel.send("pong!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!info")) {
    message.channel.send("Este bot es de seoulz!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!soyguay")) {
    message.author.send("Si tío eres super guay, de echo más guay que ivi");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!bagolas")) {
    message.channel.send("gráfica de bagolas petada con éxito!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!pene")) {
    message.channel.send("8=======================D");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!cringe")) {
    message.channel.send("https://i.ytimg.com/vi/WvXka-LeGmQ/maxresdefault.jpg");
  }
});



client.login("NDE4NDcxMTU5NTQyMDU0OTI4.DXiDMA.RuFWXgLO-uN5EOYS0ZvC7zKzkis");
