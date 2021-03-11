const commands = {
	help: {
		value: '!help',
		description: 'Prints available commands',
	},
	spell: {
		value: '!spell',
		description: 'Retrieves spell info',
		help: 'Spell Commands:\n' +
    '!spell help - Prints available commands for !spell\n' +
    '!spell lvl {level} - Lists all spells of the given level\n' +
    '!spell desc {spellName} - Prints out spell description for given spell\n' +
    '!spell search {fuzzySearchTerm} - Performs a fuzzy search for the spell, returns list of spells that matches the search term\n',
	},
	skill: {
		value: '!skill',
		description: 'Retrieves skill info',
		help: 'Skill Commands:\n' +
    '!skill help - Prints available commands for !skill\n' +
    '!skill list - Lists all skills\n' +
    '!skill desc {skillName} - Prints out the skill description\n',
	},
	equipment: {
		value: '!equipment',
		description: 'Retrieves equipment info',
		help: 'Equipment Commands:\n' +
    '!equipment help - Prints available commands for !weapon' +
    '!equipment categories - Prints out all of the equipment categories' +
    '!equipment categories {category} - Prints out all of the equipment for the given category' +
    '!equipment desc {equipmentName} - Prints out equipment description for the given equipment',
	},
};

module.exports.commands = commands;