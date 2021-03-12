const { getAllSkills, getSkillDescription } = require('./../client/D&DClient');

const help = `Skill Commands:\n
    !skill help - Prints available commands for !skill\n
    !skill list - Lists all skills\n
    !skill desc {skillName} - Prints out the skill description\n`;

module.exports = {
	name: 'skill',
	description: 'Retrieves skill info',
	help: help,
	execute(message, args) {
		const [subCommand, ...inputs] = args;

		switch (subCommand) {
		case 'list':
			getAllSkills()
		    .then(skills => message.channel.send(skills));
			break;
		case 'desc':
			getSkillDescription(inputs[0])
		      .then(skillDescription => message.channel.send(skillDescription));
			break;
		case 'help':
		default:
			message.channel.send(help);
		}
	},
};
