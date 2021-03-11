const Discord = require('discord.js')
const { commands } = require('./commands')
const client = new Discord.Client()
const {
  sendMessageAboutSpells,
  sendMessageAboutSkills,
  sendHelp
} = require('./service/BotMessenger')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.author.bot) return

  switch (msg.content.split(' ')[0]) {
    case (commands.spell.value):
      sendMessageAboutSpells(msg)
      break
    case (commands.skill.value):
      sendMessageAboutSkills(msg)
      break
    case (commands.help.value):
      sendHelp(msg)
    default:
    // noop
  }
})

client.login(process.env.TOKEN)
