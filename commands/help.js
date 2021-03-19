const getCommands = require('./../get-commands');
const { prefix } = require('./../config');

module.exports = {
	name: 'help',
	description: 'Describes all of the bot\'s commands',
	execute(message) {
		const commandDescriptions = getCommands().map(
			command => `${prefix}${command.name} - ${command.description}`,
		);

		message.channel.send(`DnD Helper Bot Commands\n\n${commandDescriptions.join('\n')}`);
	},
};

