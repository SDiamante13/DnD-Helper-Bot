const Discord = require('discord.js');
const keepAlive = require('./server.js');
const getCommands = require('./get-commands.js');
const { prefix } = require('./config');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

getCommands().forEach(command => bot.commands.set(command.name, command));

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	switch (command) {
	case 'spell':
		bot.commands.get('spell').execute(message, args);
		break;
	case 'skill':
		bot.commands.get('skill').execute(message, args);
		break;
	case 'weapon':
		bot.commands.get('weapon').execute(message, args);
		break;
	case 'help':
		bot.commands.get('help').execute(message, args);
		break;
	default:
    // noop
	}
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

keepAlive();
bot.login(process.env.TOKEN);
