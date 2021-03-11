const help = `Available commands:\n
    ****For more info about a command use it without any arguments****\n
    !help\n
    !spell\n 
    !skill\n
    !equipment\n`;

module.exports = {
	name: 'help',
	description: 'Prints available commands',
	help: help,
	execute(message) {
		message.channel.send(help);
	},
};