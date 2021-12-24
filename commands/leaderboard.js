const Levels = require('discord-xp');

module.exports = {
    name: 'leaderboard',
    description: 'Shows top 5 users level',

    async execute(interaction, client) {
        let str = '';
        const rawLeaderboard = await Levels.fetchLeaderboard(interaction.guild.id, 10); // We grab top 10 users with most xp in the current server.

        if (rawLeaderboard.length < 1) return interaction.reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.


        return interaction.reply(`**Leaderboard**:\n\n${lb.join("\n\n")}`);

    },
};