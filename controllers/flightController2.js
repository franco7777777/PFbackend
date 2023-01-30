const Flights2 = require("../models/flights2")

const flights2Get = async (req, res) => {
  try {
    const resultado = await Flights2.find().lean()
    return res.json(resultado)
  } catch (error) {
    console.log("error at get Flights2", error)
  }
}

const flights2Create = async (req, res) => {
  try {
    const newFlights2 = new Flights2(req.body)
    await newFlights2.save()
    return res.send("Flights2 created")
  } catch (error) {
    return res.send(console.log("error Flights2 creacion", error))
  }
}

const flights2Delete = async (req, res) => {
  try {
    const { id } = req.params
    await Flights2.findByIdAndDelete(id)
    return res.json("Flights2 deleted")
  } catch (error) {
    return res.send("error at delete Flights2", error)
  }
}

const flights2Update = async (req, res) => {
  try {
    const { id } = req.params
    await Flights2.findByIdAndUpdate(id, req.body)
    return res.send("listo")
  } catch (error) {
    return res.send("error at update Flights2", error)
  }
}

module.exports = { flights2Get, flights2Update, flights2Delete, flights2Create }
