const fs = require('fs');

module.exports = () => {
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	return commandFiles.map(file => require(`./commands/${file}`));
};