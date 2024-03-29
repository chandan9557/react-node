import mongoose from "mongoose";
const connectdata = async (data) => {
  try {
    const db_data = {
      dbName: "ducat",
    };
    await mongoose.connect(data, db_data);
    console.log("connection connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectdata;
