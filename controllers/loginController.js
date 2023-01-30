const User = require("../models/users")
const Login = async (req, res) => {
  try {
    const { email, password } = req.body

    const userExist = await User.findOne({ email })
    if (userExist) {
      if (!(await userExist.comparesPassword(password))) {
        return res.json("Incorrect Password")
      }
      return res.send(`${userExist.status}`)
    }
    return res.json("Invalid User")
  } catch (error) {
    return res.send(console.log("error at login", error))
  }
}

module.exports = Login
