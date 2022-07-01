const express = require("express");
const { users: ctrl } = require("../../controllers");
const { validation, auth, ctrlWrapper, upload } = require("../../middlewares");
const { joiSubscriptionSchema } = require("../../models/user");

const router = express.Router();
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/", auth, validation(joiSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription));
router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;