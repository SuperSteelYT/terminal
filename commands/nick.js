module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "372078453236957185")
    if (message.author.id !== "365274392680333329") return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You are not a Terminal developer.")
    try {
    let nick= args.join(' ');
    if (!message.member.hasPermission("MANAGE_MESSAGES") && (!message.member.hasPermission("CHANGE_NICKNAME")))  return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have permissions to change my nickname.");
    message.guild.members.get(bot.user.id).setNickname(nick);
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Changed nickname to " + "**" + nick + "**")
} finally {
  }
}
module.exports.help = {
    name: "nick"
}