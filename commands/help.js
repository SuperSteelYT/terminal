const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let prefixjson = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
    if (!prefixjson[message.guild.id]) { 
      prefixjson[message.guild.id] = {
        prefix: ">_"
      };
    }
    let prefix = prefixjson[message.guild.id].prefix

    if (args.includes("kick")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Kick:** A command that kicks an user. Usage: >_kick (user)")
    } else {
    if (args.includes("ban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Ban:** A command that bans an user. Usage: >_ban (user) (reason)")
    } else {
    if (args.includes("purge")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Purge:** A command that purges messages. Usage: >_purge (interger)")
    } else {
    if (args.includes("softban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Softban:** A command that bans and unbans a user. This is used to kick an user but also delete their messages. Usage: >_softban (user) (reason)")
    } else {
    if (args.includes("mute")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Mute:** A command that mutes an user from typing. Usage: >_mute (user) (time)")
    } else {
    if (args.includes("blind")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Blind:** A command that blinds an user from typing or seeing future messages. Usage: >_blind (user) (time)")
    } else {
    if (args.includes("addrole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Addrole:** A command that adds a role to an user. Usage: >_addrole (user) (role name)")
    } else {
    if (args.includes("removerole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Removerole:** A command that removes a role from an user. Usage: >_removerole (user) (rolename)")
    } else {
    if (args.includes("censor")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Censor:** A command that censors a certain word. Usage: >_censor (word)")
    } else {
     if (args.includes("developers")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Developers:** A command that shows the developers and owners of Terminal. Usage: >_developers")
    } else {
     if (args.includes("help")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Help:** A command that lists commands. Usage: >_help")
    } else {
     if (args.includes("uptime")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Uptime:** A command that shows the bot uptime. Usage: >_uptime")
    } else {
     if (args.includes("host")) {
         message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Host:** A command that shows the current host. Usage: >_host")
     } else {
     if (args.includes("autorole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Autorole:** A command which toggles autorole for the server. Usage: >_autorole (role name)")
    } else {
     if (args.includes("invites")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Invites:** A command which blocks/allows invites to be advertised. Usage: >_invites (block)/>_invites")
    } else {
     if (args.includes("unban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Unban:** A command which unbans an user. Usage: >_unban (user)")
    } else {
     if (args.includes("unmute")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Unmute:** A command which unmutes an user. Usage: >_unmute (user)")
    } else {
     if (args.includes("ping")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Ping:** A command which shows the bot's ping. Usage: >_ping")
    } else {
    if (args.includes("join")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Join:** A command which makes Terminal join a VC. Usage: >_join")
    } else {
    if (args.includes("play")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Play:** A command which makes Terminal play an URL. Usage: >_play (URL)")
    } else {
    if (args.includes("leave")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Leave:** A command which makes Terminal leave a VC. Usage: >_leave")
    } else {
    if (args.includes("lockdown")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Lockdown:** A command which locks down a channel, preventing anyone but admins to speak. You have to unlock via another channel to properly unlock the channel. Usage: >_lockdown lock/>_lockdown")
    } else {
    if (args.includes("prefix")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Prefix:** A command which changes the bot's prefix. Example: *'Hey Bot_'* would make *'Hey Bot_help'*. Usage: >_prefix (prefix)")
    } else {
    if (args.includes("announce")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Announce:** A command which announces a message in a specific channel. Usage: >_announce (channel) (message)")
    } else {
    if (args.includes("poll")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Poll:** A command which creates a poll. Usage: >_poll (question)")
    } else {
    if (args.includes("timer")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Timer:** A command which creates a timer for seconds/minutes/days/months/years and adds a message. Usage: >_timer (time)")
    } else {
    if (args.includes("pause")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Pause:** A command that pauses the current song playing. Usage: >_pause")
    } else {
    if (args.includes("resume")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Resume:** A command that resumes a song. Usage: >_resume")
    } else {
    if (args.includes("volume")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Volume:** A command that changes volume of a video. Usage: >_volume (0/200)")
    } else {
    if (args.includes("serverinfo")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Server Info:** A command that shows all the information about the current guild. Usage: >_serverinfo")
    } else {
    if (args.includes("image")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Image Embed:** A command that puts an image URL into an embed. This is used to get around the explicit message blocker for images. Usage: >_image (url)")
    } else {
    if (args.includes("ticket")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Ticket:** A command that creates a ticket to report rulebreakers. Usage: >_ticket (mention) (report)")
    } else {
    if (args.includes("hackban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Hackban:** A command that bans a user ID. Usage: >_hackban (user id) (reason)")
    } else {
    if (args.includes("delete")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Delete:** A command that deletes the previous message. Usage: >_delete")
    } else {
     if (args.includes("github")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Github:** A command that directs you to our github page. Usage: >_github")
    } else {
     if (args.includes("botinfo")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Bot Info:** A command that displays all bot information. Usage: >_botinfo")
    } else {
     if (args.includes("invite")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Invite:** [Not >_invites] A command that sends you an invitation link for the bot in your DMs. Usage: >_invite")
    } else {
     if (args.includes("shutdown")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Shutdown:** [Bot admin command] A command that shuts the bot down. Usage: >_shutdown")
    } else {
     if (args.includes("blacklist")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Black List:** [Bot admin command] A command that blacklists a user from using any commands. Usage: >_blacklist (id) allow/deny")
    } else {
     if (args.includes("gleave")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Guild Leave:** [Bot admin command] A command that leaves a guild. Usage: >_gleave (id)")
    } else {
     if (args.includes("channelinfo")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Channel Info:** A command that displays all the channel information. Usage: >_channelinfo")
    } else {
     if (args.includes("userinfo")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**User Info:** A command that displays all the information on one user. Usage: >_userinfo (mention)")
    } else {
     if (args.includes("pg")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**PG Mode:** A command that turns on PG mode. This blocks all swears in the server. Usage: >_pg (on/off)")
    } else {
     if (args.includes("unblind")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Unblind:** A command that unblinds a person. Usage: >_pg (on/off)")
    } else {
     if (args.includes("pin")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Pin:** A command that pins a message by it's ID. Usage: >_pin (id)")
    } else {
     if (args.includes("unpin")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Unpin:** A command that unpins a message by it's ID. Usage: >_unpin (id)")
    } else {
    if (args.includes("warn")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Warn:** A command that warns an user by their DM. It will mention them in chat if failed. It should be used in which: `@mention is spamming`. Usage: >_warn (mention) (reason)")
    } else {
    if (args.includes("createchannel")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Create Channel:** A command that creates a channel. Usage: >_createchannel (name)")
    } else {
    if (args.includes("reload")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Reload:** [Bot admin command] A command that reloads all commands. Usage: >_reload")
    } else {
    if (args.includes("nick")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Nick:** A command that nicknames the bot to whatever you want it named. Usage: >_nick (name)")
    } else {
    if (args.includes("activity")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Activity:** [Bot admin command] A command that sets the bot activity to whatever you want the activity to be. Usage: >_activity (p/w/l) (activity)")
    } else {
    if (args.includes("suggest")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Suggest:** A command that sends the bot developers your suggestions. Usage: >_suggest (suggestion)")
    } else {
    if (args.includes("roleinfo")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Role Info:** A command that supplies all known information about a role. Usage: >_roleinfo (role)")
    } else {
    if (args.includes("avatar")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Avatar:** A command that fetches a users avatar URL. Usage: >_avatar (mention)")
    } else {
    if (args.includes("say")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Say:** [Bot admin command] A command that repeats whatever you say. Usage: >_say (text)")
    } else {
    if (args.includes("host")) {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Host:** A command that tells you who is hosting the bot (e.g speed or square). Usage: >_host")
    } else {

        fs.readdir("./commands/", (err, files) => {

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        let serverembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setAuthor('Terminal Panel - Prefix: ' + prefix)
        .setTitle(jsfiles.length + " commands:")
        .setDescription("Terminal: A moderation bot. Do " + prefix + "help (command) to get more info.")
        .addField("Bot Admins:", "`activity`, `shutdown`, `restart`, `blacklist`, `gleave`, `reload`")
        .addField("Punishment:", "`kick`, `ban`, `unban`, `softban`, `hackban`, `mute`, `unmute`, `blind`, `unblind`, `warn`")
        .addField("Roles:", "`addrole`, `removerole`, `autorole`, `roleinfo`")
        .addField("Messages:", "`censor`, `pg`, `lockdown`, `purge`, `invites`, `announce`, `ticket`, `poll`, `delete`, `pin`, `unpin`")
        .addField("Info:", "`serverinfo`, `botinfo`, `channelinfo`, `userinfo`, `host`")
        .addField("Other:", "`developers`, `image`, `help`, `host`, `uptime`, `ping`, `prefix`, `github`, `invite`, `createchannel`, `nick`, `suggest`, `avatar`")
        .addField("Music:", "`play`, `join`, `leave`, `pause`, `resume`, `volume`")
     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**");
     message.channel.send(serverembed);

})}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
module.exports.help = {
    name: "help"
};
