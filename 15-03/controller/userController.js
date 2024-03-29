import userModel from "../model/userModel.js";

class user {
  static getData = async (req, res) => {
    try {
      let result = await userModel.find();
      //   console.log(result);
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  };

  static createData = async (req, res) => {
    // console.log(req.body);
    try {
      let doc = new userModel({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
      });
      await doc.save();
      res.json("data added");
    } catch (err) {
      console.log(err);
    }
  };

  static deleteData = async (req, res) => {
    // console.log(req.params.id);

    try {
      await userModel.findByIdAndDelete(req.params.id);
    } catch (err) {
      console.log(err);
    }
  };

  static findOne = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  static updateData = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, age, city } = req.body;
      const updatedItem = await userModel.findByIdAndUpdate(
        id,
        { name, age, city },
        { new: true }
      );
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

export default user;
