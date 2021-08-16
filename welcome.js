const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
 if (member.guild.id !== "ur server id" return;
 const welcomeCard = new canvacord.Welcomer()
 .setUsername(member.user.username)
 .setDiscriminator(member.user.discriminator)
 .setAvatar(member.user.displayAvatarURL({format:
 .setColor("title", "#68048a")
 .setColor("username-box", "#68048a")
 .setColor("discriminator-box", "#68048a")
 .setColor("message-box", "#68048a")
 .setColor("border", "#68048a")
 .setColor("avatar", "#68048a")
 .setBackgroundImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F723953708831129024%2F&psig=AOvVaw23yGKLgjYQ9F3dIIqcKGn5&ust=1629202752103000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPii_a7DtfICFQAAAAAdAAAAABAD")
 .setMemberCount(member.guild.membercount)
 let attachment = new Discord.MessageAttachment(await
 welcomeCard.build(), "welcome.png")
 member.guild.channels.cache.get("your welcome channel id").send
 (member.user.toString(), attachment) 
)}
          
 
