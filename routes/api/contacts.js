const express = require('express')

const {validation, ctrlWrapper} = require("../../middlewares");
const { contactJoiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();


router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(contactJoiSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validation(contactJoiSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;