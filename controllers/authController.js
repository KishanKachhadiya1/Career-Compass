import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { firstname, lastname, password, email } = req.body;
    if (!firstname) {
      return res
        .status(400)
        .send({ success: false, message: "Please enter first name" });
    }
    if (!lastname) {
      return res
        .status(400)
        .send({ success: false, message: "Please enter last name" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "Please enter password" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "Please enter email" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "Email is already registered" });
    }

    const user = await userModel.create({
      firstname,
      lastname,
      email,
      password,
    });
    res
      .status(201)
      .send({ success: true, message: "User created successfully", user });
      
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in registration controller",
      success: false,
      error,
    });
  }
};
