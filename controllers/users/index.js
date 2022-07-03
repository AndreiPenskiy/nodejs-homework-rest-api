const updateSubscription = require("./updateSubscription");
const getCurrent = require("./getCurrent");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const verifyUser = require("./resendEmail");

module.exports = {
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  verifyUser
};