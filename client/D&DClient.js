const fetch = require('node-fetch')
const constants = require('./../constants')

const getSpellDescription = (spellName) => {
  return fetch(`${constants.DND_API_BASE_URL}/spells/${spellName}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      if (data.error) {
        return `The spell ${spellName} was not found.`
      }

        return data.desc[0]
    })
}

const getSpellsByLevel = (level) => {
  return fetch(`${constants.DND_API_BASE_URL}/spells?level=${level}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      if (data.count < 1) {
        return `Spells of level ${level} were not found.`
      }

      const spells = data.results.map(spell => spell.name)
      return spells.toString().split(',').join('\n')
    })
}

const getAllSkills = () => {
  return fetch(`${constants.DND_API_BASE_URL}/skills`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      const skills = data.results.map(skill => skill.name)
      return skills.toString().split(',').join('\n')
    })
}

const getSkillDescription = (skillName) => {
  return fetch(`${constants.DND_API_BASE_URL}/skills/${skillName.toLowerCase()}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data.error ?
        `The skill ${skillName} was not found.` :
        data.desc[0]
    })
}

module.exports.getSpellDescription = getSpellDescription
module.exports.getSpellsByLevel = getSpellsByLevel
module.exports.getAllSkills = getAllSkills
module.exports.getSkillDescription = getSkillDescription