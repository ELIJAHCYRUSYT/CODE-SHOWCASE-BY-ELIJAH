module.exports = {
    config: {
          name: "slowmode",
          description: "Set the slowmode for the channel!",
          aliases: ['sm']
    },
  run: async (bot, message, args) => {
  
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
      
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Nice Try! You Do Not Have Permissions To set slowmode** ");
    
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      `Slowmode of this channel set too **${args[0]}**`
    );
  },
};
