import { getUserInfo } from '../../utils/botUtils';
import botModel from '../botModel.js';

export default function (controller) {
  controller.hears(['join'], 'direct_message', (bot, message) => {
    getUserInfo(bot, message.user)
      .then((user) => {
        botModel.subscribeUser(user);
    });
    bot.startConversation(message, (err, convo) => {
      convo.say('You have been resubscribed, thanks!')
    });
  });
};
