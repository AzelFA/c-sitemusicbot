const Levels = require('discord-xp');

module.exports = {
  name: 'level',
  description: "Get information about user's level",
  options: [
    {
      name: 'user',
      type: 6, //USER Type
      description: 'The user you want to see their level',
      required: true,
    }
  ],

  async execute(interaction, client, message,) {
    const member = interaction.options.get('user');
    if (!member) {
      return interaction.reply('You need to mention the member');
    }
    const userId = member.value;
    const guildId = interaction.guild.id;

    const target = await Levels.fetch(userId, guildId);
    if (!target)
    return interaction.reply(`${member.user} does not have any levels within the server`);
        
    try{
    interaction.reply(`${member.user} is level ${target.level} and has ${target.xp}/${Levels.xpFor(target.level + 1)}`);
    } catch (err) {
      console.log(err);
    }

  }, 
};