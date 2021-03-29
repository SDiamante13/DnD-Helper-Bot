const { searchForMonsters, getMonsterStats } = require('./../client/monster');

const help = `Monster commands\n
!monster search {searchTerm}\n
!monster stats {monsterName}`;

module.exports = {
	name: 'monster',
	description: 'Retrieves details on monsters',
	help: help,
	execute(message, args) {
		const [ subCommand, ...inputs ] = args;
	  switch (subCommand) {
	    case 'search':
			searchForMonsters(inputs[0])
				.then(monsters => message.channel.send(monsters));
	  	  break;
    	case 'stats':
			getMonsterStats(inputs[0])
				.then(stats => message.channel.send(stats));
	  	  break;
  	  case 'help':
	    default:
		     message.channel.send(help);
		}
	},
};