const chara = ["Goku (enfant)", "Goku base", "Goku Kaioken", "Goku SSJ", "Goku SSJ2", "Goku SSJ3", "Goku SSJ4", "Goku SSJG", "Goku SSJB", "Goku SSJB x Kaioken",
"Vegeta base", "Vegeta SSJ", "Vegeta SSJ2", "Vegeta SSJ4", "Vegeta SSJG", "Vegeta SSJB",
"Gohan base (enfant)", "Gohan SSJ", "Gohan SSJ2", "Gohan Ultime", "Gohan base (futur)", "Gohan SSJ (futur)",
"Freezer 1ère forme", "Freezer 2ème forme", "Freezer 3ème forme", "Freezer forme finale", "Freezer forme finale puissance max", "Golden Freezer",
"Cell 1ère forme", "Cell 2ème forme", "Cell forme parfaite", "Cell Parfait",
"Majin Buu (gros)", "Super Buu", "Buuhan", "Kid Buu",
"Piccolo (sans kami)", "Piccolo fusion avec kami",
"Vegetto base", "Super Vegetto", "Vegetto Blue",
"Super Gogeta", "Gogeta base", "Gogeta SSJ", "Gogeta SSJB",
"Gotenks base", "Gotenks SSJ", "Gotenks SSJ3",
"Black Goku base", "Black Goku SSJR",
"Caulifla SSJ", "Kale SSJ", "Cabbe SSJ",
"Goten SSJ", "Trunks SSJ (enfant)",
"Trunks base (futur)", "Trunks SSJ (futur)", "Trunks SSJ2 (futur)", "Trunks Ikari (futur)",
"Baddack base", "Baddack SSJ",
"Broly SSJL", "Broly base (DBS)", "Broly : furieux (DBS)", "Broly SSJ (DBS)",
"Cooler base", "Cooler forme finale", "Metal Cooler",
"Bojack", "Bojack full power",
"C-21 base", "C-21 maléfique",
"Baby Vegeta", "Super Baby 2",
"Kafla SSJ2",
"Krillin", "Yamcha", "Ten Shin Han", "Bulma", "Chichi", "Videl",
"C-18", "C-17", "C-16", "C-15", "C-14", "C-19", "C-20",
"Rosie", "Kakunsa", "Ribrianne", "Raditz", "Super C-17", "Super Janemba",
"Gattai Zamasu", "Zamasu", "C-13", "C-13 fusion", "Great Saiyaman 1", "Great Saiyaman 2",
"Ginyu", "Goku Ginyu", "Hit", "Nappa", "Rildo", "Dabra", "Mister Satan", "Chilled", "Thalès", "Pan", "Paikuhan", "Beerus", "Tapion", "Slug", "Mai", "Shallot", "Li Shenron", "Omega Shenron"]

const multi chara = ["Goku", "Vegeta", "Gohan", "Freezer", "Cell", "Majin Buu", "Piccolo", "Vegetto", "Gogeta", "Gotenks", "Black Goku", "Trunks (futur)", "Goten", "Gohan (futur)",
"Baddack", "Broly", "Cooler", "Bojack", "Baby", "Kafla", "C-21"]

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté : ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');
