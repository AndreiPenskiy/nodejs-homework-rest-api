const express = require('express')
const router = express.Router()

const {validation, ctrlWrapper} = require("../../middlewares");
const { contactScheme, updateScheme } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");


router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(contactScheme), ctrlWrapper(ctrl.add));

router.put("/:id", validation(updateScheme), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;