import os from 'os';

export default (controller) => {
  controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'], 'direct_message,direct_mention,mention', function (bot, message) {
    let hostname = os.hostname();
    let uptime = formatUptime(process.uptime());
    bot.reply(message,
      `:robot_face: I am a bot named <@${bot.identity.name}>.
      I have been running for ${uptime} on ${hostname}.`
    );
  });

  const formatUptime = (uptime) => {
    let unit = 'second';

    if (uptime > 60) {
      uptime = uptime / 60;
      unit = 'minute';
    }

    if (uptime > 60) {
      uptime = uptime / 60;
      unit = 'hour';
    }

    if (uptime != 1) {
      unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
  }
};
