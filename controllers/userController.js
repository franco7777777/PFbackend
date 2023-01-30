const User = require("../models/users")
const bcrypt = require("bcryptjs")

const userGet = async (req, res) => {
  try {
    const users = await User.find().lean()
    return res.json(users)
  } catch (error) {
    return res.send("error to get users", error)
  }
}

const userCreate = async (req, res) => {
  try {
    const { email } = req.body
    const exist = await User.findOne({ email })
    if (exist) {
      return res.send("user already exist")
    }
    const create = new User(req.body)
    await create.save()
    return res.send(`${create.status} created`)
  } catch (error) {
    return res.send(`error at create`, error)
  }
}

const userDelete = async (req, res) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    return res.json("user deleted")
  } catch (error) {
    return res.send("error at delete user", error)
  }
}

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { password } = req.body

    if (password) {
      const salt = await bcrypt.genSalt(5)
      const dos = await bcrypt.hash(password, salt)
      await User.findByIdAndUpdate(id, req.body)
      await User.findByIdAndUpdate(id, { password: dos })
      return res.send("user updated")
    }
    await User.findByIdAndUpdate(id, req.body)
    return res.send("user update")
  } catch (error) {
    return res.send(`error at update user`, error)
  }
}

const usertransaction = async (req, res) => {
  try {
    const { id } = req.params
    const { asiento, vuelo, precio, origen, destino, equipaje } = req.body
    if (!asiento || !vuelo || !precio || !origen || !destino || !equipaje) {
      return res.send("missing data")
    }
    await User.findByIdAndUpdate(id, {
      $push: {
        transactions: {
          seatId: asiento,
          fligthId: vuelo,
          finalPrice: precio,
          origin: origen,
          destination: destino,
          baggageId: equipaje,
        },
      },
    })
    res.send("transaction made")
  } catch (error) {
    return res.send(console.log("error when making the transanction", error))
  }
}

module.exports = {
  userCreate,
  userGet,
  userDelete,
  userUpdate,
  usertransaction,
}
