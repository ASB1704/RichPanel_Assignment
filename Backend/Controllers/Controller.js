const bcrypt = require('bcrypt');
const UserModel = require('../Models/user');

async function signup(req, res) {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered successfully.');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user.');
  }
}

async function signin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).send('User not found');
    }

    bcrypt.compare(password, user.password, (err,response) => {
      if(err) console.log(err);
      console.log(response);
      if (response) {
        return res.status(200).send('Signin successful.');
      } else {
        return res.status(401).send('Invalid email or password.');
      }
    })
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).send('Error during signin.');
  }
}

module.exports = {
  signup,
  signin,
};
