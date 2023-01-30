const Package = require("../models/package")

const packageGet = async (req, res) => {
  try {
    const users = await Package.find().lean()
    return res.json(users)
  } catch (error) {
    return res.send("error to get users", error)
  }
}

const packageCreate = async (req, res) => {
  try {
    const create = new Package(req.body)
    await create.save()
    return res.send(`package created`)
  } catch (error) {
    return res.send(`error at create`, error)
  }
}

module.exports = {
  packageCreate,
  packageGet,
}
