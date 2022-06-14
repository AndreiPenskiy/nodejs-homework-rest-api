const { NotFound } = require("http-errors");
const contactOperations = require("../../models/contacts");

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await contactOperations.updateById(id, req.body);
    if (!result) {
        throw new NotFound(`Contact with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};

module.exports = updateById;