const dndClient = require('./../client/D&DClient')
const { commands } = require('./../commands')

const sendMessageAboutSpells = (msg) => {
  const [, subCommand, inputValue] = msg.content.split(' ')

  switch (subCommand) {
    case 'lvl':
      printSpellsByLevel(msg, inputValue)
      break;
    case 'desc':
      printSpellDescription(msg, inputValue)
      break;
    case 'search':
      break;
    case 'help':
    default:
      msg.channel.send(commands.spell.help)
  }
}

const printSpellsByLevel = (msg, level) => {
  dndClient.getSpellsByLevel(level)
    .then(spells => msg.channel.send(spells))
}

const printSpellDescription = (msg, spellName) => {
  dndClient.getSpellDescription(spellName)
    .then(spellDescription => msg.channel.send(spellDescription))
}

const sendMessageAboutSkills = (msg) => {
  const [, subCommand, inputValue] = msg.content.split(' ')

  switch (subCommand) {
    case 'list':
      printAllSkills(msg)
      break;
    case 'desc':
      printSkillDescription(msg, inputValue)
      break;
    case 'help':  
    default:
      msg.channel.send(commands.skill.help)
  }
}

const printAllSkills = (msg) => {
  dndClient.getAllSkills()
    .then(skills => msg.channel.send(skills))
}

const printSkillDescription = (msg, skillName) => {
  dndClient.getSkillDescription(skillName)
    .then(skillDescription => msg.channel.send(skillDescription))
}

const sendHelp = (msg) => {
  const availableCommands = `Available commands: \n!spell\n!skill\nFor more info about a command use {command} help`
  msg.channel.send(availableCommands)
}

module.exports.sendMessageAboutSpells = sendMessageAboutSpells
module.exports.printSpellsByLevel = printSpellsByLevel
module.exports.printSpellDescription = printSpellDescription
module.exports.sendMessageAboutSkills = sendMessageAboutSkills
module.exports.printAllSkills = printAllSkills
module.exports.printSkillDescription = printSkillDescription
module.exports.sendHelp = sendHelp