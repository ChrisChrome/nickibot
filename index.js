const Discord = require('discord.js');
const bot = new Discord.Client();
token = ''
//Ready
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setGame('With NickiTaylor', 'https://www.twitch.tv/nickitaylor')
});
bot.on('message', (message)  => {
if(message.guild.id == "322878046023712770"){
	if(message.content == "=help"){
		message.react("📬")
		message.author.send("==NICKIBOT HELP==\n\n==COMMANDS==\n\n=help -- Shows This!\n=stream -- Sends Her Twitch!\n=twitter -- Sends Her Twitter!\n=insta -- Sends Her Instagram!\n=yt -- Sends Her YouTube!\n=fb -- Sends Her Facebook!\n\n==LINKS==\n\nTwitter: https://www.twitter.com/imNickiTaylor \nInstagram: https://www.instagram.com/nickitaylor/ \nYouTube: https://www.youtube.com/nickitaylortv \nFacebook: https://www.facebook.com/NickiTaylorMusic \n\n==FOR MORE HELP==\n\nIf Something Doesnt Work As It Should Please DM <@289884287765839882>!")
	};
	if(message.content == "=stream"){
		message.react("📬")
		message.author.send("Watch Nicki On Twitch!\nhttps://www.twitch.tv/nickitaylor")
	};
	if(message.content == "=twitter"){
		message.react("📬")
		message.author.send("Check Out Her Twitter!\n https://www.twitter.com/imNickiTaylor")
	};
	if(message.content == "=insta"){
		message.react("📬")
		message.author.send("She Has An Instagram!\n https://www.instagram.com/nickitaylor/")
	};
	if(message.content == "=yt"){
		message.react("📬")
		message.author.send("Check Out Her Youtube Page!\n https://www.youtube.com/nickitaylortv")
	};
	if(message.content == "=fb"){
		message.react("📬")
		message.author.send("Dont Forget About Facebook!\n https://www.facebook.com/NickiTaylorMusic")
	};
};
});

bot.login(token)