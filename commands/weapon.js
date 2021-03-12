const { getAllWeapons, getWeaponStats } = require('./../client/D&DClient');

const help = `Weapon Commands:\n
    !weapon help - Prints available commands\n
    !weapon list - Lists all weapons\n
    !weapon stats {weaponName} - Prints out weapon stats for given weapon\n`;

module.exports = {
	name: 'weapon',
	description: 'Retrieves weapon info',
	help: help,
	execute(message, args) {
		const [ subCommand, ...inputs ] = args;
	  switch (subCommand) {
	    case 'list':
			getAllWeapons()
				.then(weapons => message.channel.send(weapons));
	  	  break;
    	case 'stats':
        getWeaponStats(inputs[0])
          .then(stats => message.channel.send(stats));
	  	  break;
  	  case 'help':
	    default:
		     message.channel.send(help);
		}
	},
};