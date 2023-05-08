const argon2 = require('argon2');
const {addUser, findUserByUsername} = require("./users");
const jwt = require('jsonwebtoken');

const tokenConfig = {
  issuer: "https://0.0.0.0:8080",
  audience: "users",
  expiresIn: "1h"
};

const signUp = async (req, res, next) => {
  const {username, password} = req.body;

  const user = await findUserByUsername(username);
  if (user) {
    return res.status(400).json({message: "Username already exists."});
  }

  const encryptedPassword = await generateSaltedHash(password);
  const newUser = {
    username: username,
    password: encryptedPassword
  };
  const isSuccessful = await addUser(newUser);
  if (isSuccessful) {
    res.json({message: "You have signed up successfully!"});
  } else {
    res.status(400).json({message: "Failed to sign up."});
  }
};

const signIn = async (req, res) => {
  const {username, password} = req.body;
  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(403).json({message: "User with the given username is not found."});
  }

  const isPasswordCorrect = await verify(password, user.password);
  if (isPasswordCorrect) {
    const token = generateToken(username);
    res.json({
      message: "You have signed in successfully!",
      token: token
    });
  } else {
    res.status(400).json({message: "Incorrect password."});
  }
};

const autoSignIn = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);

    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    res.sendStatus(200);
  })
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);

    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  })
};

const generateSaltedHash = async (password) => {
  try {
    return await argon2.hash(password);
  } catch (err) {
    console.error(`Failed to hash password ${err}`);
  }
};

const verify = async (password, hash) => {
  try {
    return argon2.verify(hash, password);
  } catch (err) {
    console.error(`Failed to verify password ${err}`);
  }
};

const generateToken = (username) => {
  return jwt.sign(
    {username: username},
    process.env.JWT_SECRET,
    tokenConfig
  );
};

exports.signUp = signUp;
exports.signIn = signIn;
exports.autoSignIn = autoSignIn;
exports.authenticate = authenticate;
