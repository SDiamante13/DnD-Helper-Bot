const {
	getSpellsByLevel,
	getSpellDescription,
	searchSpellsByName,
} = require('./../client/D&DClient');

const help = `Spell Commands:\n
    !spell help - Prints available commands\n
    !spell lvl {level} {className} - Lists all spells of the given level. Optionally filter by providing a class type.\n
    !spell desc {spellName} - Prints out spell description for given spell\n
    !spell search {fuzzySearchTerm} - Performs a fuzzy search for the spell, returns list of spells that matches the search term\n`;

module.exports = {
	name: 'spell',
	description: 'Retrieves spell info',
	help: help,
	execute(message, args) {
		const [ subCommand, ...inputs ] = args;
	  switch (subCommand) {
	    case 'lvl':
		    getSpellsByLevel(inputs[0], inputs[1])
		      .then(spells => message.channel.send(spells));
	  	  break;
    	case 'desc':
	  	  getSpellDescription(inputs[0])
		     .then(spellDescription => {
					if (spellDescription.length > 1900) {
						spellDescription.split('\n')
							.filter(desc => desc.length > 0)
							.forEach(desc => {
								message.channel.send(desc);
							});
					}
					else {
						message.channel.send(spellDescription);
					}
				});
	  	  break;
  	  case 'search':
	  	  searchSpellsByName(inputs[0])
		      .then(spells => message.channel.send(spells.slice(0, 1900)));
	  	  break;
	    case 'help':
  	  default:
		    message.channel.send(help);
		}
	},
};