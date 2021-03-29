const fetch = require('node-fetch');
const { DND_API_BASE_URL } = require('./../constants');

const searchForMonsters = async (query) => {
	try {
		const response = await fetch(`${DND_API_BASE_URL}/monsters?name=${query}`);
		const data = await response.json();
		if (data.count < 1) {
			return `No monsters found for search parameter: ${query}`;
		}

		const monsters = data.results.map(spell => spell.index);

		return monsters.toString().split(',').join('\n');
	}
	catch(error) {
		console.error(`***Error in *** ${error.message}`);
		return 'An error occurred processing your request.';
	}
};

const getMonsterStats = async (monsterName) => {
	try {
		const response = await fetch(`${DND_API_BASE_URL}/monsters/${monsterName}`);
		const data = await response.json();
		if (data.error) {
			return `No monster with the name of ${monsterName} was found.`;
		}
		const { walk, fly, swim } = data.speed;
		const walkSpeed = walk ? `walk(${walk})` : '';
		const flySpeed = fly ? `fly(${fly})` : '';
		const swimSpeed = swim ? `swim(${swim})` : '';
		const actions = data.actions.map(action => ` ${action.name}`);
		const specialAbilities = data.special_abilities.map(ability => `${ability.name} - ${ability.desc}`);
		return `${data.name}\n
AC: ${data.armor_class}
HP: ${data.hit_points}
Speed: ${walkSpeed} ${flySpeed} ${swimSpeed}
Actions: ${actions.toString()}
Abilities:\n${specialAbilities.toString().split(',').join('\n')}`;
	}
	catch(error) {
		console.error(`***Error in *** ${error.message}`);
		return 'An error occurred processing your request.';
	}
};

module.exports.searchForMonsters = searchForMonsters;
module.exports.getMonsterStats = getMonsterStats;