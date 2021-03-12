const fetch = require('node-fetch');
const { DND_API_BASE_URL } = require('./../constants');

const getSpellDescription = (spellName) => {
	return fetch(`${DND_API_BASE_URL}/spells/${spellName}`)
		.then(res => {
			return res.json();
		})
		.then(data => {
			if (data.error) {
				return `The spell ${spellName} was not found.`;
			}
      
			return data.desc[0];
		});
};

const getSpellsByLevel = (level) => {
	return fetch(`${DND_API_BASE_URL}/spells?level=${level}`)
		.then(res => {
			return res.json();
		})
		.then(data => {
			if (data.count < 1) {
				return `Spells of level ${level} were not found.`;
			}

			const spells = data.results.map(spell => spell.index);
			return spells.toString().split(',').join('\n');
		});
};

const searchSpellsByName = (name) => {
	return fetch(`${DND_API_BASE_URL}/spells?name=${name}`)
		.then(res => {
			return res.json();
		})
		.then(data => {
			if (data.count < 1) {
				return `No spells containing ${name} were found.`;
			}

			const spells = data.results.map(spell => spell.index);
			return spells.toString().split(',').join('\n');
		});
};

const getAllSkills = () => {
	return fetch(`${DND_API_BASE_URL}/skills`)
		.then(res => {
			return res.json();
		})
		.then(data => {
			const skills = data.results.map(skill => skill.name);
			return skills.toString().split(',').join('\n');
		});
};

const getSkillDescription = (skillName) => {
	return fetch(`${DND_API_BASE_URL}/skills/${skillName.toLowerCase()}`)
		.then(res => {
			return res.json();
		})
		.then(data => {
			return data.error ?
				`The skill ${skillName} was not found.` :
				data.desc[0];
		});
};

const getAllWeapons = () => {
	return fetch(`${DND_API_BASE_URL}/equipment-categories/weapon`)
		.then(res => {
			return res.json();
		})
		.then(data => {
			const weapons = data.equipment
      .filter(weapon => !weapon.url.includes('magic'))
      .map(weapon => weapon.index);
			return weapons.toString().split(',').join('\n');
		});
};

const getWeaponStats = (weaponName) => {
	return fetch(`${DND_API_BASE_URL}/equipment/${weaponName.toLowerCase()}`)
		.then(res => {
			return res.json();
		})
		.then(data => {
      if (data.error) {
        return `The weapon ${weaponName} was not found.`
      } 
      const damageDice = data.damage.damage_dice;
      const range = data.range.long != null ? 
      `${data.range.normal}, ${data.range.long}` :
       `${data.range.normal}`
			return `Damage Dice: ${damageDice} \nRange: ${range}`;
		});
};

module.exports.getSpellDescription = getSpellDescription;
module.exports.getSpellsByLevel = getSpellsByLevel;
module.exports.searchSpellsByName = searchSpellsByName;
module.exports.getAllSkills = getAllSkills;
module.exports.getSkillDescription = getSkillDescription;
module.exports.getAllWeapons = getAllWeapons;
module.exports.getWeaponStats = getWeaponStats;
