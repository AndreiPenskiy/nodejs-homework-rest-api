const contactOperations = require("../../models/contacts");

const add = async (req, res) => {
    const result = await contactOperations.add(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
};

module.exports = add;