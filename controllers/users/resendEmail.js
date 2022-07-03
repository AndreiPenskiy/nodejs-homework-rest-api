const { User } = require("../../models");
const { sendEmail } = require("../../helpers/");
const { NotFound, BadRequest } = require("http-errors");

const verifyUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw NotFound("missing required field email");
    };

    const user = await User.findOne({ email });

  if (!user) {
    throw NotFound();
    };
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
    };

    const { verificationToken } = user;
    
  const mail = {
        to: email,
        subject: "Подтверждение email",
        html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`
    };

    await sendEmail(mail);
    
  res.json({
    message: "Verification email sent",
  });
    
};

module.exports = verifyUser;
