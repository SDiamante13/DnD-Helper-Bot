const Discord = require('discord.js')
const dndClient = require('./client/D&DClient')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.author.bot) return

  // Spell Command
  if (msg.content.includes('!spell')) {
    if (msg.content.includes('lvl')) {
      const level = msg.content.split('!spell lvl ')[1]
      dndClient.getSpellsByLevel(level)
      .then(spells => msg.channel.send(spells))
    } else {
        const [, spellName, additionalParam] = msg.content.split(' ')

    if (spellName) {
       dndClient.getSpell(spellName, additionalParam)
       .then(spellDescription => msg.reply(spellDescription))
    } else {
      msg.reply('To use !spell command, please include a spell name (i.e. !spell fire-bolt)')
    }
    }
  }

  // Skill command
  if (msg.content.includes('!skill')) {
    const skillName = msg.content.split(' ')[1]
    if (skillName) {
      dndClient.getSkillDescription(skillName)
      .then(skillDescription => msg.channel.send(skillDescription))
    } else {
      dndClient.getAllSkills()
    .then(skills => msg.channel.send(skills))
    }
  }
})


client.login(process.env.TOKEN)
