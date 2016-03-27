const getUserInfo = (bot, userId) => {
  return new Promise((resolve, reject) => {
    bot.api.users.info({ user: userId }, (err, response) => {
      if (err) {
        return reject(err);
      }
      return resolve(response.user);
    });
  });
};

export default getUserInfo;