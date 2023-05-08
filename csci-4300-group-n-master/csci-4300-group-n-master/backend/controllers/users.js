const User = require("../models/user");

const addUser = async (user) => {
  try {
    const {username, password} = user;
    const newUser = new User({username, password});
    await newUser.save();
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({username: username});
    if (!user) {
      console.error(`Cannot find user with username ${username}`);
      return null;
    }
    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}

exports.addUser = addUser;
exports.findUserByUsername = findUserByUsername;
