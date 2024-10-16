const PersonalDetail = require("../modal/PersonalDetails");

exports.createPersonalDetails = async (req, res) => {
  try {
    const personalDetails = await PersonalDetail.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        personalDetails,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: res.status,
      message: error.message,
    });
  }
};
